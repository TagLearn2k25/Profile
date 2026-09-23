/* =========================================================
   FUTURISTIC PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorRing =
    document.querySelector(".cursor-ring");

const cursorGlow =
    document.querySelector(".cursor-glow");

const navigation =
    document.getElementById("navigation");

const menuToggle =
    document.getElementById("menuToggle");

const themeToggle =
    document.getElementById("themeToggle");

const backToTop =
    document.getElementById("backToTop");

const typingText =
    document.getElementById("typingText");

const systemTime =
    document.getElementById("systemTime");

const contactForm =
    document.getElementById("contactForm");


/* =========================================================
   CUSTOM CURSOR
========================================================= */

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    cursorDot.style.left =
        `${mouseX}px`;

    cursorDot.style.top =
        `${mouseY}px`;

    cursorGlow.style.left =
        `${mouseX}px`;

    cursorGlow.style.top =
        `${mouseY}px`;

});


function animateCursor() {

    ringX +=
        (mouseX - ringX) * 0.15;

    ringY +=
        (mouseY - ringY) * 0.15;

    cursorRing.style.left =
        `${ringX}px`;

    cursorRing.style.top =
        `${ringY}px`;

    requestAnimationFrame(
        animateCursor
    );

}

animateCursor();


/* =========================================================
   CURSOR HOVER EFFECT
========================================================= */

const hoverElements =
    document.querySelectorAll(
        "a, button, input, textarea, .tech-card, .project-card"
    );


hoverElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursorRing.style.width = "50px";

        cursorRing.style.height = "50px";

        cursorRing.style.borderColor =
            "rgba(140,82,255,0.8)";

    });


    element.addEventListener("mouseleave", () => {

        cursorRing.style.width = "34px";

        cursorRing.style.height = "34px";

        cursorRing.style.borderColor =
            "rgba(0,246,255,0.55)";

    });

});


/* =========================================================
   MOBILE MENU
========================================================= */

menuToggle.addEventListener("click", () => {

    navigation.classList.toggle("open");

});


document.querySelectorAll(".nav-item")
    .forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

        });

    });


/* =========================================================
   THEME TOGGLE
========================================================= */

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon =
        themeToggle.querySelector("i");

    if (
        document.body.classList.contains(
            "light-mode"
        )
    ) {

        icon.classList.remove(
            "fa-moon"
        );

        icon.classList.add(
            "fa-sun"
        );

    } else {

        icon.classList.remove(
            "fa-sun"
        );

        icon.classList.add(
            "fa-moon"
        );

    }

});


/* =========================================================
   LIVE SYSTEM CLOCK
========================================================= */

function updateSystemTime() {

    const now = new Date();

    const hours =
        String(now.getHours())
            .padStart(2, "0");

    const minutes =
        String(now.getMinutes())
            .padStart(2, "0");

    const seconds =
        String(now.getSeconds())
            .padStart(2, "0");

    systemTime.textContent =
        `${hours}:${minutes}:${seconds}`;

}

updateSystemTime();

setInterval(
    updateSystemTime,
    1000
);


/* =========================================================
   TYPING EFFECT
========================================================= */

const roles = [

    "INFORMATION TECHNOLOGY STUDENT",
    "WEB DEVELOPER",
    "PROGRAMMER",
    "PROBLEM SOLVER",
    "TECH ENTHUSIAST"

];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function runTypingEffect() {

    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                runTypingEffect,
                1400
            );

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (
                roleIndex >=
                roles.length
            ) {

                roleIndex = 0;

            }

        }

    }


    const speed =
        deleting
            ? 45
            : 85;


    setTimeout(
        runTypingEffect,
        speed
    );

}

runTypingEffect();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "active"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   SKILL BAR OBSERVER
========================================================= */

const skillBars =
    document.querySelectorAll(
        ".skill-fill"
    );


const skillsSection =
    document.getElementById(
        "skills"
    );


const skillObserver =
    new IntersectionObserver(
        entries => {

            if (
                entries[0].isIntersecting
            ) {

                skillBars.forEach(bar => {

                    bar.style.width =
                        bar.dataset.width;

                });

                skillObserver.disconnect();

            }

        },
        {
            threshold: 0.25
        }
    );


skillObserver.observe(
    skillsSection
);


