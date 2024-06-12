export const handleAnchorClicks = (isMobile: boolean | undefined) => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e: Event) => {
      e.preventDefault();
      const href = (anchor as HTMLAnchorElement).getAttribute("href")!;
      const target = document.querySelector(href);
      const offset = 75 + (isMobile ? 70 : 0);

      window.scrollTo({
        top: target
          ? target.getBoundingClientRect().top + window.scrollY - offset
          : 0,
        behavior: "smooth",
      });
      history.pushState(null, "", href);
    });
  });
};

export const handleScrollToHash = (isMobile: boolean | undefined) => {
  if (document) {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      const offset = 75 + (isMobile ? 70 : 0);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - offset,
          behavior: "smooth",
        });
      }
    }
  }
};
