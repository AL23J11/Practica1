$(document).ready(function(e)
{
//alert("listo")
		document.addEventListener("deviceready",function(){
			$(' .btn').tap(function(){
				var boton=(($(this).attr('class')).split(' '))[1];
				switch (btn)
					{
						case "b1":
						navigator.notification.beep(1);
						break;
						case "b2":
						navigator.notification.beep(2);
						break;
						case "b3":
						navigator.notification.beep(5);
						break;
						case "v1":
						navigator.notification.vibrate(500);
						break;
						case "v2":
						navigator.notification.vibrate(500);
						navigator.notification.vibrate(500);
						break;
					}
			
			$('#derecha').swiperight(function(){
				navigator.notification.alert("Deslizo ala derecha",function(){}"practica1","Aceptar");
			}
			);
		},false);
});
});