define(["menu"], function (Menu) {
    
    let app = new Menu(),
        sinonSpy = sinon.spy();

    describe("Menu Model", function () {
        
        describe("constructor", function () {
            beforeEach(function () {
                spyOn(app, "constructor");
                app.constructor();
            });

            it("should have constructor method", function () {
                expect(app.constructor).toBeDefined();
            });

            it("should call the constructor", function () {
                expect(app.constructor).toHaveBeenCalled();
            });

        });

    });

});
