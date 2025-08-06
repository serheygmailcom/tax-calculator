const tabs = document.querySelectorAll("[data-tab-target]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    const currentActive = document.querySelector(".tab-pane.active");

    if (target && target !== currentActive) {
      // First, remove the classes from the old tab to fade it out.
      if (currentActive) {
        currentActive.classList.remove("active", "show");
      }

      // Next, make the new tab 'active' so it occupies space,
      // but don't add 'show' yet. It's still invisible due to the .fade styles.
      target.classList.add("active");

      // By using a tiny setTimeout, we push the next part of the code
      // to a new execution frame. This gives the browser time to apply
      // the initial state before we trigger the animation.
      setTimeout(() => {
        // Now, add the 'show' class to trigger the fade-in animation.
        target.classList.add("show");
      }, 10); // A tiny delay is all that's needed.
    }
  });
});
