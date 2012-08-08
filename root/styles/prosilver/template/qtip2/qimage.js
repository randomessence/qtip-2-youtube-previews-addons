// <![CDATA[
$(document).ready(function()
{
	$('.qimage').each(function() {
		var thumb = $(this).attr('src'), full, content;
		full = thumb.replace('_m.jpg', '.jpg');
		content = $('<a />', { 
			href: $(this).parent().attr('href'),
			target: '_parent'
		})
		.append( $('<img />', { src: full }) );
		$(this).qtip({
			content: {
				text: content,
				title: {
					text: $(this).attr('alt')
				}
			},
			position: {
				my: 'center',
				at: 'center',
				viewport: $(window)
			},
			hide: {
				fixed: true
			},
			style: {
				classes: 'ui-tooltip-tipsy ui-tooltip-flickr'
			}
		});
	});
});
// ]]>