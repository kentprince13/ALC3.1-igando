<<<<<<< HEAD
class glyph {
=======
class glyphs {
>>>>>>> d8e2dcf9a6830a413d7e1d4ca2ac9b8b0b19d71c

    constructor() {
            this.appSecret = "aaIs2anWyL3h3JkPo9vgGxV3ZUz9fwv0",
                this.limit = 6
        }
<<<<<<< HEAD
        //uses fetch api from server
    async get(searchTerm) {
        let req = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${this.appSecret}&limit=${this.limit}`);
=======
        // fetch api from server
    async get(searchTerm) {
        let req = await fetch(`http://api.glyph.com/v1/gifs/search?q=${searchTerm}&api_key=${this.appSecret}&limit=${this.limit}`);
>>>>>>> d8e2dcf9a6830a413d7e1d4ca2ac9b8b0b19d71c
        let result = await req.json();

        // return result to caller
        return {
            result
        };
    }
}