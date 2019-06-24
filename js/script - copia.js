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
	else
	{
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
      
	
	// EFECTO HOVER EN LAS TARJETAS
	// BORDADOS
    $("#bordados").mouseover(function(){
        $("#bordado").css("display", "none");
		$("#bordadoInfo").css("display", "block");
	});
		
	$("#bordados").mouseout(function(){
		$("#bordado").css("display", "block");
		$("#bordadoInfo").css("display", "none");
    });
	
	// CONFECCIONES
    $("#confecciones").mouseover(function(){
        $("#confeccion").css("display", "none");
		$("#confeccionInfo").css("display", "block");
	});
		
	$("#confecciones").mouseout(function(){
		$("#confeccion").css("display", "block");
		$("#confeccionInfo").css("display", "none");
	});

	// SUBLIMACIONES
	$("#sublimaciones").mouseover(function(){
        $("#sublimacion").css("display", "none");
		$("#sublimacionInfo").css("display", "block");
	});
		
	$("#sublimaciones").mouseout(function(){
		$("#sublimacion").css("display", "block");
		$("#sublimacionInfo").css("display", "none");
	});

	// SERIGRAFIA
	$("#serigrafias").mouseover(function(){
        $("#serigrafia").css("display", "none");
		$("#serigrafiaInfo").css("display", "block");
	});
		
	$("#serigrafias").mouseout(function(){
		$("#serigrafia").css("display", "block");
		$("#serigrafiaInfo").css("display", "none");
	});

	// IMPRESION DIGITAL
	$("#digitales").mouseover(function(){
        $("#digital").css("display", "none");
		$("#digitalInfo").css("display", "block");
	});
		
	$("#digitales").mouseout(function(){
		$("#digital").css("display", "block");
		$("#digitalInfo").css("display", "none");
	});

	// PROMOCIONALES
	$("#promocionales").mouseover(function(){
        $("#promocional").css("display", "none");
		$("#promocionalInfo").css("display", "block");
	});
		
	$("#promocionales").mouseout(function(){
		$("#promocional").css("display", "block");
		$("#promocionalInfo").css("display", "none");
	});

	// IMPRESION LASER
	$("#impresiones").mouseover(function(){
        $("#impresion").css("display", "none");
		$("#impresionInfo").css("display", "block");
	});
		
	$("#impresiones").mouseout(function(){
		$("#impresion").css("display", "block");
		$("#impresionInfo").css("display", "none");
	});

	// ROTULACIONES
	$("#rotulaciones").mouseover(function(){
        $("#rotulacion").css("display", "none");
		$("#rotulacionInfo").css("display", "block");
	});
		
	$("#rotulaciones").mouseout(function(){
		$("#rotulacion").css("display", "block");
		$("#rotulacionInfo").css("display", "none");
	});

	// LETRAS
	$("#letras").mouseover(function(){
        $("#letra").css("display", "none");
		$("#letraInfo").css("display", "block");
	});
		
	$("#letras").mouseout(function(){
		$("#letra").css("display", "block");
		$("#letraInfo").css("display", "none");
	});

	// PRODUCTOS
	$("#productos").mouseover(function(){
        $("#producto").css("display", "none");
		$("#productoInfo").css("display", "block");
	});
		
	$("#productos").mouseout(function(){
		$("#producto").css("display", "block");
		$("#productoInfo").css("display", "none");
	});

	// INSTALACIONES
	$("#instalaciones").mouseover(function(){
        $("#instalacion").css("display", "none");
		$("#instalacionInfo").css("display", "block");
	});
		
	$("#instalaciones").mouseout(function(){
		$("#instalacion").css("display", "block");
		$("#instalacionInfo").css("display", "none");
	});
	// FIN DE EFECTO DE TARJETAS

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

});