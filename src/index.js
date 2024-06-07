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
                anchor.href = `/src/index.html#${page[0].toLowerCase()}${page.slice(1, page.length)}`
                anchor.textContent = page
                listItem.appendChild(anchor);
                listContainer.style.zIndex = 9
                listContainer.appendChild(listItem);
        });
        listContainer.lastElementChild.firstElementChild.href= `/src/contact.html`
        listContainer.innerHTML += `<svg
        width="1512"
        height="1028"
        viewBox="0 0 1512 1028"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full"
        style="margin-top:-250px; z-index:-40"
      >
        <path
          d="M599 91.5737L699.588 24L746.011 27.5449L835 304.957L726.67 401L599 91.5737Z"
          fill="#FF93C8"
        />
        <g class="sticky top-0">
          <path
            d="M1396 251.5L1183.5 343L1107 560.5L1165 846.5L1513 1028V388L1396 251.5Z"
            fill="#00672E"
          />
        </g>
        <path
          d="M23.3829 567.262L290.124 21.2721L648.796 0.66748L725 294.267L464.425 664.013L228.601 874.154L-1 873.862L-0.943427 694.595L23.3829 567.262Z"
          fill="#FFE800"
        />
        <path
          d="M218 548.5L197.5 730L357.5 898L780.5 928L919 728.5L715.5 510L218 548.5Z"
          fill="#E31C24"
        />
        <g >
          <path 
            d="M493.836 688L311 373.382L395.721 148L634.325 208.26L835 496.098L730.189 679.074L493.836 688Z"
            fill="#00672E"
          />
        </g>
        <path
          d="M621 468.548L921.437 729H1140.9L1325 368.918L1258.67 70L1000.64 77.3853L893.754 103.219L621 468.548Z"
          fill="#0F2CCE"
        />
        </svg>`
        const dropdownMenu = document.getElementById('sidebar');
        const linksDropdown = document.querySelectorAll('#myList>li')
        let togglBtn = document.querySelector(".togglBtn")
        togglBtn.addEventListener('click', (e) => {
                if (e.target.tagName == 'line' || e.target.tagName == 'path' || e.target.tagName == 'svg') {
                        let isHidden = dropdownMenu.classList.contains('hidden');
                        if (isHidden) {
                                dropdownMenu.classList.remove('hidden');
                                togglBtn.firstElementChild.classList.remove('hidden')
                                togglBtn.lastElementChild.classList.add('hidden')
                        } else {
                                dropdownMenu.classList.add('hidden');
                                togglBtn.firstElementChild.classList.add('hidden')
                                togglBtn.lastElementChild.classList.remove('hidden')
                        }
                }
        })
        linksDropdown.forEach(el => {
                el.addEventListener('click', (e) => {
                        dropdownMenu.classList.add('hidden')
                        togglBtn.lastElementChild.classList.remove('hidden')
                        togglBtn.firstElementChild.classList.add('hidden')

                })
        })
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

function referencesRendering() {
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
        let hamburger = document.querySelectorAll(".togglBtn>svg>path")
        hamburger.forEach(el =>{
                el.getAttribute('fill') == 'black' ? el.setAttribute('fill','green') : el
        }
        )

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

function footerRender() {
        const links = ['Impressum', 'Datenschutz', 'LinkedIn', 'Instagram'];
        const links_list = document.querySelector('#footer nav ul');
        const br = document.createElement('br');
        const fragment = new DocumentFragment();
        links.forEach((link) => {
                const lnk = document.createElement('li');
                const a = document.createElement('a');
                a.innerText = link;
                lnk.append(a);
                lnk.className = "lg:w-[27%]";
                if (link === 'Datenschutz') {
                        lnk.className = "md:order-3 lg:w-[27%]";

                }
                if (link === 'Impressum') {
                        lnk.className = "md:order-2 lg:w-[27%]";
                }
                fragment.append(lnk);
        })
        links_list.append(fragment);
}