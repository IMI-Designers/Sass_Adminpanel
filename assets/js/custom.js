
//Initialize bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map( function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
  trigger : 'hover'
  });
});

//Datatable
$('#myTable').DataTable({
    dom:
    "<'row'<'col-sm-12'tr>>" +
    // "<'row'<'col-sm-4'i><'col-sm-4 text-center'l><'col-sm-4'p>>" +
    "<'row mt-3'<'col-md-12'<'table_pagination'<'flex_grp_between'i<'flex_grp_align_center'lp>>>>>",
    // "pagingType": "simple",
    language: {
        paginate: {
            next: '<img src="assets/images/color-arrow-right.svg" alt="">',
            previous: '<img src="assets/images/color-arrow-left.svg" alt="">'  
       }
    },
});

$(".sidebar_dropdown .sidebar_item").click(function() {
    $(".sidebar_submenu").slideUp(200);
    if ($(this).parent().hasClass("active")) {
      $(".sidebar_dropdown").removeClass("active");
      $(this).parent().removeClass("active");
    } else {
      $(".sidebar_dropdown").removeClass("active");
      $(this).next(".sidebar_submenu").slideDown(200);
      $(this).parent().addClass("active");
    }
});

// $("#boxscroll").niceScroll({cursorborder:"",cursorcolor:"#0F0",boxzoom:false});
// $("#boxscroll2").niceScroll("#contentscroll2",{cursorcolor:"#F00",cursoropacitymax:0.7,boxzoom:true,touchbehavior:true}); 
