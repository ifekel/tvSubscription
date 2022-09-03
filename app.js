function showPackages() {
	let show = document.getElementById("container").style.display = "flex"
	// let showed = document.getElementById("tab").style.width = "80%"
}

function remove(){
	let show = document.getElementById("container").style.display = "none"
}

let packages = {
	starter: 4500,
	compact: 7200,
	compactPlus: 11500,
	premium: 19350
}

function showPrices() {
	let showed = document.getElementById("ddn").style.display = "block";
}

function refresh() {
	location.reload()
}


function next() {
	let inp = document.forms["myForm"]["package"].value
	let price = document.forms["myForm"]["price"].value
	// let change1 = document.getElementById("dds").style.backgroundColor = "Orange"

	if (inp == "Starter"){
		let changeBgc = document.getElementById("start").style.backgroundColor = "Orange"
		showPrices()

		if (price == packages.starter) {
			let changeBgc = document.getElementById("start").style.backgroundColor = "green"
			alert("Your order has been sent!")
			refresh()
		}
	}

	if (inp == "Compact"){
		let changeBgc = document.getElementById("compact").style.backgroundColor = "Orange"
		showPrices()

		if (price == packages.compact) {
			let changeBgc = document.getElementById("compact").style.backgroundColor = "green"
			alert("Your order has been sent!")
			refresh()
		}
	}

	if (inp == "Compact Plus"){
		let changeBgc = document.getElementById("compact-plus").style.backgroundColor = "Orange"
		showPrices()

		if (price == packages.compactPlus) {
			let changeBgc = document.getElementById("compact-plus").style.backgroundColor = "green"
			alert("Your order has been sent!")
			refresh()
		}
	}

	if (inp == "Premium"){
		let changeBgc = document.getElementById("premium").style.backgroundColor = "Orange"
		showPrices()

		if (price == packages.premium) {
			let changeBgc = document.getElementById("premium").style.backgroundColor = "green"
			alert("Your order has been sent!")
			refresh()
		}
	}

}