$(document).ready(function() {
	//focus on the date
	$("name").focus();
	
	//other setup processing can go here
	
	//validation plugin for fields
	$("#reservation_form").validate({
		//rules for each field
		
		//arrival date must be required and in date format
		rules: {
			name: {
				required: true
				
			},
			//nights must be required and in the given range
			email: {
				required: true,
				email: true
	
			},
			//name must be required
			phone: {
				required: true,
				phoneUS: true
			},
			//email required and in the format
			address: {
				required: true,
				
			},
			
			//phone must be required and the US phone 
			city: {
				required: true,
				
			},
			state: {
				required: true,
				
			},
			zip: {
				required: true,
				
			}

		}
		//Messages for night in between 1 and 20
		
				
			
		
	});//end validate
			
			
}); // end ready
