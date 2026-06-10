/**
 * Box Integration Module
 * Handles authentication and file operations with Box API
 */

class BoxIntegration {
    constructor() {
        this.clientId = null;
        this.accessToken = null;
        this.boxClient = null;
        this.isInitialized = false;
    }

    /**
     * Initialize Box integration with client ID
     * @param {string} clientId - Box application client ID
     */
    async initialize(clientId) {
        this.clientId = clientId;
        
        // Load Box Content SDK
        if (!window.Box) {
            await this.loadBoxSDK();
        }
        
        this.isInitialized = true;
        console.log('Box integration initialized');
    }

    /**
     * Load Box Content SDK dynamically
     */
    loadBoxSDK() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn01.boxcdn.net/platform/elements/19.0.0/en-US/picker.js';
            script.onload = () => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://cdn01.boxcdn.net/platform/elements/19.0.0/en-US/picker.css';
                document.head.appendChild(link);
                resolve();
            };
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    /**
     * Authenticate with Box using OAuth 2.0
     * Opens popup for user authentication
     */
    async authenticate() {
        if (!this.clientId) {
            throw new Error('Box client ID not set. Call initialize() first.');
        }

        const redirectUri = window.location.origin + window.location.pathname;
        const authUrl = `https://account.box.com/api/oauth2/authorize?` +
            `client_id=${this.clientId}&` +
            `response_type=token&` +
            `redirect_uri=${encodeURIComponent(redirectUri)}`;

        // Check if we're returning from OAuth
        const hash = window.location.hash;
        if (hash && hash.includes('access_token=')) {
            this.accessToken = this.extractAccessToken(hash);
            window.location.hash = ''; // Clear hash
            this.saveAccessToken();
            return this.accessToken;
        }

        // Check for stored token
        const storedToken = this.loadAccessToken();
        if (storedToken && await this.validateToken(storedToken)) {
            this.accessToken = storedToken;
            return this.accessToken;
        }

        // Open authentication popup
        const width = 600;
        const height = 700;
        const left = (screen.width - width) / 2;
        const top = (screen.height - height) / 2;
        
        window.open(
            authUrl,
            'Box Authentication',
            `width=${width},height=${height},left=${left},top=${top}`
        );

        // Wait for authentication
        return new Promise((resolve, reject) => {
            const checkAuth = setInterval(() => {
                const token = this.loadAccessToken();
                if (token) {
                    clearInterval(checkAuth);
                    this.accessToken = token;
                    resolve(token);
                }
            }, 1000);

            // Timeout after 5 minutes
            setTimeout(() => {
                clearInterval(checkAuth);
                reject(new Error('Authentication timeout'));
            }, 300000);
        });
    }

    /**
     * Extract access token from OAuth redirect hash
     */
    extractAccessToken(hash) {
        const params = new URLSearchParams(hash.substring(1));
        return params.get('access_token');
    }

    /**
     * Save access token to localStorage
     */
    saveAccessToken() {
        if (this.accessToken) {
            localStorage.setItem('box_access_token', this.accessToken);
            localStorage.setItem('box_token_time', Date.now().toString());
        }
    }

    /**
     * Load access token from localStorage
     */
    loadAccessToken() {
        const token = localStorage.getItem('box_access_token');
        const tokenTime = localStorage.getItem('box_token_time');
        
        // Tokens expire after 1 hour
        if (token && tokenTime) {
            const elapsed = Date.now() - parseInt(tokenTime);
            if (elapsed < 3600000) { // 1 hour
                return token;
            }
        }
        return null;
    }

    /**
     * Validate access token
     */
    async validateToken(token) {
        try {
            const response = await fetch('https://api.box.com/2.0/users/me', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.ok;
        } catch (error) {
            return false;
        }
    }

    /**
     * Open Box file picker to select CSV file
     * @returns {Promise<Object>} Selected file information
     */
    async pickFile() {
        if (!this.accessToken) {
            await this.authenticate();
        }

        return new Promise((resolve, reject) => {
            const picker = new Box.ContentPicker();
            picker.show('0', this.accessToken, {
                container: '.box-picker-container',
                extensions: ['csv'],
                maxSelectable: 1,
                canUpload: false,
                canSetShareAccess: false,
                canCreateNewFolder: false
            });

            picker.addListener('choose', (files) => {
                if (files && files.length > 0) {
                    resolve(files[0]);
                } else {
                    reject(new Error('No file selected'));
                }
            });

            picker.addListener('cancel', () => {
                reject(new Error('File selection cancelled'));
            });
        });
    }

    /**
     * Download file content from Box
     * @param {string} fileId - Box file ID
     * @returns {Promise<string>} File content as text
     */
    async downloadFile(fileId) {
        if (!this.accessToken) {
            await this.authenticate();
        }

        try {
            const response = await fetch(`https://api.box.com/2.0/files/${fileId}/content`, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to download file: ${response.statusText}`);
            }

            return await response.text();
        } catch (error) {
            console.error('Error downloading file from Box:', error);
            throw error;
        }
    }

    /**
     * Get file information
     * @param {string} fileId - Box file ID
     * @returns {Promise<Object>} File metadata
     */
    async getFileInfo(fileId) {
        if (!this.accessToken) {
            await this.authenticate();
        }

        try {
            const response = await fetch(`https://api.box.com/2.0/files/${fileId}`, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to get file info: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error getting file info from Box:', error);
            throw error;
        }
    }

    /**
     * List files in a folder
     * @param {string} folderId - Box folder ID (default: '0' for root)
     * @returns {Promise<Array>} List of files
     */
    async listFiles(folderId = '0') {
        if (!this.accessToken) {
            await this.authenticate();
        }

        try {
            const response = await fetch(`https://api.box.com/2.0/folders/${folderId}/items`, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to list files: ${response.statusText}`);
            }

            const data = await response.json();
            return data.entries || [];
        } catch (error) {
            console.error('Error listing files from Box:', error);
            throw error;
        }
    }

    /**
     * Search for files by name
     * @param {string} query - Search query
     * @param {string} extension - File extension filter (e.g., 'csv')
     * @returns {Promise<Array>} List of matching files
     */
    async searchFiles(query, extension = null) {
        if (!this.accessToken) {
            await this.authenticate();
        }

        try {
            let url = `https://api.box.com/2.0/search?query=${encodeURIComponent(query)}&type=file`;
            if (extension) {
                url += `&file_extensions=${extension}`;
            }

            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to search files: ${response.statusText}`);
            }

            const data = await response.json();
            return data.entries || [];
        } catch (error) {
            console.error('Error searching files in Box:', error);
            throw error;
        }
    }

    /**
     * Clear stored authentication
     */
    logout() {
        this.accessToken = null;
        localStorage.removeItem('box_access_token');
        localStorage.removeItem('box_token_time');
        console.log('Logged out from Box');
    }
}

// Export for use in other modules
window.BoxIntegration = BoxIntegration;

// Made with Bob
