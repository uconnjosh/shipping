describe('Triangle', function() {
  describe("triangleType", function() {
    it("if all sides are the same length, it is an equilateral triangle", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 4;
      testTriangle.side2 = 4;
      testTriangle.side3 = 4;
      testTriangle.type().should.equal('equilateral');
    });
});
  describe("triangleType", function() {
    it("if exactly two sides of the triangle are equal, it is an isosceles", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 5;
      testTriangle.side2 = 4;
      testTriangle.side3 = 4;
      testTriangle.type().should.equal('isosceles');
    });
  });
  describe("triangleType", function() {
    it("if none of the sides of the triangle are equal, it is a scalene", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 2;
      testTriangle.side2 = 3;
      testTriangle.side3 = 4;
      testTriangle.type().should.equal('scalene');
    });
  });

});
  



