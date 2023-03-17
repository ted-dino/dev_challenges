const nav = document.querySelector(".nav-items");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".nav-link");
const headerHeight = document.querySelector(".header").offsetHeight;

let visibility;

navToggle.addEventListener("click", () => {
  visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((nav) => nav.classList.remove("active-link"));
    link.classList.add("active-link");

    visibility = nav.getAttribute("data-visible");
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  });
});

// Creating a Smart Navbar With Vanilla JavaScript
// https://css-tricks.com/creating-a-smart-navbar-with-vanilla-javascript/

const html = document.documentElement;
const header = document.querySelector(".head");
const supportPageOffset = window.pageXOffset !== undefined;
const isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

let previousScrollPosition = 0;

const isScrollingDown = () => {
  let scrolledPosition = supportPageOffset
    ? window.pageYOffset
    : isCSS1Compat
    ? document.documentElement.scrollTop
    : document.body.scrollTop;
  let isScrollDown;

  if (scrolledPosition > previousScrollPosition) {
    isScrollDown = true;
  } else {
    isScrollDown = false;
  }
  previousScrollPosition = scrolledPosition;
  return isScrollDown;
};

const handleNavScroll = () => {
  if (isScrollingDown() && !header.contains(document.activeElement)) {
    header.classList.add("scroll-down");
    header.classList.remove("scroll-up");
  } else {
    header.classList.add("scroll-up");
    header.classList.remove("scroll-down");
  }
  html.style.setProperty("--scroll-padding", `${headerHeight + 5}px`);
};

var throttleTimer;

const throttle = (callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

window.addEventListener("scroll", () => {
  if (mediaQuery && !mediaQuery.matches) {
    throttle(handleNavScroll, 250);
  }
});
