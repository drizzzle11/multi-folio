$("#menu").click(function() {
    if ($("#navigation").hasClass("hidden_nav")) {
      $("#navigation").removeClass("hidden_nav");
    } else {
      $("#navigation").addClass("hidden_nav");
    }
  });
