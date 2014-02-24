    var weightRate = 1;
    var sizeRate = 1;
    var distanceRate = 5;

var Package = {
  shippingRate: function() {
    return ((this.weight * weightRate) + (this.size * sizeRate) + (this.distance * distanceRate));
  }
}



$(document).ready(function() {
  $("form#new-triangle").submit(function(event) {
     $("#price").show(); 
    event.preventDefault();

    var inputtedweight = parseInt($("input#weight").val());
    var inputtedsize = parseInt($("input#size").val());
    var inputteddistance = parseInt($("input#distance").val());

    var newPackage = Object.create(Package);
    newPackage.weight = inputtedweight;
    newPackage.size = inputtedsize;
    newPackage.distance = inputteddistance;

  $("#shippingCost").text(newPackage.shippingRate());
    $(".triangleResult").last().click(function() {
     

      // $("#show-triangle h2").text(newTriangle.type());
      // $(".side1").text(newTriangle.side1);
      // $(".side2").text(newTriangle.side2);
      // $(".side3").text(newTriangle.side3);
      // $(".result").text(newTriangle.type());

      });


    this.reset();

  });
});






// var shippingRate = function(weight, size, distance) {
//   totalCost = 0 ;
//   totalCost += (weight * UnitCosts.uWeight) + (size * UnitCosts.size) + (distance * );
//   alert(totalCost);

// }


