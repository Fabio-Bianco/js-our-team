const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// sezione per aggiungere nuovo membro
const memberFormElement = document.getElementById('member-form')

memberFormElement.addEventListener('submit', function(event){
  event.preventDefault();
  console.log('verifica aggiunta membro:ok')
})
// funzione per renderizzare HTML
const parentElement = document.querySelector(".team-container");

renderHTML(parentElement, teamMembers);

function renderHTML(parent, elements) {
  let items = "";
  for (let i = 0; i < elements.length; i++) { // Correzione "length"
    const currentElement = elements[i];
    items += createHTMLElement(currentElement);
  }
  parent.innerHTML = items;
}

// Funzione per creare l'HTML dinamicamente
function createHTMLElement(obj) {
  return `<div class="team-member">
        <img src="${obj.img}" alt="${obj.name}" />
        <div>
          <span>${obj.name}</span>
          ${obj.role}
          <a href="mailto:${obj.email}">${obj.email}</a>
        </div>
      </div>`;
}

// sezione per aggiungere membri (aggiungere oggetti all'array di partenza)


