function init() {
  import("./global.nav-dropdown.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll(".panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    // 1. Remove active class from all tabs and panels
    tabs.forEach((t) => t.classList.remove("active"));
    tabContents.forEach((p) => p.classList.remove("active"));

    // 2. Add active class to the clicked tab and its target panel
    tab.classList.add("active");
    target.classList.add("active");
  });
});
