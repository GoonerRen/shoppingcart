$(document).ready(function () {


  $(document).on('click', '.btn.remove', function (event){
    $(this).parent().parent().remove();
  });



  $(document).on('click', '.btn.add', function (event){
    var product = $(this).parent().prev().prev().children("input").val();
    var price = $(this).parent().prev().children("input").val();
    $(this).parent().parent().before("<div class='row shopping'>" +
    "<div class='col-xs-3 product'>"+product+"</div>" +
    "<div class='col-xs-3 price'>$"+price+".00</div>" +
    "<div class ='col-xs-3 quantity'>QTY<input type='number' /></div>" +
      "<div class ='col-xs-1 remove'><button class='btn remove'>remove</button></div>" +
      "<div class='col-xs-2 totalcost'>$--.--</div>" +
    "</div>");
 });























    });
