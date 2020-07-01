// Button to delete the repository
const btnDelQuery = "div.Box--danger > ul > li + li+ li + li > details > summary";

// Input to insert the "confirm text"
const txtInputDelQuery = "div.Box--danger > ul > li + li+ li + li > details > details-dialog > div + div + div > p + p + form > input + input + p > input";

// Button to confirm the deleting
const confimBtnDelQuery = "div.Box--danger > ul > li + li+ li + li > details > details-dialog > div + div + div > p + p + form > input + input + p + button";


// Get the "<userName>/<Repository>" string
const urlPath = window.location.pathname;
const deleteText = urlPath.match("^/(.+/.+)/settings$")[1];

document.querySelector(btnDelQuery).addEventListener("click", () => {
    setInterval(() => {
        document.querySelector(txtInputDelQuery).value = deleteText;
        document.querySelector(confimBtnDelQuery).disabled = false;
    }, 500);
});