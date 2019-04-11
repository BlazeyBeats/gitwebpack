import $ from 'jquery';
import imgbird from '../images/bird.jpg';
import imgmouse from '../images/squirrel.jpg';

$('#bird').attr("src",imgbird);
$('#mouse').attr("src",imgmouse);

$(document).ready(function () {
	// when a hanburger menu is clicked
	let $ul = $(".nav__list"),
		 $menu = $(".nav__menu");

	$($menu).click(function () {
		// toggle menu-click Class
		$ul.toggleClass("menu-click");
	}); // end click event handler
});
