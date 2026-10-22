
const menuButton = document.getElementById("menu");
const navigation = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();
