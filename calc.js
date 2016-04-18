$(document).ready(function(){
	
	var num = $('.num');
	var calculator = $('#calculator');
	var equation=0;
	var reset=true;
	num.click(function(){
		var value = $(this).val();
		if(value=="AC"){
			equation=0;
			reset=true;
		}
		else if (value=="="){
			equation=eval(equation);
			reset=true;
		}
		else{
		reset?equation=value:equation+=value;
		reset=false;
	    }
		calculator.val(equation);
	});


});