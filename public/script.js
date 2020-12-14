const $yourSidebar = $(".nav");
$(document).on("click.toggleNav touch.toggleNav", ".show", function () {
  $yourSidebar.toggleClass("open");
});
