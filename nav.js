const primaryNav = document.querySelector(".navstylelink");
const navToggle = document.querySelector(".mobilenavtoggle");
const navstylelink = document.getElementById('navstylelink');
const navbarbutton = document.getElementById('navbarbutton');

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
       primaryNav.setAttribute('data-visible', true);
       navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

document.onclick = function(e){
    if(e.target.id !== 'navstylelink' && e.target.id !== 'navbarbutton' ) {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
}

