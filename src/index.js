function checkme() {
        // let service =  document.querySelector("#service>ul");
        // console.log(service);   
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






