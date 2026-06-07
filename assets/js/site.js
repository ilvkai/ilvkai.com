const yearNodes = document.querySelectorAll("[data-current-year]");
const currentYear = new Date().getFullYear();

yearNodes.forEach((node) => {
  node.textContent = String(currentYear);
});

const filterButtons = document.querySelectorAll("[data-filter]");
const publicationCards = document.querySelectorAll("[data-topic]");
const resultCount = document.querySelector("[data-result-count]");

function updatePublicationCount(filter) {
  if (!resultCount || publicationCards.length === 0) {
    return;
  }

  const visibleCount = Array.from(publicationCards).filter((card) => {
    return filter === "all" || card.dataset.topic === filter;
  }).length;
  resultCount.textContent = `当前显示 ${visibleCount} 篇代表性论文`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    publicationCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.topic === filter;
      card.hidden = !shouldShow;
    });

    updatePublicationCount(filter);
  });
});

updatePublicationCount("all");
