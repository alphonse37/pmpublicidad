// JQUERY
// CAMBIO DE BARRAS AL HACER SCROLL
$(window).scroll(function() {
	$(window).scrollTop();
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
		// indicators: true
	});

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

	//   efecto de tabs
	$( "#tabs" ).tabs();
      
	
	

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
			
			if (ancho <= 25 && alto <= 25) {
				txt += $(".medidas").width(ancho*10 + "px") + "</br>";
				txt += $(".medidas").height(alto*10 + "px");
				$(".medidas").html();
				$("#alto").val("");
				$("#ancho").val("");
			} else if (ancho > 25 && ancho <= 50 && alto > 25 && alto >= 50) {
				txt += $(".medidas").width(ancho*5 + "px") + "</br>";
				txt += $(".medidas").height(alto*5 + "px");
				$(".medidas").html();
				$("#alto").val("");
				$("#ancho").val("");
			} else if (ancho > 50 && ancho <= 150 && alto > 50 && alto >= 150) {
				txt += $(".medidas").width(ancho*5 + "px") + "</br>";
				txt += $(".medidas").height(alto*5 + "px");
				$(".medidas").html();
				$("#alto").val("");
				$("#ancho").val("");
			} else if (ancho > 150 &&  alto > 150) {
				txt += $(".medidas").width(ancho*2 + "px") + "</br>";
				txt += $(".medidas").height(alto*2 + "px");
				$(".medidas").html();
				$("#alto").val("");
				$("#ancho").val("");
			} else {
				txt += $(".medidas").width(ancho + "px") + "</br>";
				txt += $(".medidas").height(alto + "px");
				$(".medidas").html();
				$("#alto").val("");
				$("#ancho").val("");
			}
		});


		// para abrir el modal
		$('.modal').modal();
});


// BOTON DE WHATSAPP
    (function () {
        var options = {
            whatsapp: "+(503) 7580-1762", // WhatsApp number
			call_to_action: "¿Tienes dudas? ¡Escríbenos!", // Call to action
			button_color: "#129BF4", // Color of button
            position: "right", // Position may be 'right' or 'left'
        };
        var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();



