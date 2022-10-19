$(function () {
    var $newItembutton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('input:text');

        $newItembutton.show();
        $newItemForm.hide();

        $('#showForm').on('click', function (){
            $newItemForm.show();
            $newItembutton.hide();
        });
      $newItemForm.on('submit', function (e) {
          e.preventDefault();
          var newText = $textInput.val();
          $('li:last').after('<li>' + newText + '</li>');
          $newItemForm.hide();
          $newItembutton.show();
          $textInput.val('');
      });
});
