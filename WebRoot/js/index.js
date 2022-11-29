$(document).ready(function(){
	var input = document.getElementById("nav-searchform");
	input.addEventListener("keydown",function(event){
		if (event.keyCode==13) {
			search();
		}
	});
	document.getElementById("search-button").onclick=search;
	function search(){
		var searchValue="https://search.bilibili.com/all?keyword="+$(".nav-search-input:first").val();
		window.open(searchValue);
	}
	
})