(function ($) {
  if (!$.curCSS) {
    $.curCSS = $.css;
  }
})(jQuery);
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

$(".draggable").draggable({
  cursor: "move",
  revert: true,
  start: function () {
    idDraggable = this.id;
  },
  stop: function () {},
});
$(".droppable").droppable({
  hoverClass: "droppable-hover",
  tolerance: "pointer",
  drop: function (event, ui) {
    var attrDroppable = this.getAttribute("data-draggable-id");
    if (idDraggable === attrDroppable) {
      this.classList.add("dropped");
      const draggableElement = document.getElementById(idDraggable);
      const droppableElement = document.getElementsByName(idDraggable);
      const txt = droppableElement[0].innerHTML.replace("__", idDraggable);
      droppableElement[0].innerHTML = txt;

      draggableElement.classList.add("dragged");
      draggableElement.setAttribute("draggable", "false");
    } else {
      this.classList.add("droppedWrong");
    }
  },
});
