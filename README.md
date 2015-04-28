simpleTab
===========
A simpleTab jQuery Plugin

How to use:
-------------------------

1. Include necessary JS files

	```
	<script src="jquery.js"></script>
	<script src="jquery.simpleTab.min.js"></script>
  	```

2. Add simpleTab CSS file. Please tweak it to serve your needs.

	```
	<link rel="stylesheet" href="style.css" />
	```

3. Create the following HTML element

	```
	<div id="tabs">
		<ul>
			<li>
				<a href="#tab1">Tab 1</a>
			</li>
			<li>
				<a href="#tab2">Tab 2</a>
			</li>
			<li>
				<a href="#tab3">Tab 3</a>
			</li>
		</ul>
	</div>
	<div id="content">
		<div id="tab1" class="tab_content">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin neque risus, tincidunt quis sodales tempus, feugiat id risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam eros mi, lacinia a sodales eu, tristique nec felis. Nunc facilisis posuere ligula ac semper.
		</div>
		<div id="tab2" class="tab_content">
			Aenean eu felis erat. Praesent ultricies, mi nec interdum congue, sapien elit dapibus nisl, nec iaculis lectus velit ultrices urna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ornare elementum turpis ut sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
		</div>
		<div id="tab3" class="tab_content">
			Sed vitae urna nibh, vel ultricies quam. Aliquam tempus, eros id luctus euismod, nulla ante tempor ante, et mollis nisi ligula et odio. Nullam at elementum nisl. Sed quis ante nisl. Morbi sodales, libero a rhoncus mattis, felis urna semper ligula, imperdiet elementum eros odio vitae lacus. Curabitur metus arcu, tincidunt et venenatis in, volutpat a dolor. Duis eget urna diam. Praesent nec lectus in arcu pharetra ultricies.
		</div>
	</div>
	```

4. Fire plugin using jQuery selector

	```
	$(function() {
		$("#tabs").simpleTab();
	});
	```

5. Have fun:-)


Compatibility:
-------------------------

* IE7 and above, Firefox, Chrome, Safari and Opera
	
Live Demo:
-------------------------

* [Homepage](http://geniuscarrier.com)
* [Demo](http://geniuscarrier.com/simpletab-a-jquery-plugin/)

License:
-------------------------
Released under the [MIT license](http://opensource.org/licenses/MIT).
