function showVideoControls()
{

	var video = document.getElementById("introVideo");
	var control = document.createAttribute("controls");
	video.setAttributeNode(control);
	video.style = "{box-shadow:0 0 20px #f88}";
}
function hideVideoControls()
{
	var video = document.getElementById("introVideo");
	video.removeAttribute("controls");
}
function blurAndShowOptions(id)
{
	var events = document.getElementsByClassName("eventImages");
	events[id].style.filter = "blur(5px)";
	
}
function reverseBlur(id)
{
	var events = document.getElementsByClassName("eventImages");
	events[id].style.filter='';


}