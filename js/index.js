console.log("your file has been linked correctly!");

// $("heroButton").hover(
//     function() {
//       $( this ).toggleClass( "hover", "hoverIcon" );
//     }, function() {
//       $( this ).removeClass( "inert", "inertIcon" );
//     }
//   );

//   $(".nothover").mouseover(function(){
//     $(this).toggleClass(".hover");
//   });
// $(".notHover").hover(
//     function () {
//       $(this).toggleClass("hover")
//     }, 
//     function () {
//       $(this).toggleClass("hover")
//     }
//   );

  $(".notHover").hover(
    function () {
      $(this).toggleClass("hover")
    }, 
    function () {
      $(this).toggleClass("hover")
    }
  );

  $(".notHoverCard").hover(
    function () {
      $(this).toggleClass("hoverCard")
    }, 
    function () {
      $(this).toggleClass("hoverCard")
    }
  );
