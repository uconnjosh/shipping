describe('Package', function() {
  describe("shippingRate", function() {
    it("A 1 pound package, 1 foot, traveling 1 miles", function() {
      var testPackage = Object.create(Package);
      testPackage.weight = 10;
      testPackage.size = 20;
      testPackage.distance = 500;
      testPackage.shippingRate().should.equal(2530);
    });
  });
});
  



