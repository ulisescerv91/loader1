var container=document.getElementById('container');
setTimeout(function(){
	//add class
	container.classList.add("cerrar");
	//container.remove();
//9 segundos
},4000)

window.addEventListener('load',function(){
	console.log('Page load');
})