// <![CDATA[
$(document).ready(function() {
  $('.qimages').each(function() {
    var a = $(this).attr("src"),
        b = a.replace("_m.jpg", ".jpg"),
        c = $("<a />", {
        href: $(this).parent().attr("href"),
        target: "_parent"
      }).append($("<img />", {
        src: b
      }));
    $(this).qtip({
      content: {
        text: c,
        title: {
          text: $(this).attr("alt")
        }
      },
      position: {
				at: 'top center',
				my: 'center',
        viewport: $(window)
      },
      hide: {
        fixed: true
      },
      style: {
        classes: "ui-tooltip-youtube ui-tooltip-flickr"
      }
    })
  })
});
// ]]>