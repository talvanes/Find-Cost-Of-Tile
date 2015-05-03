$(document).ready(function(){
	/*
		Fire event OnInput on the form
		to calculate the result
		*/
	$("#costPerTileForm").on("input", function(){
		// Get Width and Height
		var width = parseFloat($('#width').val());
		var height = parseFloat($('#height').val());
		// Get cost per square meter of tile
		var costPerSqMeter = parseFloat($('#cost').val());

		// Let's perform calculation
		var totalCost = costPerSqMeter * (width * height);
		if(!isNaN(totalCost)){
			$('#total').val('$ ' + totalCost.toFixed(2));
		} else {
			$('#total').val('$ 0.00');
		}

	});
});
