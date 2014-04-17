jQuery(document).ready(function(){ 
	$('#divRss').FeedEk({
		FeedUrl: 'http://blog.lonelycowboy.in/feeds/posts/default',
		MaxCount: 5,
		DescCharacterLimit: 400
	});
	$('.fancybox').fancybox();
	var $logo 	= $('#logo');
	$('.tab-blog,.tab-project,.tab-contact').click(function() {
	  $logo.fadeIn('slow');
	});
	$('.tab-home').click(function() {
	  $logo.fadeOut('slow');
	});	
	var $content 		= $("#content");
  	$content.easytabs({
	  animate			: true,
	  updateHash		: false,
	  transitionIn		:'slideDown',
	  transitionOut		:'slideUp',
	  animationSpeed	:600,
	  tabs				:"> .menu > ul > li",
	  tabActiveClass	:'active',
	});
	$content.find('.tabs li a').hover(
		function() {
			$(this).stop().animate({ marginTop: "-7px" }, 200);
		},function(){
			$(this).stop().animate({ marginTop: "0px" }, 300);
		}
	);
	var $container	 	= $('#project-list');
	$container.find('img').adipoli({
		'startEffect' 	: 'overlay',
		'hoverEffect' 	: 'sliceDown',
		animSpeed :100
	});
});	