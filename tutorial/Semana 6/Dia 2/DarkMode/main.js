const btn = document.querySelector(".btn");
const htext = document.querySelector(".htext");

btn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-them");
  if (document.documentElement.classList.contains("dark-them")) {
    htext.textContent = "Estas en Dark Mode ";
  } else {
    htext.textContent = "Estas en Light Mode ";
  }
});
