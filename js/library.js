function getNavBar()
{
	/*return $(
		'<div class="navbar navbar-default lib-nav" role="navigation">
			<div class="navbar-header">
				<a class="navbar-brand" href="#">Corey Sobel</a>
			</div>
			<ul class="nav navbar-nav navbar-right">
				<li><a href="#">Projects</a></li>
				<li><a href="#">Resume</a></li>
			</ul>
		</div>'
	);*/

	var navbar = $("<div />")
	navbar.attr("class", "navbar navbar-default lib-nav");
	var navbar_header = $("<div />");
	{
		navbar_header.attr("class", "navbar-header");
		var a = $("<a/>");
		a.attr("href", "#"); //todo specify location
		a.attr("class", "navbar-brand")
		a.append("Corey Sobel");
		navbar.append(a);
	}
	var ul = $("<ul />");
	items = [["#", "Projects"], ["#", "Resume"]];
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