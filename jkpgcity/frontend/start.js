const listEl = document.getElementById("list");

function createVenueCard(v) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = v.name;

  const info = document.createElement("p");
  info.textContent = `${v.district ?? "Unknown district"} • ${v.address}`;

  card.appendChild(title);
  card.appendChild(info);

  if (v.url) {
    const link = document.createElement("a");
    link.textContent = "Website";
    link.target = "_blank";
    link.rel = "noreferrer";

    link.href = v.url.startsWith("http")
      ? v.url
      : `https://${v.url.replace(/^\//, "")}`;

    card.appendChild(link);
  }

  return card;
}

function renderVenues(venues) {
  listEl.textContent = "";
  venues.forEach((v) => {
    listEl.appendChild(createVenueCard(v));
  });
}

fetch("http://localhost:3000/api/venues")
  .then((response) => response.json())
  .then((venues) => renderVenues(venues))
  .catch(() => {
    listEl.textContent = "Failed to load venues.";
  });