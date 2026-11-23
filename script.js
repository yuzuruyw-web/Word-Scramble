
const loadingScreen = document.getElementById("loadingScreen");
const homeScreen = document.getElementById("homeScreen");
const progressFill = document.getElementById("progressFill");

let progress = 0;

// =========================
// LOADING SCREEN
// =========================

window.addEventListener("load", function () {

    const loadingTimer = setInterval(function () {

        progress += 1;

        progressFill.style.width = progress + "%";

        if (progress >= 100) {

            clearInterval(loadingTimer);

            setTimeout(function () {

                // Hilangkan loading screen
                loadingScreen.classList.add("hidden");

                // Tampilkan home screen
                homeScreen.classList.remove("hidden");

            }, 300);

        }

    }, 25);

});

// =========================
// TOMBOL MULAI
// =========================

document.getElementById("startButton")
    .addEventListener("click", function () {

        // Tombol MULAI belum menuju gameplay
        console.log("Tombol MULAI ditekan");

    });
