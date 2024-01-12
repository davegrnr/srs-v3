let navbar = document.getElementById("navbar");
let navbarContainer = document.getElementById("navbar-container");
let isSticky = false;

window.addEventListener("scroll", function () {
  if (window.scrollY > navbarContainer.offsetTop) {
    if (!isSticky) {
      navbar.classList.add("sticky");
      isSticky = true;
    }
  } else {
    if (isSticky) {
      navbar.classList.remove("sticky");
      isSticky = false;
    }
  }
});

const navLinks = document.querySelectorAll("#navbar a");
const sectionContents = document.querySelectorAll(".section-content");

function isSectionInViewport(section) {
  const rect = section.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const topThreshold = windowHeight / 3;
  const bottomThreshold = (windowHeight / 3) * 3;
  const sectionHeight = rect.bottom - rect.top;

  // Calculate the center of the section
  const sectionCenter = rect.top + sectionHeight / 1.5;

  return sectionCenter >= topThreshold && sectionCenter <= bottomThreshold;
}

// Function to highlight the active section in the navbar
function highlightActiveSection() {
  let maxCenter = 0; // Initialize the maximum center value
  let activeLink = null; // Initialize the active link

  sectionContents.forEach((section, index) => {
    const link = navLinks[index];
    if (isSectionInViewport(section)) {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;

      // Check if this section is more centered than the current active link
      if (sectionCenter > maxCenter) {
        maxCenter = sectionCenter;
        activeLink = link;
      }
    }
  });

  // Remove the "active" class from all navigation links
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
  });

  // Add the "active" class to the link corresponding to the most centered section
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

// Attach the scroll event listener
window.addEventListener("scroll", highlightActiveSection);

// Attach a click event listener to the navigation links
navLinks.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the target section's ID from the link's href attribute
    const targetSectionId = link.getAttribute("href").substring(1);

    // Scroll to the target section smoothly
    document.getElementById(targetSectionId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Initial call to highlightActiveSection to set the initial state
highlightActiveSection();
