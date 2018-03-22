if (localStorage.getItem("make_sortable_enabled") === null || localStorage.getItem("make_sortable_enabled") === "true"){
	makeSortable();

	var changed = false;
	
	new MutationObserver(function(){
		changed = true;
	}).observe(document.querySelector("body"), {childList: true, subtree: true});
	
	setTimeout(function(){
		if(changed){
			makeSortable();
			changed = false;
		}
	}, 2500);
	
	function makeSortable(){
		var tables = document.getElementsByTagName("table");
		for(var i = 0; i < tables.length; i++){
			tables[i].classList.add("sortable");
			sorttable.makeSortable(tables[i]);
		}	
	}	
}