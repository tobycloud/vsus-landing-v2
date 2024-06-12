export const handleAnchorClicks = (isMobile: boolean | undefined) => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e: Event) => {
      e.preventDefault();
      const target = document.querySelector(
        (anchor as HTMLAnchorElement).getAttribute("href")!
      );
      const offset = 75 + (isMobile ? 70 : 0);
      window.scrollTo({
        top: target
          ? target.getBoundingClientRect().top + window.scrollY - offset
          : 0,
        behavior: "smooth",
      });
    });
  });
};
