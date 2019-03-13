class glyph {

    constructor() {
            this.appSecret = "aaIs2anWyL3h3JkPo9vgGxV3ZUz9fwv0",
                this.limit = 6
        }
        // fetch api from server
    async get(searchTerm) {
        let req = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${this.appSecret}&limit=${this.limit}`);
        let result = await req.json();

        // return result to caller
        return {
            result
        };
    }
}