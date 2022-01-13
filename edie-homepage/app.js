const nav = document.querySelector(".nav-items");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".nav-link");

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

// const nav_item = document.querySelectorAll(".nav-link");
// const section = document.querySelectorAll("section");

// function activeMenu() {
//   let len = section.length;
//   while (--len && window.scrollY + 97 < section[len].offsetTop) {}
//   nav_item.forEach((ltx) => ltx.classList.remove("active-link"));
//   nav_item[len].classList.add("active-link");
// }

// activeMenu();
// window.addEventListener("scroll", activeMenu);

// Creating a Smart Navbar With Vanilla JavaScript
// https://css-tricks.com/creating-a-smart-navbar-with-vanilla-javascript/

const header = document.querySelector("header");
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
