$(document).ready(function () {


  $('body').on('input','.shopping input', function (){
    var totalAmount = 0;


    var productCount = $(this).val();
    var productPrice = parseFloat($(this).parent().prev().text().substring(1,3));
    var subTotal = productPrice * productCount;
    $(this).parent().next().next().html("$"+subTotal+".00");


    $(".total").each(function (index, element) {
      if (/\d/.test($(this).text())) {
        totalAmount += parseFloat($(this).text().substring(1));
      }

    });

    $('#totalprice').html("$"+totalAmount+".00");
  });


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
      "<div class='col-xs-2 total'>$--.--</div>" +
    "</div>");
 });























    });
