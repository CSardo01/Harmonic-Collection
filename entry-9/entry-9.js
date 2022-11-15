let narrowClass = 'narrow'; // Variables again.
let navBar = document.querySelectorAll('.nav-bar');
navBar.forEach((block) => {
    let navObserver = new IntersectionObserver(entries => {
        let [entry] = entries;

        // This is a "ternary" operator——a condensed if/else.
        entry.isIntersecting ? block.classList.add("narrow") : block.classList.remove("narrow");
    }, {
        root: document, // This is only needed in the example iframe!
        rootMargin: '-10% 0% 0% 0%', // CSS-ish: top/right/bottom/left.
    });

    navObserver.observe(block); // Watch each one!
});

let before = 'before';
let section = document.querySelectorAll('section');
section.forEach((block) => {
    let sectionObserver = new IntersectionObserver(entries => {
        let [entry] = entries;

        entry.isIntersecting ? block.classList.remove("before") : block.classList.add("before");
    }, {
        root: document,
        rootMargin: '-20% 0% -20% 0%',
    });

    sectionObserver.observe(block);
});



let button1 = document.querySelector("#button1");
let img1 = document.querySelector(".img-1");

button1.onclick = () => {
    img1.classList.toggle("img-2")
};

let button2 = document.querySelector("#button2");
let img3 = document.querySelector(".img-3");

button2.onclick = () => {
    img3.classList.toggle("img-4")
};

