document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const sourceCards = document.querySelectorAll(".source-card");
  const keywordButtons = document.querySelectorAll(".keyword-cloud button");
  const topButton = document.querySelector(".top-button");

  function filterSources(filter) {
    sourceCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.type === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.filter;

      tabs.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-selected", "false");
      });

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      filterSources(filter);
    });
  });

  keywordButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
    });
  });

  if (topButton) {
    window.addEventListener("scroll", () => {
      topButton.classList.toggle("visible", window.scrollY > 500);
    });

    topButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  filterSources("primary");
});
