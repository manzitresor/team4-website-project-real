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
        let languages = ["About", "Services", "References", "Contacts"];
        let listElement = document.getElementById("myList");
        console.log(listElement);
        languages.forEach(function (language) {
        let listItem = document.createElement("li");
        listItem.textContent = language;
        listElement.appendChild(listItem);
        });
        const sidebar = document.getElementById('sidebar');

        document.querySelectorAll(".togglBtn").forEach(el =>{
                el.addEventListener('click',function() {
                let isHidden = sidebar.classList.contains('hidden');

                        if (isHidden) {
                            sidebar.classList.remove('hidden');
                        } else {

                            sidebar.classList.add('hidden');
                        }
                    } )
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