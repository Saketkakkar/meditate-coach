var navLinks = document.getElementsByClassName('nav-link')

// remove active class from every nav-link
var removeClass = function() {
    for(let j=0;j<navLinks.length; j++) {
        navLinks[j].classList.remove('active')
    }
}

// function that will add active class based on location hash
var addActiveClass = function() {
    console.log(window.location.hash)
    if(window.location.hash === undefined || window.location.hash ==='') {
        removeClass();
        navLinks[0].classList.add('active');
    } else {
        removeClass();
        for(let j=1;j<navLinks.length; j++) {
            if(navLinks[j].attributes.href.nodeValue === window.location.hash) navLinks[j].classList.add('active')
        }
    }
}

// init active class
addActiveClass()
// change active nav link based on hashchange
window.onhashchange = addActiveClass
