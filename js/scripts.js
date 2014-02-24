var Triangle = {
  type: function() {
  var sides = [];
  sides.push(this.side1);
  sides.push(this.side2);
  sides.push(this.side3);
  sides.sort(function(a,b){return a-b});
  
  alert(sides);


    if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
      return 'equilateral';
    } else if ((sides[0] + sides[1]) < (sides[2])) {
      return("that is not a triangle");
    } else if ((this.side1 === this.side3) || (this.side1 === this.side2) || (this.side2 === this.side3)) {
      return 'isosceles';
    } else if ((this.side1 !== this.side3) && (this.side1 !== this.side2) && (this.side2 !== this.side3)) {
      return 'scalene';
    }
  }
};




$(document).ready(function() {
  $("form#new-triangle").submit(function(event) {
    event.preventDefault();

    var inputtedside1 = parseInt($("input#side1").val());
    var inputtedside2 = parseInt($("input#side2").val());
    var inputtedside3 = parseInt($("input#side3").val());

    var newTriangle = Object.create(Triangle);
    newTriangle.side1 = inputtedside1;
    newTriangle.side2 = inputtedside2;
    newTriangle.side3 = inputtedside3;

  $("ul#triangleResult").append("<li><span class='show-triangle'>" + newTriangle.type() + "</span></li>");
    $(".triangleResult").last().click(function() {
      $("#show-triangle").show(); 

      // $("#show-triangle h2").text(newTriangle.type());
      // $(".side1").text(newTriangle.side1);
      // $(".side2").text(newTriangle.side2);
      // $(".side3").text(newTriangle.side3);
      // $(".result").text(newTriangle.type());

      });


    this.reset();

  });
});

