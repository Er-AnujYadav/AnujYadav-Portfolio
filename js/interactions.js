/* interactions.js — timeline, cursor, tilt, magnetic buttons */
/* timeline expand */
$$(".tl .it[tabindex]").forEach((i) => {
  const t = () => {
    const o = i.classList.toggle("open");
    i.setAttribute("aria-expanded", o);
  };
  i.onclick = t;
  i.onkeydown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      t();
    }
  };
});

/* desktop-only effects: cursor, tilt, magnetic buttons */
if (matchMedia("(hover:hover) and (pointer:fine)").matches && !rm) {
  const cu = $("#cur");
  addEventListener(
    "mousemove",
    (e) => {
      cu.style.left = e.clientX + "px";
      cu.style.top = e.clientY + "px";
    },
    { passive: true },
  );
  $$("a,button,.it,.chip").forEach((e) => {
    e.addEventListener("mouseenter", () => cu.classList.add("big"));
    e.addEventListener("mouseleave", () => cu.classList.remove("big"));
  });
  const p = $("#photo");
  p.parentElement.addEventListener("mousemove", (e) => {
    const r = p.getBoundingClientRect(),
      x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5;
    p.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg)`;
  });
  p.parentElement.addEventListener(
    "mouseleave",
    () => (p.style.transform = ""),
  );
  $$(".mag").forEach((b) => {
    b.addEventListener("mousemove", (e) => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    b.addEventListener("mouseleave", () => (b.style.transform = ""));
  });
  addEventListener(
    "mousemove",
    (e) => {
      const x = e.clientX / innerWidth - 0.5,
        y = e.clientY / innerHeight - 0.5;
      $(".b1").style.transform = `translate(${x * -40}px,${y * -40}px)`;
      $(".b2").style.transform = `translate(${x * 40}px,${y * 40}px)`;
    },
    { passive: true },
  );
}
