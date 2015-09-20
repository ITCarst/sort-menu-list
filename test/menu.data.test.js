define(["menuData"], function (data) {   

    describe("Menu data", function () {
        beforeEach(function () {
            this.data = data;
        });

        it("should be defined", function () {
            expect(this.data).toBeDefined();
        });

        it("should be an Object", function () {
            expect(this.data).toEqual(jasmine.any(Object));
        });

        describe("at index[0]", function () {
            it("should have name 'Fresh Squeezed Orange Juice''", function () {
                expect(this.data[0].name).toBeDefined();
                expect(this.data[0]).toEqual(jasmine.objectContaining({
                    name: "Fresh Squeezed Orange Juice"
                }));
            });
            it("should have a price", function () {
                expect(this.data[0].price).toEqual(6.5);
            });

            it("should have a description", function () {
                expect(this.data[0].descr).toBeDefined();
            });

            it("should have a type defined", function () {
                expect(this.data[0].type).toBeDefined();
            });
        });
    });

});
