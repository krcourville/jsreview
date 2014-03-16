describe("Object Oriented JavaScript:", function(){
  beforeEach(function(){
    /*
      This method of encapsulation is pretty basic
      and uses closures to hide local data 
    **/
    //
    // Person
    window.Person = function(args){
      args = args || {};
      this._firstName = args.firstName;
      this._lastName = args.lastName;
    };
    Person.prototype = {
      constructor: Person, 
      getFirstName : function(){ return _firstName; },
      setFirstName : function(value){ _firstName = value; }
    };
  });
  afterEach(function(){
    delete window.Person;
  });

  describe("Encapsulation:", function(){
    var 
      p = null,
      testData  = {
        firstName :"Joe"
      }
    ;

    beforeEach(function(){
      p = new Person();
    });

    it("a private variable should not be accessible", function() {
      expect(p._firstName).toBeUndefined();
    });
    it("a private variable can be accessed and mutated", function(){
      p.setFirstName(testData.firstName);
      expect(p.getFirstName()).toBe(testData.firstName);
    });
  });
});