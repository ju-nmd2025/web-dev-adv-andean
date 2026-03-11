const listEl = document.getElementById("list");
const sortSelect = document.getElementById("sort");
const sortToggle = document.getElementById("sort-toggle");
const sortBox = document.getElementById("sort-box");
const addBtn = document.getElementById("add-btn");
let allVenues = [];

// Toggle sort box visibility
sortToggle.addEventListener("click", () => {
  const isHidden = sortBox.style.display === "none";
  sortBox.style.display = isHidden ? "block" : "none";
  sortToggle.textContent = isHidden ? "Sort ▲" : "Sort ▼";
});

function createVenueCard(v) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = v.name;

    const info = document.createElement("p");
    info.textContent = `${v.district ?? "Unknown district"} • ${v.address}`;

    const img = document.createElement("img");
    img.src = v.image_url ?? "img/bar-img.jpg";
    card.appendChild(img);

    card.appendChild(title);
    card.appendChild(info);

   const bottomRow = document.createElement("div");
    bottomRow.classList.add("card-bottom");

    if (v.url) {
        const link = document.createElement("a");
        link.textContent = "Website";
        link.target = "_blank";
        link.rel = "noreferrer";
        link.href = v.url.startsWith("http")
        ? v.url
        : `https://${v.url.replace(/^\//, "")}`;
        bottomRow.appendChild(link);
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteVenue(v.id);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => fillFormForEdit(v);

    const btnWrapper = document.createElement("div");
    btnWrapper.classList.add("card-buttons");
    btnWrapper.appendChild(deleteBtn);
    btnWrapper.appendChild(editBtn);

    bottomRow.appendChild(btnWrapper);
    card.appendChild(bottomRow);

    return card;
}

function renderVenues(venues) {
    listEl.textContent = "";
    venues.forEach((v) => {
        listEl.appendChild(createVenueCard(v));
    });        
}

function sortVenues(venues, mode) {
    const copy = [...venues];

    if (mode === "district") {
        copy.sort((a, b) => {
            const da = (a.district ?? "zzz").toLowerCase();
            const db = (b.district ?? "zzz").toLowerCase();

            if (da !== db) return da.localeCompare(db);
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        });
        return copy;
    }

    copy.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    return copy;
}

// sends new venue to the backend
function addVenue () {
    const name = document.getElementById("input-name").value.trim();
    const category = document.getElementById("input-category").value.trim();
    const address = document.getElementById("input-address").value.trim();
    const district = document.getElementById("input-district").value.trim();
    const url = document.getElementById("input-url").value.trim();
    const image_url = document.getElementById("input-image").value.trim();

    if (!name || !category || !address) return alert("Name, category and address are required");

    fetch("/api/venues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, category, address, district, url, image_url })
    })
        .then(res => res.json())
        .then(newVenue => {
            allVenues.push(newVenue);
            renderVenues(sortVenues(allVenues, sortSelect.value));
            document.getElementById("input-name").value = "";
            document.getElementById("input-category").value = "";
            document.getElementById("input-address").value = "";
            document.getElementById("input-district").value = "";
            document.getElementById("input-url").value = "";
            document.getElementById("input-image").value = "";
        });
}
addBtn.onclick = addVenue;

fetch("/api/venues")
    .then((response) => response.json())
    .then((venues) => {
        allVenues = venues;
        renderVenues(sortVenues(allVenues, sortSelect.value));
    })
    .catch(() => {
        listEl.textContent = "Failed to load venues.";
    });

sortSelect.addEventListener("change", () => {
    renderVenues(sortVenues(allVenues, sortSelect.value));
});

function deleteVenue(id) {
    if (!confirm("Are you sure you want to delete this venue?")) return;

    fetch(`/api/venues/${id}`, { method: "DELETE" })
    .then(() => {
        allVenues = allVenues.filter(v => v.id !== id);
        renderVenues(sortVenues(allVenues, sortSelect.value));
    });
}

function fillFormForEdit(v) {
    document.getElementById("input-name").value = v.name;
    document.getElementById("input-category").value = v.category;
    document.getElementById("input-address").value = v.address;
    document.getElementById("input-district").value = v.district ?? "";
    document.getElementById("input-url").value = v.url ?? "";
    document.getElementById("input-image").value = v.image_url ?? "";
    document.getElementById("add-form").scrollIntoView({ behavior: "smooth" });

    addBtn.textContent = "Save Changes";
    addBtn.onclick = () => saveEdit(v.id);
}

function saveEdit(id) {
    const name = document.getElementById("input-name").value.trim();
    const category = document.getElementById("input-category").value.trim();
    const address = document.getElementById("input-address").value.trim();
    const district = document.getElementById("input-district").value.trim();
    const url = document.getElementById("input-url").value.trim();
    const image_url = document.getElementById("input-image").value.trim();

    fetch(`/api/venues/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, category, address, district, url, image_url })
    })
        .then(res => res.json())
        .then(updated => {
            allVenues = allVenues.map(v => v.id === id ? updated : v);
            renderVenues(sortVenues(allVenues, sortSelect.value));
            addBtn.textContent = "Add Venue";
            addBtn.onclick = addVenue;
        });
}