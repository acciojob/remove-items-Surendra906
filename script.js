//your JS code here. If required.
const selectElement=document.getElementById("colorSelect");
const removeButton=document.querySelector('input[type="button"]');

removeButton.addEventListener("click",()=>{
	if(selectElement.selectedIndex!==-1){
		selectElement.remove(selectElement.selectedIndex);
	}
});