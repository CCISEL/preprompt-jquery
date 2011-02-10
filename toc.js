
(function($) {

	/*
		TOC will be added to the top-right of the page with fixed position
		
		»»» Sample TOC HTML «««««««««««««««««««««««««««««««««««««««««««««««««««
		<div class="toc">
			<div class="title">TOC</div>
			<ul>
				<li><a href="#toc-1">TOC ITEM 1</a></li>
				<li><a href="#toc-2">TOC ITEM 2</a></li>
			</ul>
		</div>

		»»» Changes in selected elements  ««««««««««««««««««««««««««««««««««««««
		Before (sample): 
		    <h1>Apresentação</h1>
		After:
		    <h1 id="toc-1">Apresentação <a class='toc-para' href='#toc-1'>&para;</a></h1>

		Note: We need to have caution with existing id value in selected element
*/
	$.fn.toc = function() {
		
		var toc$ = $("<div class='toc'><div class='title'>TOC</div><ul></ul></div>");

		this.each(function(i) 
		{
			var tocId = "toc-" + (i+1);
			var tocText = $(this).text();

			// Add TOC <li> elements to TOC UI
			var li$ = $("<li><a></a></li>");
			li$.find("a").attr("href", "#" + tocId).text(tocText);
			toc$.find("ul").append(li$);

			// Update selected toc elements UI
			var para$ = $("<a>").addClass("toc-para").attr("href", "#" + tocId).html("&para;");
			$(this).attr("id", tocId).append(para$);

		});


		// Add TOC UI to the page's body
		$("body").append(toc$);
		return toc$;	// ou this! (design option)
	}

})(jQuery);
