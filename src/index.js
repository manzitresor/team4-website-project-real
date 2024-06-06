const contactInfo = [
        {
                sectionTitle: "Agentur Baumeister",
                details: [
                        { type: "p", content: "Katrein Baumeister", class: "py-1" },
                        { type: "p", content: "Böckhstraße 13", class: "py-1" },
                        { type: "p", content: "10967 Berlin", class: "py-1" },
                ],
        },
        {
                sectionTitle: null,
                details: [
                        {
                                type: "a",
                                content: "+49 (0)30 - 490 827 87",
                                href: "tel:+493049082787",
                                class: " py-1",
                        },
                        {
                                type: "br",
                        },
                        {
                                type: "a",
                                content: `hallo@agentur-<br class="hidden md:block lg:hidden" />baumeister.com`,
                                href: "mailto:hallo@agentur-baumeister.com",
                                class: "text-wrap py-1",
                        },
                ],
        },
        {
                sectionTitle: "UST-IDNR.",
                details: [{ type: "p", content: "DE 274 486 923", class: "py-1" }],
        },
        {
                sectionTitle: "REGISTERED OFFICE",
                details: [{ type: "p", content: "Berlin, Germany", class: "py-1" }],
        },
];

function navBar() {
        let pages = ["About", "Services", "References", "Contacts"];
        let listContainer = document.getElementById("myList");
        pages.forEach(page => {
        let listItem = document.createElement("li");
        let anchor = document.createElement('a')
        anchor.href = `#${page[0].toLowerCase()}${page.slice(1,page.length)}`
        anchor.textContent = page
        listItem.appendChild(anchor);
        listContainer.appendChild(listItem);
        });
        const dropdownMenu = document.getElementById('sidebar');
        let togglBtn = document.querySelector(".togglBtn")
        togglBtn.addEventListener('click',(e) => {
                if(e.target.tagName == 'line' || e.target.tagName == 'path'  || e.target.tagName == 'svg'  ){
                        let isHidden = dropdownMenu.classList.contains('hidden');
                        if (isHidden) {
                            dropdownMenu.classList.remove('hidden');
                            togglBtn.firstElementChild.classList.remove('hidden')
                            togglBtn.lastElementChild.classList.add('hidden')
                        } else {
                        console.log('OKKKK')

                            dropdownMenu.classList.add('hidden');
                          togglBtn.firstElementChild.classList.add('hidden')
                          togglBtn.lastElementChild.classList.remove('hidden')
                        } 
                }
                    } )

}








function service() {
  const data = [
    "Brand strategy",
    "Corporate Identity & Website development",
    "SEO & copywriting",
    "Media Relations",
    "Digital marketing & content production",
    "Influencer relations",
  ];
  let service = document.querySelector("#service>ul");
  const fragment = new DocumentFragment();
  for (const x of data) {
    const li = document.createElement("li");
    li.classList.add("font-semibold");
    li.innerText = x;
    fragment.append(li);
  }
  service.append(fragment);
}


const referencesData = [
  " Ace Hotel",
  "ARMEDANGELS",
  "BERLIN DESIGN WEEK",
  "Berliner Berg",
  "BITE CLUB",
  "Budweiser Budvar",
  "ChungKing Noodles",
  "Designpreis Brandenburg",
  "Die Techniker",
  "European Street Food Awards",
  "Grundmann Dentistry",
  "HORNBACH Werkstück",
  "HORNBACH macht Schule",
  "iF Design",
  "Kopka",
  "KLH Maßschuhe",
  "Lode & Stijn",
  "Luya",
  "MEISSEN",
  "MEISSEN IKONEN",
  "Motel Beer & Coffee",
  "PAPER & TEA",
  "rocket & basil",
  "Seeberger Gruppe",
  "Shiori",
  "SPOC Magazin",
  "stocubo",
  "STUR",
  "World of Coffee",
  "yamo"
  ]
  
function referencesRendering(){
let refs = document.querySelector('#reference');
console.log(refs)
const fragmentRef = new DocumentFragment();
 referencesData.forEach(text => {
      let liEl = document.createElement('li');
      liEl.innerText = text;
      fragmentRef.appendChild(liEl);
    });
    refs.appendChild(fragmentRef);
}

function contactRender() {
        const container = document.querySelector(".contacts");

        if (!container) {
                console.error("Container element not found");
                return;
        }

        contactInfo.forEach((section) => {
                const sectionDiv = document.createElement("div");
                sectionDiv.className = "pb-8 lg:pb-8";

                if (section.sectionTitle) {
                        const sectionTitle = document.createElement("h2");
                        sectionTitle.className = "py-1 font-bold";
                        sectionTitle.textContent = section.sectionTitle;
                        sectionDiv.appendChild(sectionTitle);
                }

                section.details.forEach((detail) => {
                        const element = document.createElement(detail.type);
                        element.className = detail.class || "";

                        if (detail.type === "a") {
                                element.href = detail.href;
                                element.innerHTML = detail.content;
                        } else {
                                element.innerHTML = detail.content;
                        }

                        sectionDiv.appendChild(element);
                });

                container.append(sectionDiv);
        });
}

