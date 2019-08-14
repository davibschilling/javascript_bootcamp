
// Com o # é possível buscar elementos pelo ID no html
document.querySelector('#create_note').addEventListener('click', function (e) {
	// Com o . é possível buscar elementos pela classe no html
	document.querySelectorAll('.paragraph').forEach(function(p){
		p.remove()
	})
})