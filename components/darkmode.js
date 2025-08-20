// show list mode
const modeListButton = document.getElementById("mode-list-toggle"),
	modeLIst = document.getElementById("list-mode");

	modeListButton.addEventListener('click',
		function() {
			if (modeLIst.getAttribute("aria-expanded") === "false") {
				modeLIst.setAttribute("aria-expanded", true);
				modeLIst.classList.replace("h-[0]", "h-auto");
			} else {
				removeModeList();
			}
		}
	)
// take all mode
const lightMode = document.getElementById("light-mode"),
	darkMode = document.getElementById("dark-mode");
	// click on document
	document.addEventListener('click', function(e) {
		if (!modeLIst.contains(e.target) && !modeListButton.contains(e.target)) {
			removeModeList();
		}
		if (lightMode.contains(e.target)) applyMode("light");
		if (darkMode.contains(e.target)) applyMode("dark");
	});

const body = document.body;
// function apply mode
function applyMode(mode) {
	if (mode === "dark") {
		body.classList.add("bg-gray-800");
		localStorage.setItem("mode", "dark");
	} else {
		body.classList.remove("bg-gray-800");
		localStorage.setItem("mode", "light");
	}
}

window.addEventListener('DOMContentLoaded', () => {
	if (localStorage.getItem("mode") === "dark") {
		body.classList.add("bg-gray-800");
	}
});

// function remove
	function removeModeList() {
		if (modeLIst.classList.contains("h-auto")) {
			modeLIst.setAttribute("aria-expanded", false);
			modeLIst.classList.replace("h-auto", "h-[0]");
		}
	}