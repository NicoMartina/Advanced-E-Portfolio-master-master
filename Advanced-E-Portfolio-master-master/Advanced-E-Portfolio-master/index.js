let isModalOpen = false;
let contrasteToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
	const shapes = document.querySelectorAll(".shape");
	const x = event.clientX * scaleFactor;
	const y = event.clientY * scaleFactor;

	for (let i = 0; i < shapes.length; i++) {
		const isOdd = i % 2 !== 0;
		const boolInt = isOdd ? -1 : 1;
		shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
	}
}

function toggleContrast() {
	contrasteToggle = !contrasteToggle;
	if (contrasteToggle) {
		document.body.classList += "dark-theme";
	} else {
		document.body.classList.remove("dark-theme");
	}
}

function contact(event) {
	event.preventDefault();
	const loading = document.querySelector(".modal__overlay--loading");
	const success = document.querySelector(".modal__overlay--success");
	loading.classList += " modal__overlay--visible";
	emailjs
		.sendForm(
			"service_ffljnj8",
			"template_q626vz7",
			event.target,
			"HpsE4Y3FFSl6SjygY"
		)
		.then(() => {
			loading.classList.remove("modal__overlay--visible");
			success.classList += " modal__overlay--visible";
		})
		.catch(() => {
			loading.classList.remove("modal__overlay--visible");
			alert(
				"The email service is temporarily unavailable. Please contact me directly at nicolas.martina69@gmail.com"
			);
		});
}

function toggleModal() {
	if (isModalOpen) {
		isModalOpen = false;
		return document.body.classList.remove("modal__open");
	}
	isModalOpen = true;
	document.body.classList += " modal__open";
}
