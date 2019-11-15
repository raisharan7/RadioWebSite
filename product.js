$(document).ready(function() {
			$.getJSON("product.json", function(data) {
				$.each(data, function() {
					$.each(this, function(key, value){
						$("main").append(
							"<p>"+"<b>Name: </b>" + value.name + "</p>" +
							"<p>" +"<b>Quantity: </b>" + value.quantity + "</p>"+
							"<p>" +"<b>Stock: </b>"+ value.stock + "</p>" +
							"<p>" +"<b>Size: </b>"+ value.size + "</p>" +
							"<p>" +"<b>Color: </b>"+ value.color + "</p></br>"
						);
					});
				}); 
			});
});