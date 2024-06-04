function checkme() {
        let service = document.querySelector("#service>ul");
        console.log(service);



}

function contactRender() {
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
                                        content: "hallo@agentur-baumeister.com",
                                        href: "mailto:hallo@agentur-baumeister.com",
                                        class: "text-wrap  py-1",
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

        // document.addEventListener("DOMContentLoaded", () => { });
        const container = document.querySelector(".contacts");

        console.log(container.firstElementChild.previousSibling);

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
                                element.innerHTML = detail.content.includes("@")
                                        ? detail.content
                                                .split("@")
                                                .join('<br class="hidden md:block lg:hidden" />@')
                                        : detail.content;
                        } else {
                                element.innerHTML = detail.content;
                        }

                        sectionDiv.appendChild(element);
                });

                container.append(sectionDiv);
        });


}


