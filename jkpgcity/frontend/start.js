const listEl = document.getElementById("list");
const sortSelect = document.getElementById("sort"); // NEW: get the <select id="sort"> from HTML
let allVenues = []; // NEW: store venues here so we can re-sort without refetching

//this function receives one venue object from the API 
function createVenueCard(v) {
    const card = document.createElement("div"); //creates the card container
    card.classList.add("card"); //adds card as a class for css

    const title = document.createElement("h3"); //creates venue title
    //textContent sets the text inside the newly created element
    title.textContent = v.name; //makes so that the title is taken from the API

    const info = document.createElement("p");
    info.textContent = `${v.district ?? "Unknown district"} • ${v.address}`; //`${...}` = insert variable; ?? = nullish value if lefthand is null or undefined return righthand value

    const img = document.createElement("img");
    img.src = v.image_url ?? "img/bar-img.jpg";
    card.appendChild(img); //appendChild builds the card structure so that img goes first, then title, then info

    card.appendChild(title);
    card.appendChild(info);

    //this checks if the website has a website
    if (v.url) {
        const link = document.createElement("a");
        link.textContent= "Website";
        link.target = "_blank"; //this opens link in a new tab
        link.rel = "noreferrer"; //this prevents the new page from accessing your page; security practice

        //this is a ternary operator condition ? value_if_true : value_i_false
        link.href= v.url.startsWith("http")
        ? v.url
        : `https://${v.url.replace(/^\//, "")}`; //this whole thing means if the string starts with /,then remove it
        //^ this means AT THE START OF THE STRING ONLY

        card.appendChild(link);

    }

    return card; //this gives the completed HTML element to the client/caller
}

function renderVenues(venues) {
    listEl.textContent = ""; //removes any existing content before rendering new card
    venues.forEach((v) => {
        listEl.appendChild(createVenueCard(v)); //for each venue, create a card, then add it to the page one by one
    });        
}

// NEW: sort venues in JavaScript (Grade 4 sorting requirement)
// mode "name" = alphabetical; mode "district" = district, then name
function sortVenues(venues, mode) {
    const copy = [...venues]; //make a copy so we don't change the original array

    if (mode === "district") {
        copy.sort((a, b) => {
            const da = (a.district ?? "zzz").toLowerCase(); //null districts go last
            const db = (b.district ?? "zzz").toLowerCase();

            if (da !== db) return da.localeCompare(db); //sort by district first
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase()); //then by name
        });
        return copy;
    }

    //default: sort by name
    copy.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    return copy;
}

//fetch data from backend; this is also called a promise chain
fetch("/api/venues") //this sends a request to your express server
    .then((response) => response.json()) //convert response to json; aka converts API into a JavaScript object
    .then((venues) => {
        allVenues = venues; // NEW: store the venues so we can re-sort later
        renderVenues(sortVenues(allVenues, sortSelect.value)); // NEW: render sorted list
    })
    //this is just in case something goes wrong, the page shows a message
    .catch(() => {
        listEl.textContent = "Failed to load venues.";
    });

// NEW: when user changes the dropdown, re-sort and re-render (no new fetch needed)
sortSelect.addEventListener("change", () => {
    renderVenues(sortVenues(allVenues, sortSelect.value));
});