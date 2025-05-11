// Only the marketplace code is new below

// Modal and onboarding code...

// --- Marketplace (Find a Freelancer) ---

// Demo freelancer data
const freelancers = [
  {
    name: "Amit S.",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    title: "Full Stack Developer",
    rating: 4.9,
    skills: ["Web Development", "UI/UX"],
    rate: 1200,
    badge: "Top Rated"
  },
  {
    name: "Priya D.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    title: "Graphic & UI Designer",
    rating: 4.8,
    skills: ["Graphic Design", "UI/UX"],
    rate: 900,
    badge: "Verified"
  },
  {
    name: "Rahul K.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    title: "Content Writer",
    rating: 4.7,
    skills: ["Content Writing", "Marketing"],
    rate: 700,
    badge: "Rising Star"
  },
  {
    name: "Sneha P.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    title: "Web & App Developer",
    rating: 4.85,
    skills: ["Web Development"],
    rate: 1100,
    badge: "Top Rated"
  },
  {
    name: "Rohit B.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "Digital Marketer",
    rating: 4.6,
    skills: ["Marketing"],
    rate: 800,
    badge: "Rising Star"
  },
  {
    name: "Meera S.",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    title: "UI/UX Designer",
    rating: 4.92,
    skills: ["UI/UX", "Graphic Design"],
    rate: 1000,
    badge: "Verified"
  }
];

// Show Find a Freelancer section
function showFindFreelancer() {
  // Hide other sections, show marketplace
  document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
  document.querySelector('.usps').style.display = 'none';
  document.querySelector('.features-section').style.display = 'none';
  document.querySelector('.security-section').style.display = 'none';
  document.querySelector('.testimonials-section').style.display = 'none';
  document.querySelector('.subscription-section').style.display = 'none';
  document.querySelector('.marketplace-section').style.display = '';
  renderFreelancers(freelancers);
}

// Render freelancer cards
function renderFreelancers(list) {
  let grid = document.getElementById('marketplace-grid');
  grid.innerHTML = '';
  if (list.length === 0) {
    grid.innerHTML = "<div style='font-size:1.2rem;color:#999;text-align:center;width:100%;'>No freelancers found.</div>";
    return;
  }
  list.forEach(f => {
    grid.innerHTML += `
      <div class="freelancer-card">
        <img src="${f.avatar}" class="freelancer-avatar" alt="${f.name}" />
        <div class="freelancer-name">${f.name}</div>
        <div class="freelancer-title">${f.title}</div>
        <div class="freelancer-rating">⭐ ${f.rating}</div>
        <div class="freelancer-skills">${f.skills.join(", ")}</div>
        <div class="freelancer-rate">₹${f.rate}/hr</div>
        <div class="freelancer-badge">${f.badge}</div>
        <button class="freelancer-invite-btn" onclick="alert('Invite sent to ${f.name}!')">Invite</button>
      </div>
    `;
  });
}

// Filter freelancers (search & filters)
function filterFreelancers() {
  let search = document.getElementById('marketplace-search-bar').value.toLowerCase();
  let skill = document.getElementById('marketplace-skill-filter').value;
  let sort = document.getElementById('marketplace-sort').value;
  let list = freelancers.filter(f => {
    let matchSkill = !skill || f.skills.includes(skill);
    let matchSearch =
      f.name.toLowerCase().includes(search) ||
      f.title.toLowerCase().includes(search) ||
      f.skills.join(", ").toLowerCase().includes(search);
    return matchSkill && matchSearch;
  });
  // Sort
  if (sort === 'rate') list.sort((a, b) => a.rate - b.rate);
  else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
  else list.sort((a, b) => b.rating - a.rating); // Best match = top rating
  renderFreelancers(list);
}

// On load: keep intro sections visible
window.onload = function() {
  animateStat('stat-projects', 1852, '', 1600);
  animateStat('stat-freelancers', 1208, '', 1700);
  animateStat('stat-earnings', 9876500, '₹', 2000);
  // Show intro sections, hide marketplace
  document.querySelector('.marketplace-section').style.display = 'none';
  // ...If you want to auto-show marketplace, uncomment below:
  // showFindFreelancer();
}
