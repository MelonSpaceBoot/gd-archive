const demons = [
  { name: "Explorers", difficulty: "Medium", creator: "RobTop, MATHIcreator, SwitchStepGD", video: "https://www.youtube.com/embed/UPQARjVWB34", id: "UPQARjVWB34" },
  { name: "Explorers v1.5", difficulty: "Easy", creator: "RobTop", video: "https://www.youtube.com/embed/BhIad-HxaQw", id: "BhIad-HxaQw" },
  { name: "iSpyWithMyLitleEye", difficulty: "Easy", creator: "Voxicat", video: "https://www.youtube.com/embed/Ow7nDnZTbDw", id: "Ow7nDnZTbDw" },
  { name: "B", difficulty: "Medium", creator: "Motleyorc, ScortchVx", video: "https://www.youtube.com/embed/ohKPqGxotao", id: "ohKPqGxotao" },
  { name: "Nine Circles", difficulty: "Hard", creator: "Zobros", video: "https://www.youtube.com/embed/dOdPoU1ncOc", id: "dOdPoU1ncOc" },
  { name: "ReTraY", difficulty: "Easy", creator: "DimaVikuLov26", video: "https://www.youtube.com/embed/XFBr8c-Nwd0", id: "XFBr8c-Nwd0" },
  { name: "Clubstep", difficulty: "Medium", creator: "RobTop", video: "https://www.youtube.com/embed/NhLZSsNG8UM", id: "NhLZSsNG8UM" },
  { name: "Deadlocked", difficulty: "Hard", creator: "RobTop", video: "https://www.youtube.com/embed/vp3DCe4nEDg", id: "vp3DCe4nEDg" }
];

const demonList = document.getElementById("demonList");
const searchInput = document.getElementById("search");
const difficultyFilter = document.getElementById("difficultyFilter");
const videoModal = document.getElementById("videoModal");
const modalIframe = document.getElementById("modalIframe");

function openModal(videoUrl) {
  modalIframe.src = videoUrl + "?autoplay=1";
  videoModal.classList.add("active");
}
function closeModal() {
  modalIframe.src = "";
  videoModal.classList.remove("active");
}
function renderDemons() {
  const searchText = searchInput.value.toLowerCase();
  const selectedDifficulty = difficultyFilter.value;
  const filtered = demons.filter(demon => {
    return (
      demon.name.toLowerCase().includes(searchText) ||
      demon.creator.toLowerCase().includes(searchText)
    ) && (selectedDifficulty === "" || demon.difficulty === selectedDifficulty);
  });
  demonList.innerHTML = filtered.map(demon => `
    <div class="bg-gray-800 p-4 rounded shadow">
      <img src="https://img.youtube.com/vi/${demon.id}/hqdefault.jpg" alt="${demon.name} thumbnail" class="mb-3 w-full rounded" />
      <h2 class="text-xl font-semibold mb-1">${demon.name}</h2>
      <p class="text-sm text-gray-400 mb-1">Difficulty: ${demon.difficulty}</p>
      <p class="text-sm text-gray-400 mb-2">Creator: ${demon.creator}</p>
      ${demon.creator.includes(',') ? '<span class="inline-block px-2 py-1 text-xs bg-yellow-500 text-black rounded mb-2">Collab</span>' : ''}
      <button onclick="openModal('${demon.video}')" class="text-blue-400 underline">Watch Video</button>
    </div>
  `).join("");
}
searchInput.addEventListener("input", renderDemons);
difficultyFilter.addEventListener("change", renderDemons);
renderDemons();

const themeMenuButton = document.getElementById("themeMenuButton");
const themeDropdown = document.getElementById("themeDropdown");
themeMenuButton.addEventListener("click", () => {
  themeDropdown.classList.toggle("hidden");
});
themeDropdown.querySelectorAll("button[data-theme]").forEach(btn => {
  btn.addEventListener("click", () => {
    const color = btn.getAttribute("data-theme");
    document.querySelectorAll("button, h1, h2, a, .text-blue-400").forEach(el => {
      el.style.color = color;
    });
    themeDropdown.classList.add("hidden");
  });
});
