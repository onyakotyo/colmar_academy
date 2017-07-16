
$(document).ready(function() {

$(' #buttoninput').click(function(){
  var itemText = $('#item-input').val();
  var $item = $('<li><span>' + itemText + '</span><i class="glyphicon glyphicon-remove"></i></li>');
  $('.list').append($item);
  $('#item-input').val('');

  $item.find('.glyphicon-remove').click(function(){
    var $parent = $(this).parent();
    $parent.remove();
  })
});

});
