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
                            el.firstElementChild.style.display='block'
                            el.lastElementChild.style.display='none'
                        } else {
                          el.firstElementChild.style.display='none'
                          el.lastElementChild.style.display='block'
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