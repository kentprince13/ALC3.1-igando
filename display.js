class UIDisplay {
    constructor() {
            this.gif_height = 150,
                this.gif_width = 334
        }
        // create gif element
    gifElement(gif_url, gif_alt, mainContainer) {

            //create div tag
            let div = document.createElement("div")
            div.className = "card"

            // create img tag and set image properties
            let img = document.createElement("img")
            img.className = "card-img-top"
            img.src = gif_url;
            img.alt = gif_alt;
            img.height = this.gif_height;
            img.width = this.gif_width;

            //append img to Div
            div.appendChild(img)
            mainContainer.appendChild(div)

        }
        // show error message
    showErrorMessage(content) {
        let text = document.createElement("div");
        text.className = "card-footer bg-dark ";
        text.style.color = "red";
        text.textContent = content;
        document.querySelector("#lead").appendChild(text);
    }
}