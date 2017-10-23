$(document).ready(function () {

	$("#list-items").html(localStorage.getItem("listitems"));
    $('.add-items').submit(function(event){
    	event.preventDefault();
    	var item = $("#todo-list-item").val(); 

    	if(item){
    		  $("#list-items").append("<li><input type='checkbox' class='check'/>"+ item+"<a class='remove'>x</a><hr></li>");
    		  localStorage.setItem("listitems", $("#list-items").html());     		 
    		   $("#todo-list-item").val(""); 
    	}

});


    	$(document).on("change",".check",function(){
    		if($(this).attr("checked")){
    			$(this).removeAttr("checked");
    		}
    		else{
    			$(this).attr("checked","checked");
    		}

    		$(this).parent().toggleClass("completed");
    		localStorage.setItem("listitems", $("#list-items").html());
    	});

    	$(document).on("click",".remove",function(){
    		
    		$(this).parent().remove();
    		localStorage.setItem("listitems", $("#list-items").html());     	
    	});
    

});
