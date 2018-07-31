// $(document).ready(function(){
// 	$(".ui.dropdown").dropdown();
// })
console.log("Ama");

$('td').on('click', function(){
	let id = $(this).parent.children[0].innerHTML;
	console.log('id', id);
})