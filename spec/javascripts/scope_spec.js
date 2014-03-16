describe("JavaScript Scope: ", function() {

	describe("Given a variable declared without var", function(){
		beforeEach(function(){
			global1 = "value";
			MyClass = function(){
				global2 = "value";
			};
		});
		afterEach(function(){
			delete global1;
			delete MyClass;
		});

		it("outside of a function, it should be globally scoped", function(){
			expect(global1).toBeDefined();
		});

		it("inside of a function, it should be globally scoped", function(){
			var c = new MyClass();
			expect(global2).toBeDefined();
		});
	});

	describe("Given a variable declared with var", function(){
		beforeEach(function(){
			MyClass = function(){
				var functionScoped = "value";
			};
		});
		afterEach(function(){
			delete MyClass;
		});

		it("outside of a function, it should be globally scoped", function(){
			expect(window["MyClass"]).toBeDefined();
		});
		
		it("inside of a function, it should be function scoped", function(){
			var c = new MyClass();
			expect(c["functionScoped"]).toBeUndefined();
		});
	});

});