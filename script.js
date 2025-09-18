//Show Button Selection
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".selection-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // prevent form submission

      const group = button.dataset.group;

      // Remove active coloring from all buttons in the same group
      buttons.forEach((btn) => {
        if (btn.dataset.group === group) {
          btn.classList.remove("active");
        }
      });

      // Add coloring to the clicked button
      button.classList.add("active");
    });
  });
});


//Start Button Navigation
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('startBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.location.assign('./cQuestions.html')
  })
})

//Nav Buttons cQuestions
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('c-backBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.location.assign('./index.html')
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('c-nextBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.location.assign('./xQuestions.html')
  })
})

//Nav Buttons xQuestions
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('x-backBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.location.assign('./cQuestions.html')
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('x-nextBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.location.assign('./oQuestions.html')
  })
})

//Nav Buttons oQuestions
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('o-backBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.location.assign('./xQuestions.html')
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('o-nextBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.location.assign('./results.html')
  })
})

