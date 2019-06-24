// JQUERY
// CAMBIO DE BARRAS AL HACER SCROLL
$(window).scroll(function() {
	console.log($(window).scrollTop());
	if ($(window).scrollTop() > 150) {
		$('.nav-wrapper').addClass('barra2');
		$('.nav-wrapper').removeClass('barra');
		$('.brand-logo').addClass('logo2');
		$('.brand-logo').removeClass('logo1');
	}
	else {
		$('.nav-wrapper').removeClass('barra2');  
		$('.nav-wrapper').addClass('barra');
		$('.brand-logo').removeClass('logo2');  
		$('.brand-logo').addClass('logo1');
	}
});

$(document).ready(function(){
	// EFECTOS SIDENAV
	$('.sidenav').sidenav();

	// EFECTOS DEL CARRUSEL
	$('.carousel').carousel({
		fullWidth: true
	});

	// EFECTO DE SELECTS
	$('select').formSelect();

	// funcion para que sea automatico
	function autoplay() {
		$('.carousel').carousel('next');
		setTimeout(autoplay, 5000);
	  }
	  setTimeout(autoplay, 5000);

	  // funcion para pasar con el boton derecho
	$('.moveNextCarousel').click(function(e){
		  e.preventDefault();
		  e.stopPropagation();
		  $('.carousel').carousel('next');
	  });

	// funcion para regresar con el boton izquierdo
	  $('.movePrevCarousel').click(function(e){
		  e.preventDefault();
		  e.stopPropagation();
		  $('.carousel').carousel('prev');
	  });

	//   efecto parallax
	$('.parallax').parallax();

	//   efecto de tabs
	$('.tabs').tabs();
      
	
	

	// $(window).scroll(function(){
	// 	if( $(this).scrollTop() > 0 ){
	// 		$('.introduccion').slideDown(100);
	// 	} else {
	// 		$('.introduccion').slideUp(100);
	// 	}
	// });

	// FUNCION PARA DIBUJAR TAMAÑO EN COTIZACION
		$(".boton").click(function(){
			event.preventDefault();
			var ancho =$(document.getElementById('ancho')).val();
			var alto = $(document.getElementById('alto')).val();
			var txt = "";
			txt += $(".medidas").width(ancho + "px") + "</br>";
			txt += $(".medidas").height(alto + "px");
			$(".medidas").html();
			$("#alto").val("");
			$("#ancho").val("");
		});

		// para abrir el modal
		$('.modal').modal();

		// tarjetas
		$('#product-card').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext, div.carouselPrev').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext, div.carouselPrev').removeClass('visible');
	});	
});