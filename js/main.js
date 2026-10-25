document.addEventListener("DOMContentLoaded", () => {
  // Page Loader Hide
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 300);
  }

  // Animated Numbers Counter
  const counters = document.querySelectorAll(".counter");
  if (counters.length > 0) {
    const runCounters = () => {
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const speed = target / 60;

        const updateCounter = () => {
          count += speed;
          if (count < target) {
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target.toLocaleString();
          }
        };
        updateCounter();
      });
    };

    // Trigger on scroll or instantly if in view
    let counted = false;
    window.addEventListener("scroll", () => {
      const statsSection = document.querySelector(".stats-section");
      if (statsSection && !counted) {
        const sectionPos = statsSection.getBoundingClientRect().top;
        if (sectionPos < window.innerHeight - 80) {
          runCounters();
          counted = true;
        }
      }
    });
  }

  // Shortlist Toggle Handler
  document.addEventListener("click", (e) => {
    if (e.target.closest(".shortlist-btn")) {
      const btn = e.target.closest(".shortlist-btn");
      if (btn.classList.contains("btn-outline-danger")) {
        btn.classList.replace("btn-outline-danger", "btn-danger");
        btn.innerHTML = `<i class="fa-solid fa-heart me-1"></i> Shortlisted`;
      } else {
        btn.classList.replace("btn-danger", "btn-outline-danger");
        btn.innerHTML = `<i class="fa-regular fa-heart me-1"></i> Shortlist`;
      }
    }
  });

  // Back to Top Button
  const topBtn = document.getElementById("topBtn");
  if (topBtn) {
    window.addEventListener("scroll", () => {
      topBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    });

    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
