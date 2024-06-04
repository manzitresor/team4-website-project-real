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
