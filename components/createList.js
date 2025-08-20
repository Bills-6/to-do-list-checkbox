const inputCreateWrapper = document.querySelector(".input-create-wrapper"),
	createButton = document.getElementById("create-button");
const inputCreate = document.getElementById("input-create");

	createButton.addEventListener('click', function(e) {
		e.stopPropagation();
		if (inputCreateWrapper.scrollHeight < 40) {
			inputCreateWrapper.classList.replace("h-[0]", "h-[40px]")
			inputCreate.focus();
		} else {
			inputCreateWrapper.classList.replace("h-[40px]", "h-[0]")
			inputCreate.blur();
		}
	});
	
	document.addEventListener('click', e => {
		if (!inputCreateWrapper.contains(e.target) && !createButton.contains(e.target)) {
			if (inputCreateWrapper.classList.contains("h-[40px]")) {
				inputCreateWrapper.classList.replace("h-[40px]", "h-[0]")
			}
	}
});