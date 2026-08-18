/* =========================================
   BIRTHDAY WEBSITE ANIMATIONS
========================================= */


/* =========================================
   MUSIC
========================================= */

function startMusic() {

    const music =
        document.getElementById("birthdayMusic");

    if (!music) return;

    music.volume = 0.5;

    music.play().catch(() => {
        console.log("Music requires user interaction.");
    });

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );

    if (!container) return;

    const confetti =
        document.createElement("div");

    confetti.classList.add("confetti");

    const shapes = [
        "rectangle",
        "circle"
    ];

    const shape =
        shapes[
            Math.floor(
                Math.random() *
                shapes.length
            )
        ];

    if (shape === "circle") {

        confetti.style.borderRadius =
            "50%";

    }

    confetti.style.left =
        Math.random() * 100 + "vw";

    confetti.style.width =
        Math.random() * 8 + 5 + "px";

    confetti.style.height =
        Math.random() * 15 + 7 + "px";

    confetti.style.animationDuration =
        Math.random() * 3 + 3 + "s";

    confetti.style.animationDelay =
        Math.random() * 2 + "s";

    container.appendChild(confetti);

    setTimeout(() => {

        confetti.remove();

    }, 7000);

}


setInterval(
    createConfetti,
    100
);


/* =========================================
   BALLOONS
========================================= */

function createBalloon() {

    const container =
        document.getElementById(
            "balloon-container"
        );

    if (!container) return;

    const balloon =
        document.createElement("div");

    balloon.classList.add("balloon");

    const colors = [

        "#ff3b9d",
        "#7c3aed",
        "#00d9ff",
        "#ffb000",
        "#ff5757",
        "#34d399",
        "#ff7ac8"

    ];

    balloon.style.background =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];

    balloon.style.left =
        Math.random() * 95 + "vw";

    balloon.style.width =
        Math.random() * 25 + 45 + "px";

    balloon.style.height =
        Math.random() * 30 + 60 + "px";

    balloon.style.animationDuration =
        Math.random() * 7 + 8 + "s";

    container.appendChild(balloon);

    setTimeout(() => {

        balloon.remove();

    }, 16000);

}


setInterval(
    createBalloon,
    1500
);


/* =========================================
   FIREWORKS / CRACKERS
========================================= */

const canvas =
    document.getElementById("fireworks");

if (canvas) {

    const ctx =
        canvas.getContext("2d");

    let particles = [];

    function resizeCanvas() {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }

    resizeCanvas();

    window.addEventListener(
        "resize",
        resizeCanvas
    );


    function createFirework(
        x,
        y
    ) {

        const count = 70;

        for (
            let i = 0;
            i < count;
            i++
        ) {

            const angle =
                Math.random() *
                Math.PI *
                2;

            const speed =
                Math.random() * 7 + 2;

            particles.push({

                x: x,

                y: y,

                vx:
                    Math.cos(angle) *
                    speed,

                vy:
                    Math.sin(angle) *
                    speed,

                life: 100,

                size:
                    Math.random() *
                    3 + 1

            });

        }

    }


    function animateFireworks() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles =
            particles.filter(
                particle =>
                    particle.life > 0
            );


        particles.forEach(
            particle => {

                particle.x +=
                    particle.vx;

                particle.y +=
                    particle.vy;

                particle.vy +=
                    0.04;

                particle.life -= 1;


                ctx.beginPath();

                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle =
                    `hsla(
                        ${Math.random() * 360},
                        100%,
                        70%,
                        ${particle.life / 100}
                    )`;

                ctx.fill();

            }
        );


        requestAnimationFrame(
            animateFireworks
        );

    }


    animateFireworks();


    function randomFirework() {

        createFirework(

            Math.random() *
            canvas.width,

            Math.random() *
            canvas.height *
            .65

        );

    }


    setInterval(
        randomFirework,
        1800
    );

}


/* =========================================
   CAKE WISH
========================================= */

function makeWish() {

    const message =
        document.getElementById(
            "wishMessage"
        );

    if (message) {

        message.classList.add("show");

    }


    createBigCelebration();

}


/* =========================================
   FINAL CELEBRATION
========================================= */

function celebrate() {

    createBigCelebration();

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        setTimeout(
            createConfetti,
            i * 25
        );

    }

}


function createBigCelebration() {

    if (!canvas) return;

    for (
        let i = 0;
        i < 10;
        i++
    ) {

        setTimeout(() => {

            createFirework(

                Math.random() *
                canvas.width,

                Math.random() *
                canvas.height *
                .7

            );

        }, i * 200);

    }

}


/* =========================================
   CLICK FIREWORK
========================================= */

document.addEventListener(
    "click",
    function(event) {

        if (!canvas) return;

        createFirework(
            event.clientX,
            event.clientY
        );

    }
);


/* =========================================
   PAGE LOAD CELEBRATION
========================================= */

window.addEventListener(
    "load",
    () => {

        for (
            let i = 0;
            i < 15;
            i++
        ) {

            setTimeout(
                createConfetti,
                i * 100
            );

        }

    }
);
