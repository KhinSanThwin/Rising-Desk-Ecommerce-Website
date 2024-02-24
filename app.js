document
  .getElementById("toggleDropdown")
  .addEventListener("click", function () {
    var dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });


