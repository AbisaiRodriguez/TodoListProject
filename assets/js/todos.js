//Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
}); 

//Click on X to delete todos
//"event.stopPropagation()"Prevents the event from bubbling up the DOM tree,
// preventing any parent handlers from being notified of 
//the event.
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        //clear the input field
        $(this).val("");
        //create a new li and add it to ul
        $("ul").append("<li><span>X </span>" + todoText + "</li>");
    }
});