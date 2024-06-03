function service() {
        const data = ['Brand strategy','Corporate Identity & Website development','SEO & copywriting','Media Relations','Digital marketing & content production','Influencer relations'];
        let service =  document.querySelector("#service>ul");
        const fragment = new DocumentFragment();
        for( const x of data) {
                const li = document.createElement('li');
                li.innerText = x;
                fragment.append(li);
        }
        service.append(fragment);
}



