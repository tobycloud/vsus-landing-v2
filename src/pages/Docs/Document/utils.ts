const offset = (isMobile?: boolean) => 75 + (isMobile ? 70 : 0);

export const handleAnchorClicks = (isMobile?: boolean) =>
  document.querySelectorAll('a[href^="#"]').forEach((anchor) =>
    anchor.addEventListener("click", (e: Event) => {
      e.preventDefault();
      const href = (anchor as HTMLAnchorElement).getAttribute("href")!;
      const target = document.querySelector(href);

      window.scrollTo({
        top: target ? target.getBoundingClientRect().top + window.scrollY - offset(isMobile) : 0,
        behavior: "smooth",
      });
      history.pushState(null, "", href);
    })
  );

export const handleScrollToHash = (isMobile?: boolean) => {
  if (!document) return;

  const hash = window.location.hash;
  if (!hash) return;

  const target = document.querySelector(hash);
  if (!target) return;

  window.scrollTo({
    top: target.getBoundingClientRect().top + window.scrollY - offset(isMobile),
    behavior: "smooth",
  });
};
