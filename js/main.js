const CONFIG = {
  // email: "",
  github: "https://github.com/Er-AnujYadav",
  linkedin: "https://www.linkedin.com/in/er-anujyadav",
  photo: "assets/images/professional.jpg",
  // projects: {
  //   hr: { github: "", demo: "" },
  //   med: { github: "", demo: "" },
  //   prtf: { github: "", demo: "" },
  //   fk: { github: "", demo: "" },
  // },
};

const getIcon = (name) => {
  // if(name === "Email") return '<i class="fa-solid fa-envelope"></i>';
  if (name === "LinkedIn") return '<i class="fa-brands fa-linkedin"></i>';
  if (name === "GitHub") return '<i class="fa-brands fa-github"></i>';
  return "";
};

const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const rm = matchMedia("(prefers-reduced-motion:reduce)").matches;
const modal = $("#projectModal");
const modalTitle = $("#modalTitle");
const modalBody = $("#modalBody");
const modalEyebrow = $("#modalEyebrow");

/*-----------------theme----------------*/

const root = document.documentElement,
  tb = $("#theme");
function setTheme(t) {
  root.dataset.theme = t;
  tb.textContent = t === "dark" ? "☀️" : "🌙";
  try {
    localStorage.setItem("theme", t);
  } catch (e) {}
}
let saved = null;
try {
  saved = localStorage.getItem("theme");
} catch (e) {}
setTheme(
  saved ||
    (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light"),
);
tb.onclick = () => setTheme(root.dataset.theme === "dark" ? "light" : "dark");

/*------------------mobile menu------------*/

const nav = $("#nav"),
  mb = $("#menu");
function menu(o) {
  nav.classList.toggle("open", o);
  mb.setAttribute("aria-expanded", o);
  mb.textContent = o ? "✕" : "☰";
}
mb.onclick = () => menu(!nav.classList.contains("open"));
$$("nav a").forEach((a) => (a.onclick = () => menu(false)));
addEventListener("keydown", (e) => {
  if (e.key === "Escape") menu(false);
});

/* ------------------photo--------------- */

if (CONFIG.photo) {
  const i = new Image();
  i.src = CONFIG.photo;
  i.alt = "Anuj Yadav";
  i.loading = "eager";
  i.onload = () => {
    $("#ph").remove();
    $("#photo").appendChild(i);
  };
}

/* ------------------skills--------------- */

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  Programming: ["C", "Java"],
  Backend: ["Spring Boot"],
  Database: ["MySQL"],
  "Developer Tools": ["VS Code", "Git", "GitHub", "Eclipse"],
};
const ico = {
  Frontend: "🎨",
  Programming: "⌨️",
  Backend: "⚙️",
  Database: "🗄️",
  "Developer Tools": "🧰",
};
$("#skillgrid").innerHTML = Object.entries(skills)
  .map(
    ([k, v]) =>
      `<div class="col-md-4 rv"><div class="card"><h3><span aria-hidden="true">${ico[k]}</span>${k}</h3><div class="chips">${v.map((s) => `<span class="chip">${s}</span>`).join("")}</div></div></div>`,
  )
  .join("");

/* -----------------links (only when provided)------------- */

// function btns(id, o, ex) {
//   const t = $(id);
//   let h = "";
//   if (o.github)
//     h += `<a class="btn o" target="_blank" rel="noopener" href="${o.github}">GitHub</a>`;
//   if (o.demo)
//     h += `<a class="btn" target="_blank" rel="noopener" href="${o.demo}">Live demo</a>`;
//   t.innerHTML = h || `<span class="note">Links will be added soon.</span>`;
// }
// btns("#l-hr", CONFIG.projects.hr);
// btns("#l-med", CONFIG.projects.med);
// btns("#l-prtf", CONFIG.projects.prtf);
// btns("#l-fk", CONFIG.projects.fk);

/* ------------------contact---------------- */

const c = [
  // ["Email", CONFIG.email && "mailto:" + CONFIG.email],
  ["LinkedIn", CONFIG.linkedin],
  ["GitHub", CONFIG.github],
];
$("#clinks").innerHTML = c
  .map(([n, u]) =>
    u
      ? `<a class="btn mag" target="${n === "Email" ? "_self" : "_blank"}" rel="noopener" href="${u}">${getIcon(n)} ${n}</a>`
      : `<span class="btn off" aria-disabled="true" title="Link not added yet">${getIcon(n)} ${n} · soon</span>`,
  )
  .join("");
$("#yr").textContent = new Date().getFullYear();

const ftl = [
  // ["Email", CONFIG.email && "mailto:" + CONFIG.email],
  ["LinkedIn", CONFIG.linkedin],
  ["GitHub", CONFIG.github],
];
$("#ft-links").innerHTML = ftl
  .map(([n, u]) =>
    u
      ? `<li><a href="${u}"${n === "Email" ? "" : ' target="_blank" rel="noopener"'}>${getIcon(n)} ${n}</a></li>`
      : `<li><span class="soon">${getIcon(n)} ${n} · soon</span></li>`,
  )
  .join("");

/* ------------------imageResponsive auto aspectratio----------------- */

