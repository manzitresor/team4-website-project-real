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
