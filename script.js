document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".selection-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // prevent form submission

      const group = button.dataset.group;

      // Remove active from all buttons in the same group
      buttons.forEach((btn) => {
        if (btn.dataset.group === group) {
          btn.classList.remove("active");
        }
      });

      // Add active to the clicked button
      button.classList.add("active");
    });
  });
});
