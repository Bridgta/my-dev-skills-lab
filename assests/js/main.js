$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
}); 


$("ul").on("click", "span", function(event){
    //test again
    $(this).parent().fadeOut(500, function(){
        $(this).remove(); 
    }); 
    event.stopPropagation(); 
});

$("input[type='text']").keypress(function(event){
    //this was annoying to do-revist the logic 
    if(event.which === 13) {
        //grabs new todo text from input
        let todoText = $(this).val();
        $(this).val(""); 
        //create new li and add to ul
        $("ul").append("<li><span></span>  " + todoText + "</li>")
    }
}); 


$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});