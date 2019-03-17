setTimeout(function(){
	  $('.second').removeClass("fade-in");
	  $('.setence').removeClass("fade-in");
   }, 3200);

window.counter = function() {
	// this refers to the html element with the data-scroll-showCallback tag
	var span = this.querySelector('span');
	var current = parseInt(span.textContent);

	span.textContent = current + 1;
};

$(document).ready(
	function(){
	$('#camp').on('click', function(){
		$('.analysis').hide();
		$('.analysis').fadeIn(1000);
	});


	$('#prot').on('click', function(){
		$('.prototype').hide();
		$('.prototype').fadeIn(1000);
	});

	$('#art').on('click', function(){
		$('.blog').hide();
		$('.blog').fadeIn(1000);
	});

	$('#inshead').click(function(){
	 if(document.getElementsByClassName('blog') && document.getElementsByClassName('insert')){
	 	// window.location = document.referrer;
		}
	});

	//  

	// $('#inshead').on('click', function(){
	// 	console.log('hello')
	// 	if(document.getElementsByClassName('blog') && document.getElementsByClassName('insert')){
	// 		window.location.href='index.html';
	// 		filterSelection("blog")

	// 	}
	// })

	});

AOS.init({
		easing: 'ease-in-out-sine'
	  });