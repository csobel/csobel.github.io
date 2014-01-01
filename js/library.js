function getNavBar()
{
	var navbar = $("<div />")
	navbar.attr("class", "navbar navbar-default lib-nav");
	var navbar_header = $("<div />");
	{
		navbar_header.attr("class", "navbar-header");
		var a = $("<a/>");
		a.attr("href", "index.html"); //todo specify location
		a.attr("class", "navbar-brand")
		a.append("Corey Sobel");
		navbar.append(a);
	}
	var ul = $("<ul />");
	items = [["course_projects.html", "Course Work"], ["#", "Other Projects"], ["#", "Resume"]];
	ul.attr("class", "nav navbar-nav navbar-right");
	for(i = 0; i < items.length; i++)
	{
		var item = items[i];
		var li = $("<li />");
		var a = $("<a/>");
		a.attr("href", item[0]); //todo specify location
		a.append(item[1]);		
		li.append(a);
		ul.append(li);
	}
	navbar.append(ul);
	return navbar;
}

/* Function to initialize unity web player. Only use on pages that are using the unity web player */
function initUnity(web_player)
{
	var config = {
			width: 960, 
			height: 600,
			params: { enableDebugging:"0" }
			
		};
		var u = new UnityObject2(config);

		console.log("called unity init");
		jQuery(function() {
			console.log("made it into function");
			var $missingScreen = jQuery("#unityPlayer").find(".missing");
			var $brokenScreen = jQuery("#unityPlayer").find(".broken");
			$missingScreen.hide();
			$brokenScreen.hide();
			u.observeProgress(function (progress) {
				switch(progress.pluginStatus) {
					case "broken":
						$brokenScreen.find("a").click(function (e) {
							e.stopPropagation();
							e.preventDefault();
							u.installPlugin();
							return false;
						});
						$brokenScreen.show();
					break;
					case "missing":
						$missingScreen.find("a").click(function (e) {
							e.stopPropagation();
							e.preventDefault();
							u.installPlugin();
							return false;
						});
						$missingScreen.show();
					break;
					case "installed":
						$missingScreen.remove();
					break;
					case "first":
					break;
				}
			});
			u.initPlugin(jQuery("#unityPlayer")[0], "unity_players/"+web_player);
		});
}