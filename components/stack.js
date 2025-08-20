const ul = document.querySelector(".list-wrapper");
let stack = [];

// render to DOM function
function renderStack() {
	ul.innerHTML = null;

	stack.forEach((value, index) => {
		const fragment = document.createDocumentFragment();
		const li = document.createElement("li");
		li.classList.add("list", "bg-gray-400");
		// activity wrapper
		const activityWrapper = document.createElement("div");
		activityWrapper.classList.add("activity-wrapper");

		// activity input
		const activityContent = document.createElement("textarea");
		activityContent.id = "activity-input";
		activityContent.value = value;
		activityContent.disabled = true;

		// edit button
		const editActivityButton = document.createElement("span");
		editActivityButton.id = "edit-button";

		// icon edit
		const iconEditActivity = document.createElement("i");
		iconEditActivity.classList.add("bi", "bi-pencil");
		iconEditActivity.id = "icon-edit";

		// checkbox day wrapper
		const checkboxWrapper = document.createElement("div");
		checkboxWrapper.classList.add("checkbox-day-wrapper", "grid", "grid-cols-7");

		// combine
		activityWrapper.appendChild(activityContent);
		editActivityButton.appendChild(iconEditActivity);
		activityWrapper.appendChild(editActivityButton);

		li.appendChild(activityWrapper);

		for (let i = 1; i <= 7; i++) {
			const checkboxDay = document.createElement("input");
			checkboxDay.type = "checkbox";
			checkboxDay.classList.add("checkbox-day");

			checkboxWrapper.appendChild(checkboxDay);
		}
		li.appendChild(checkboxWrapper);
		fragment.appendChild(li);
		ul.appendChild(fragment);
// save to localStorage
saveToLocalstorage();
// autoResize
	autoResize(activityContent);
	activityContent.addEventListener('input',
		function(){
			autoResize(activityContent);

		}
	)
		function autoResize(element) {
	element.style.height = "0";
	element.style.height = element.scrollHeight + "px";
}
		// edit activity
		editActivityButton.addEventListener('click', function() {
			if (activityContent.hasAttribute("disabled")) {
				activityContent.disabled = false;
				activityContent.focus();
				this.style.opacity = "1";
			} else {
				activityContent.disabled = true;
				activityContent.blur();
				this.setAttribute("style", "");

				const newValue = activityContent.value;
				stack.splice(index, 1, newValue);
				saveToLocalstorage();
			}
		});
	});
}


// push to stack for a new value
const inputCreateActivity = document.getElementById("input-create");
const confirmButton = document.getElementById("confirm-create");
const inputWrapper = document.querySelector(".input-create-wrapper");

confirmButton.addEventListener('click',
	function()
	{
		const valueCreate = inputCreate.value;

		if (valueCreate !== "") {
			stack.push(valueCreate);
			inputCreate.value = "";
			renderStack();
			inputWrapper.classList.replace("h-[40px]", "h-[0]");
			console.log(stack);
		}
	}
)

function saveToLocalstorage() {
	localStorage.setItem('stackData', JSON.stringify(stack));
}
// DOM load
window.addEventListener('DOMContentLoaded', function() {
	if (this.localStorage.getItem("stackData") !== null) {
		const takeData = this.localStorage.getItem("stackData");
		stack = [...JSON.parse(takeData)];
		renderStack();
	}
});

// trash for all
const trashButton = document.getElementById("trash-button");
	trashButton.addEventListener('click',
		function() {
			if (stack.length > 0) {
				stack.splice(0, stack.length);
				localStorage.removeItem("stackData");
				ul.innerHTML = null;
			}
		}
	)
console.log(localStorage);