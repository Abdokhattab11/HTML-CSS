const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (evnt) {
    evnt.preventDefault(); // remove the default behavoir
    const href = link.getAttribute("href"); // we need first to specify where we are going from the current event
    console.log(href);
    if (href === "#") {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href.startsWith("#")) {
      // Now href if the ID of the section that we want scroll to
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }
    // close mobile nav
  });
});
