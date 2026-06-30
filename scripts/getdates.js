// Dynamically set the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Dynamically set the last modified date
document.getElementById("lastModified").innerHTML =
  "Last Modification: " + document.lastModified;