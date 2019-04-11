import $ from 'jquery';
import 'bootstrap';
import imgbird from '../images/bird.jpg';
import imgmouse from '../images/squirrel.jpg';
import '../css/normalize.css';
import '../css/style.css';

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
