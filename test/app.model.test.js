define(["menuModel"],function (MenuModel) {
    
    describe("Menu Model", function () {
        
        beforeEach(function () {
           this.menu = new MenuModel();
        });

        describe("getData", function () {
        
            it("should have getData method", function () {
                expect(this.menu.getData).toBeDefined();
            });

            it("should have been called", function () {
                spyOn(this.menu, "getData");   
                this.menu.getData();
                expect(this.menu.getData).toHaveBeenCalled();
            });

            it("should return on object of data", function () {
               expect(this.menu.getData()).toEqual(jasmine.any(Object));
            });
            
            it("should contain title in object of data", function () {
                expect(this.menu.getData()[0]).toBeDefined();
                expect(this.menu.getData()[0]).toEqual(jasmine.objectContaining({
                    name: "Fresh Squeezed Orange Juice"    
                }));
            });
        });
    });
});
