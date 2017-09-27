(function() {
  $("html").on("mousedown", function(e) {
    return $("i").addClass("active").css("left", e.pageX).css("top", e.pageY);
  });

  $("i").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
    return $("i").removeClass("active");
  });

}).call(this);
