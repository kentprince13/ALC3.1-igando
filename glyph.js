//  query selectors
const button = document.querySelector("#butt")
let searchTerm = document.querySelector("#searchBox");
const containers = document.querySelector(".card-columns");
//const spinner = document.querySelector("#spinner");

// instantiating classes
const show = new UIDisplay;
const gif = new glyph;

// hiding spinner on document load
$("#spinner").hide();

// adding button event listener
button.addEventListener('click', e => {
    e.preventDefault;

    // show spinner when button is clicked
    $("#spinner").show();

    //getting input value
    const term = searchTerm.value

    // checking if searchTerm isn't null and to check if Gif is already populated
    if (term !== "" || containers.childElementCount > 1) {

        // if gif is present, clear the container
        containers.innerHTML = " ";

        // set spinner timeout
        setTimeout(() => {
            $("#spinner").hide();

            // get fetch api result
            gif.get(term).then(
                data => {
                    let rest = data.result.data;

                    // iterate the results
                    rest.forEach(element => {

                        //set gif alt and src
                        let gifURL = element.images.original.url
                        let gifAlt = element.source_tld

                        // display each gif to UI
                        show.gifElement(gifURL, gifAlt, containers)

                    });
                }
            )
        }, 2500);

        // clear input value
        searchTerm.value = "";
    }
    // if input is empty,
    // hide spinner, display error message and reload the page
    else {
        $("#spinner").hide();
        show.showErrorMessage("Enter Anything...")
        setTimeout(() => {
            $("#lead").hide()
            location.reload();
        }, 2000);
    }

})