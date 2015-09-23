$(document).ready(function(){
$(".darkness").hover(function ()
{
    //Called when we hover in
    $(this).parent().find(".projecttitle").addClass("show");
    $(this).parent().find(".projecttitle").removeClass("hide");
},
function()
{
    //Called when we hover out
    $(this).parent().find(".projecttitle").removeClass("show");
    $(this).parent().find(".projecttitle").addClass("hide");
});                     

$(".projecttitle").hover(
    function ()
    {
      $(this).addClass("show");
      $(this).removeClass("hide");
    }, 
    function()
    {

    }
);

}); //End of document ready function