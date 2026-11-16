/*---------animations.js — typed role, scroll reveal, progress, back-to-top------*/

/*---------typed role-----------*/
const roles = [
  "Aspiring Software Engineer",
  "Web Developer",
  "Java & Spring Boot Learner",
  "Computer Science Student",
];
let ri = 0,
  ci = 0,
  del = false;
(function type() {
  const el = $("#role"),
    w = roles[ri];
  if (rm) {
    el.textContent = roles[0];
    return;
  }
  el.textContent = w.slice(0, ci);
  ci += del ? -1 : 1;
  if (!del && ci > w.length + 8) del = true;
  if (del && ci < 0) {
    del = false;
    ci = 0;
    ri = (ri + 1) % roles.length;
  }
  setTimeout(type, del ? 35 : 80);
})();

/*----------reveal----------*/

const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
$$(".rv").forEach((e) => io.observe(e));

/*---------active link, progress, back to top-------*/

const secs = $$("main section"),
  links = $$("nav a.l");
function onScroll() {
  const y = scrollY,
    h = document.documentElement.scrollHeight - innerHeight;
  $("#prog").style.width = (y / h) * 100 + "%";
  $("#top").classList.toggle("show", y > 500);
  let cur = "home";
  secs.forEach((s) => {
    if (y + 120 >= s.offsetTop) cur = s.id;
  });
  links.forEach((a) =>
    a.classList.toggle("on", a.getAttribute("href") === "#" + cur),
  );
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();
$("#top").onclick = () =>
  scrollTo({ top: 0, behavior: rm ? "auto" : "smooth" });