window.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".mock img img.target-image");
  const container = document.querySelector("mock img");

  if (img && container) {
    img.onload = function () {
      const naturalWidth = img.naturalWidth;
      const naturalHeight = img.naturalHeight;

      container.style.aspectRatio = `${naturalWidth} / ${naturalHeight}`;
    };
    if (img.complete) {
      container.style.aspectRatio = `${naturalWidth} / ${naturalHeight}`;
    }
  }
});

/*----------------------project details-------------------*/

const projectDetails = {
  hr: {
    eyebrow: "PROJECT 01 / INTERNSHIP CASE STUDY",
    title: "HR Synergy",
    body: `<p>HR Synergy is a web-based Human Resource Management System project developed during a 45-day Java with Spring Boot internship at Softpro India Computer Technologies Pvt. Ltd.</p><h3>Project focus</h3><p>Bring important HR activities into a more organized digital workflow and present the system through a clear frontend, backend and database structure.</p><h3>Documented functional areas</h3><ul><li>Login and registration flow</li><li>Job applications and HR review</li><li>Employee information</li><li>Complaint and enquiry workflows</li><li>Event management</li><li>Leave and salary records</li></ul><h3>Technology stack</h3><p>Java · Spring Boot · MySQL · HTML · CSS · JavaScript</p><h3>Learning outcome</h3><p>Practised backend application development, relational data concepts, connecting application layers, debugging and project documentation. Project performance was graded A++.</p><p><em>Feature descriptions are based on the supplied project presentation. No live demo or repository link has been added because none was supplied.</em></p>`,
  },
  medicare: {
    eyebrow: "PROJECT 02 / FRONTEND DEVELOPMENT",
    title: "Medicare",
    body: `<p>A medical-services website frontend built with HTML, CSS and JavaScript, with an emphasis on clear information and a user-friendly layout.</p><h3>What I worked on</h3><ul><li>Service and information page presentation</li><li>Contact information layout</li><li>JavaScript-based form validation</li><li>Page structure and visual consistency</li></ul><h3>Technology stack</h3><p>HTML · CSS · JavaScript</p><h3>Learning outcome</h3><p>Practised semantic page structure, CSS layout, responsive styling and client-side form validation.</p><p><em>No live demo or repository link has been added because none was supplied.</em></p>`,
  },

  portfolio: {
    eyebrow: "PROJECT 03 / PERSONAL PORTFOLIO",
    title: "Personal Portfolio",
    body: `<p>A creative personal portfolio website designed and developed to showcase my technical skills, professional journey, internship experience and development work. Built with HTML, CSS and JavaScript, featuring a unique visual identity, interactive elements and responsive layouts.</p><h3>What I worked on</h3><ul><li>Custom portfolio layout and creative visual design</li><li>Interactive navigation and JavaScript-powered UI elements</li><li>Animated technical skills orbit with custom CSS animations</li><li>Project showcase and professional experience sections</li><li>Smooth transitions, hover effects and interactive elements</li><li>Responsive design for desktop, tablet and mobile devices</li></ul><h3>Technology stack</h3><p>HTML5 · CSS3 · JavaScript (ES6+)</p><h3>Learning outcome</h3><p>Strengthened frontend development skills through practical implementation of JavaScript DOM manipulation, responsive layouts, CSS animations, interactive components and modern UI design. Gained experience in combining creative design with functional web development.</p> <p><em>Design approach: Creative UI · Interactive Experience · Responsive Design · Motion & Animation.</em></p>`,
  },

  flipkart: {
    eyebrow: "PROJECT 04 / STATIC FRONTEND PRACTICE",
    title: "Flipkart Clone",
    body: `<p>A static frontend recreation of the Flipkart homepage, created to practise e-commerce layout patterns using HTML and CSS.</p><h3>What I worked on</h3><ul><li>Homepage structure and navigation layout</li><li>Category and product-card presentation</li><li>Spacing, alignment and visual hierarchy</li></ul><h3>Technology stack</h3><p>HTML · CSS</p><h3>Learning outcome</h3><p>Practised page composition, reusable styling patterns and recreating a familiar interface without claiming real shopping, login or checkout functionality.</p><p><em>No live demo or repository link has been added because none was supplied.</em></p>`,
  },
};

$$("[data-project]").forEach((button) =>
  button.addEventListener("click", () => {
    const data = projectDetails[button.dataset.project];
    if (!data) return;
    modalEyebrow.textContent = data.eyebrow;
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.body;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".modal-close").focus();
  }),
);
function closeModal() {
  if (!modal.classList.contains("open")) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
$$("[data-close-modal]").forEach((el) =>
  el.addEventListener("click", closeModal),
);

/*---------------slider---------------------*/

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  let autoPlayTimer;

  function showSlide(index) {
    // Boundary conditions check
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }

    // Remove active class from all slides and dots
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    // Add active class to current slide and dot
    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  // Next button click
  nextBtn.addEventListener("click", () => {
    showSlide(currentIndex + 1);
    resetAutoPlay();
  });

  // Previous button click
  prevBtn.addEventListener("click", () => {
    showSlide(currentIndex - 1);
    resetAutoPlay();
  });

  // Dot click functionality
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      showSlide(idx);
      resetAutoPlay();
    });
  });

  // Auto Play function (har 4 seconds me slide change hogi)
  function startAutoPlay() {
    autoPlayTimer = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 4000);
  }

  function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    startAutoPlay();
  }

  // Start auto play on page load
  startAutoPlay();
});