/* =========================================================
   COUNTER ANIMATION
========================================================= */

const counters =
    document.querySelectorAll(
        "[data-count]"
    );


let countersStarted = false;


const metricsSection =
    document.querySelector(
        ".about-metrics"
    );


const counterObserver =
    new IntersectionObserver(
        entries => {

            if (
                entries[0].isIntersecting &&
                !countersStarted
            ) {

                countersStarted = true;

                counters.forEach(counter => {

                    const target =
                        Number(
                            counter.dataset.count
                        );

                    let current = 0;

                    const duration =
                        target === 2028
                            ? 1300
                            : 900;

                    const step =
                        Math.max(
                            1,
                            Math.ceil(
                                target / 60
                            )
                        );


                    const interval =
                        setInterval(() => {

                            current += step;


                            if (
                                current >= target
                            ) {

                                current =
                                    target;

                                clearInterval(
                                    interval
                                );

                            }

                            counter.textContent =
                                current;

                        }, duration / 60);

                });

            }

        },
        {
            threshold: 0.5
        }
    );


counterObserver.observe(
    metricsSection
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const pageSections =
    document.querySelectorAll(
        "section[id]"
    );

const navigationItems =
    document.querySelectorAll(
        ".nav-item"
    );


function updateNavigation() {

    let current =
        "home";


    pageSections.forEach(section => {

        const top =
            section.offsetTop - 180;

        const bottom =
            top +
            section.offsetHeight;


        if (
            window.scrollY >= top &&
            window.scrollY < bottom
        ) {

            current =
                section.id;

        }

    });


    navigationItems.forEach(link => {

        link.classList.remove(
            "active"
        );


        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add(
                "active"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    updateNavigation
);


/* =========================================================
   BACK TO TOP
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 700
        ) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================================
   MAGNETIC BUTTONS
========================================================= */

const magneticButtons =
    document.querySelectorAll(
        ".magnetic"
    );


magneticButtons.forEach(button => {

    button.addEventListener(
        "mousemove",
        event => {

            const rect =
                button.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left -
                rect.width / 2;

            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            button.style.transform =
                `translate(${x * 0.12}px, ${y * 0.12}px)`;
        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "";

        }
    );

});


/* =========================================================
   3D PROJECT TILT
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                (
                    (y - centerY) /
                    centerY
                ) * -4;


            const rotateY =
                (
                    (x - centerX) /
                    centerX
                ) * 4;


            card.style.transform =
                `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
                `;
        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});


/* =========================================================
   CONTACT → GMAIL
========================================================= */

contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        /*
            CHANGE THIS EMAIL
            TO YOUR REAL GMAIL
        */

        const receiverEmail =
            "gnaneshwar.connect@gmail.com";


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const senderEmail =
            document
                .getElementById("email")
                .value
                .trim();


        const subject =
            document
                .getElementById("subject")
                .value
                .trim();


        const message =
            document
                .getElementById("message")
                .value
                .trim();


        const gmailSubject =
            encodeURIComponent(
                subject
            );


        const gmailBody =
            encodeURIComponent(

                `Hello,

You received a new message through your portfolio.

--------------------------------
NAME:
${name}

EMAIL:
${senderEmail}

MESSAGE:
${message}
--------------------------------

Sent from your futuristic portfolio website.`
            );


        const gmailURL =
            `https://mail.google.com/mail/?view=cm&fs=1&to=${receiverEmail}&su=${gmailSubject}&body=${gmailBody}`;


        window.open(
            gmailURL,
            "_blank"
        );


        /*
            RESET FORM
        */

        contactForm.reset();

    }
);


/* =========================================================
   PARALLAX HERO
========================================================= */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


document.addEventListener(
    "mousemove",
    event => {

        if (
            window.innerWidth < 850
        ) {
            return;
        }


        const x =
            (
                event.clientX /
                window.innerWidth -
                0.5
            ) * 2;


        const y =
            (
                event.clientY /
                window.innerHeight -
                0.5
            ) * 2;


        heroVisual.style.transform =
            `
            translate(
                ${x * 5}px,
                ${y * 5}px
            )
            `;

    }
);


/* =========================================================
   PREVENT BROKEN # LINKS
========================================================= */

document.querySelectorAll(
    'a[href="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        event => {

            event.preventDefault();

        }
    );

});