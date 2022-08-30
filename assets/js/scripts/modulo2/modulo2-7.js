(function($) {
  if (!$.curCSS) {
  $.curCSS = $.css;
}})(jQuery);
jQuery.browser = {};
(function () {
  jQuery.browser.msie = false;
  jQuery.browser.version = 0;
  if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
    jQuery.browser.msie = true;
    jQuery.browser.version = RegExp.$1;
  }
})();
var idDraggable;
var textD;

$(".draggable").draggable({
  cursor: 'move',
  revert: true,
  start: function() {
    idDraggable=this.id;
  },
  drag: function(event, ui) {
    textD=$(this).text();
  }
});
$(".droppable").droppable({
  hoverClass:'droppable-hover',
  tolerance: "pointer",
  drop: function(event,ui){
    var attrDroppable = this.getAttribute("data-draggable-id");
    if(idDraggable === attrDroppable){
      this.classList.add("dropped");

      const draggableElement=document.getElementById(idDraggable);
      const droppableElement=document.getElementsByName(idDraggable);

      console.log(textD);
      var textInTable='<tr class="droppped table-hover-anim"><td>'+textD+'</td></tr>';
      console.log(textInTable);
      $(this).find('tbody').append(textInTable);

      ui.draggable.addClass('dragged');
      ui.draggable.attr("draggable", "false");
    }
  }
});
