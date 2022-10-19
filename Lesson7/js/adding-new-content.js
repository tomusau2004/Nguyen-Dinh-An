$(function() {
    $('ul').before('<p class="notice">Just update</p>');
    $('li.hot').prepend('+ ');
    var $new ListItem = $('<li><em>gluten-free</em> soy sauce</li>');
    $('li:last').after ($newListItem);

});
