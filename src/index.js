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
        let pages = ["About", "Services", "References", "Contact"];
        let listContainer = document.getElementById("myList");
        pages.forEach(page => {
                let listItem = document.createElement("li");
                let anchor = document.createElement('a')
                anchor.href = `/index.html#${page[0].toLowerCase()}${page.slice(1, page.length)}`
                anchor.textContent = page
                listItem.appendChild(anchor);
                listItem.style.zIndex = 999
                listItem.style.position = 'relative'
                listContainer.appendChild(listItem);
        });
        listContainer.lastElementChild.firstElementChild.href = `/contact.html`
        listContainer.innerHTML += `<svg style='margin-top:-50px; z-index:-400; width: 100%;' id='dropdownSvg' width="393" height="419" viewBox="0 0 393 419" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M253 36.889L294.515 9L313.674 10.4631L350.402 124.957L305.692 164.595L253 36.889Z" fill="#FF93C8"/>
<path d="M345.276 99L257.573 136.764L226 226.53L249.938 344.568L393.564 419.477V155.336L345.276 99Z" fill="#00672E"/>
<path d="M10.0633 233.845L120.153 8.50394L268.184 0L299.635 121.174L192.09 273.776L94.7609 360.505L0 360.385L0.0233488 286.398L10.0633 233.845Z" fill="#FFE800"/>
<path d="M113 223.194L226.944 322H310.18L380 185.398L354.844 72L256.983 74.8017L216.445 84.6022L113 223.194Z" fill="#0F2CCE"/>
<path d="M90.3857 226.101L81.9249 301.01L147.96 370.347L322.541 382.728L379.702 300.391L295.714 210.211L90.3857 226.101Z" fill="#E31C24"/>
<path d="M85.46 276.869L10 147.02L44.9661 54L143.443 78.8704L226.265 197.667L183.008 273.185L85.46 276.869Z" fill="#00672E"/>
</svg>
`
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

function referencesRendering(){
        let refs = document.querySelector('#reference');
        console.log(refs)
        const fragmentRef = new DocumentFragment();
         referencesData.forEach(text => {
              let liEl = document.createElement('li');
              let refLink = document.createElement('a');
              refLink.href = `#`;
        
              refLink.textContent = text;
              liEl.appendChild(refLink)
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

function footerRender() {
        const linksFooter = [
                {
                        type: "a",
                        content: "Impressum",
                        href: "../contact.html",
                },
                {
                        type: "a",
                        content: "Datenschutz",
                        href: "../privacy.html",
                },
                {
                        type: "a",
                        content: "LinkedIn",
                        href: "https://www.linkedin.com/feed/",
                },
                {
                        type: "a",
                        content: "Instagram",
                        href: "https://www.instagram.com/",
                },
        ]
        const links_list = document.querySelector('#footer nav ul');
        const br = document.createElement('br');
        const fragment = new DocumentFragment();
        linksFooter.forEach((link) => {
                const lnk = document.createElement('li');
                const a = document.createElement('a');
                a.innerText = link.content;
                a.href = link.href;
                lnk.append(a);
                lnk.className = "lg:w-[27%]";
                if (link.content === 'Datenschutz') {
                        lnk.className = "md:order-3 lg:w-[27%]";

                }
                if (link.content === 'Impressum') {
                        lnk.className = "md:order-2 lg:w-[27%]";
                }
                fragment.append(lnk);
        })
        links_list.append(fragment);
}