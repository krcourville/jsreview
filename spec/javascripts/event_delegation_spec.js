describe("Event Delegation: ", function(){
	beforeEach(function(){
    //
    // Test
		window.Test = function() {
			this.isClicked = false;
      this.$ul = $('<ul id="test-ul"><li>~test~</li></ul>').appendTo('body');
    };
    window.Test.prototype.init = function(){
      this.$ul.on("click","li", {context:this}, function(evt){
        evt.data.context.isClicked = true;
      });      
    };
    window.Test.prototype.cleanup = function(evt){
      this.$ul.empty();
      this.$ul.remove();
    };

	});
	afterEach(function(){
		delete window.Test;
	});

  describe("When clicking a child element", function(){
    var t = null;
    beforeEach(function(){
      t = new window.Test();
      t.init();
    });
    afterEach(function(){
      t.cleanup();
    });

  	it("it should bubble to the parent", function(){
      t.$ul.find('li').click();
      expect(t.isClicked).toBe(true);
  	});
  });
});