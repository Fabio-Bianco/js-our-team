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
const nameElement = document.getElementById('name');
const roleElement = document.getElementById('role');
const emailElement = document.getElementById('email');
const imageElement = document.getElementById('image');
const parentElement = document.querySelector(".team-container");

console.log(teamMembers)


memberFormElement.addEventListener('submit', addNewMember )
// funzione per renderizzare HTML


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

// funzione per aggiungere membri (aggiungere oggetti all'array di partenza)

function addNewMember(event){
  event.preventDefault(); 

  const name = nameElement.value;
  const role = roleElement.value;
  const email = emailElement.value;
  const image = imageElement.value;

  console.log(name);
  console.log(role);
  console.log(image);

  const newMember = {
    name,
    role,
    email,
    image,
  }

  teamMembers.push(newMember)
  console.log(teamMembers)

  renderHTML(parentElement, teamMembers);
}


