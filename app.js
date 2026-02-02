const $textarea = document.querySelector("textarea");

$textarea.addEventListener("input", () => {
	let total = 0;
	for (let i = 0; i < $textarea.value.length; i++) {
		total++;
		console.log(total);
	}
});
