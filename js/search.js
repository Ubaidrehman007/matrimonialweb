const profilesData = [
  {
    id: 1,
    name: "Ayesha Khan",
    age: 26,
    gender: "Female",
    religion: "Muslim",
    city: "Mumbai",
    role: "Doctor",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    age: 29,
    gender: "Male",
    religion: "Hindu",
    city: "Pune",
    role: "Software Engineer",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Sana Ali",
    age: 24,
    gender: "Female",
    religion: "Muslim",
    city: "Delhi",
    role: "Educator",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Gurpreet Singh",
    age: 28,
    gender: "Male",
    religion: "Sikh",
    city: "Amritsar",
    role: "Entrepreneur",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Maria Fernandes",
    age: 25,
    gender: "Female",
    religion: "Christian",
    city: "Goa",
    role: "Graphic Designer",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Zaid Shaikh",
    age: 31,
    gender: "Male",
    religion: "Muslim",
    city: "Lucknow",
    role: "Civil Engineer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("profilesContainer");
  const resultCount = document.getElementById("resultCount");
  const filterBtn = document.getElementById("filterBtn");
  const resetBtn = document.getElementById("resetBtn");

  const renderProfiles = (list) => {
    container.innerHTML = "";
    resultCount.innerText = `${list.length} Profiles Found`;

    if (list.length === 0) {
      container.innerHTML = `<div class="col-12 text-center py-5"><h5 class="text-muted">No matches found matching your filters.</h5></div>`;
      return;
    }

    list.forEach((p) => {
      const card = document.createElement("div");
      card.className = "col-md-6 col-xl-4 animate__animated animate__fadeInUp";
      card.innerHTML = `
        <div class="profile-card h-100 shadow-sm">
          <div class="profile-img-wrap">
            <img src="${p.img}" alt="${p.name}">
          </div>
          <div class="p-3 text-center">
            <span class="badge bg-success mb-2">✔ Verified</span>
            <h5 class="fw-bold mb-1">${p.name}</h5>
            <p class="text-muted small mb-1">${p.age} Years • ${p.role}</p>
            <p class="text-muted small">${p.religion} • ${p.city}</p>
            <div class="d-grid gap-2">
              <a href="profile-details.html?id=${p.id}" class="btn btn-danger btn-sm">View Full Profile</a>
              <button class="btn btn-outline-danger btn-sm shortlist-btn"><i class="fa-regular fa-heart me-1"></i> Shortlist</button>
            </div>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  };

  const applyFilters = () => {
    const gender = document.getElementById("filterGender").value;
    const religion = document.getElementById("filterReligion").value;
    const city = document
      .getElementById("filterCity")
      .value.toLowerCase()
      .trim();
    const maxAge = parseInt(document.getElementById("filterMaxAge").value, 10);

    const filtered = profilesData.filter((item) => {
      const matchGender = gender ? item.gender === gender : true;
      const matchReligion = religion ? item.religion === religion : true;
      const matchCity = city ? item.city.toLowerCase().includes(city) : true;
      const matchAge = !isNaN(maxAge) ? item.age <= maxAge : true;
      return matchGender && matchReligion && matchCity && matchAge;
    });

    renderProfiles(filtered);
  };

  filterBtn.addEventListener("click", applyFilters);
  resetBtn.addEventListener("click", () => {
    document.getElementById("filterForm").reset();
    renderProfiles(profilesData);
  });

  // Initial load
  renderProfiles(profilesData);
});
