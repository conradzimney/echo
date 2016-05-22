'use strict';

// jQuery(document).ready(function() {
//     jQuery('.toggle-nav').click(function(e) {
//         jQuery(this).toggleClass('active');
//         jQuery('.menu ul').toggleClass('active');
 
//         e.preventDefault();
//     });
// });

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});