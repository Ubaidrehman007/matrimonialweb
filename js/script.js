const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');

        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }
    };

    updateCounter();

});

// ✅ search js start
/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){
        loader.style.display = "none";
    }

});


/* =========================
   FILTER BUTTON
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const filterBtn = document.getElementById("filterBtn");

    if(filterBtn){

        filterBtn.addEventListener("click", () => {

            alert("Filters Applied Successfully ✅");

        });

    }

});


/* =========================
   SHORTLIST BUTTON
========================= */

const shortlistBtns =
document.querySelectorAll(".shortlist-btn");

shortlistBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        if(btn.classList.contains("btn-outline-danger")){

            btn.classList.remove("btn-outline-danger");

            btn.classList.add("btn-danger");

            btn.innerHTML = "❤️ Shortlisted";

        }else{

            btn.classList.remove("btn-danger");

            btn.classList.add("btn-outline-danger");

            btn.innerHTML = "❤️ Shortlist";

        }

    });

});


/* =========================
   SCROLL TO TOP
========================= */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* =========================
   PROFILE CARD ANIMATION
========================= */

const cards =
document.querySelectorAll(".profile-card");

cards.forEach((card,index) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = ".5s";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    }, index * 150);

});


/* =========================
   RESULT COUNTER
========================= */

const resultCount =
document.getElementById("resultCount");

if(resultCount){

    const totalProfiles =
    document.querySelectorAll(".profile-card").length;

    resultCount.innerText =
    `${totalProfiles} Profiles Found`;

}
// ✅ search js end

// contact

document
.getElementById("contactForm")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
        "Thank you! Your message has been sent successfully."
    );

});
// contact