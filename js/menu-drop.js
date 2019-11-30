function registerMenus() {
	/* Get All Menu togglers */
	var menuclicks = document.querySelectorAll(".menu-toggle");
	for (var i = 0; i < menuclicks.length; i++) {
		/* If Menu toggle on hover */
		if (menuclicks[i].className.indexOf("hover")) {
			/* On mouse enter, show the target */
			menuclicks[i].onmouseenter = event => { 
				document.querySelector(event.target.getAttribute("target")).style.display = "block";
				/* Calculate whether the menu drop below or above the target */
				if((screen.availHeight / 2) < event.target.offsetTop) {
					/* There is more space above */
					document.querySelector(event.target.getAttribute("target")).style.top = (event.target.offsetTop - event.target.offsetHeight)
				}
			}
			/* On mouse leave, hide the target */
			menuclicks[i].onmouseleave = event => { 
				document.querySelector(event.target.getAttribute("target")).style.display = "none";
			}
		}
	}
	// body...
}
document.addEventListener("load", registerMenus());
document.addEventListener("change", registerMenus());