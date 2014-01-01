// name of pages that should use the unity player. Note that for each page using a unity player,
// it is expected that there is a corresponding file <page_name>.unity3d
var unity_pages = ["checkers"]

$(window).load(function()
{
	$("body").prepend(getNavBar());
	// see if we should load a unity player
	console.log("out of loop");
	for(var i = 0; i < unity_pages.length; i++)
	{
		if(window.location.href.indexOf(unity_pages[i]) > -1)
		{
			var web_player = unity_pages[i] + ".unity3d";
			initUnity(web_player);
			break;
		}
	}
});