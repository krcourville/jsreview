describe("Object Oriented JavaScript:", function(){
  beforeEach(function(){
    /*
      This method of encapsulation is pretty basic
      and uses closures to hide local data 
    **/
    //
    // Person
    window.Person = function(){};
    Person.prototype = {
      constructor: Person, 
      getFirstName : function(){ return _firstName; },
      setFirstName : function(value){ _firstName = value; },
      getJobDescription : function(){  }
    };
    //
    // Firefighter
    window.Firefighter = function(){
      this._axeswung = false;
    };
    Firefighter.prototype = Object.create( Person.prototype);    
    Firefighter.prototype.swingAxe = function(){
        this._axeswung = true;
    };
    Firefighter.prototype.isAxeSwung = function(){ 
      return this._axeswung; 
    };
    Firefighter.prototype.getJobDescription  = function(){
      return "Rescues kittens in distress.";
    };
    //
    // PoliceOfficer
    window.PoliceOfficer = function(){
      this._ticketwritten = false;
    };
    PoliceOfficer.prototype = Object.create( Person.prototype );
    PoliceOfficer.prototype.writeTicket = function(){
        this._ticketwritten = true;
    };
    PoliceOfficer.prototype.isTicketWritten = function(){ 
        return this._ticketwritten; 
    };
    PoliceOfficer.prototype.getJobDescription = function(){
        return "Enforces the law";
    };    

  });
  afterEach(function(){
    delete window.Person;
    delete window.Firefighter;
    delete window.PoliceOfficer;
  });

  describe("Instantiation and Inheritance:", function(){
    var 
      p = null,
      fp = null,
      po = null
    ;
    beforeEach(function(){
      p = new Person();
      fp = new Firefighter();
      po = new PoliceOfficer();
    });
    it("Person should be an instance of Person", function(){
      expect(p instanceof Person).toBe(true);
    });
    it("Firefighter should be an instance of Person", function(){
      expect(fp instanceof Person).toBe(true);
    });
    it("Firefighter should be an instance of Firefighter", function(){
      expect(fp instanceof Firefighter).toBe(true);
    });
    it("Firefighter can have its own extensions", function(){
      fp.swingAxe();
      expect(fp.isAxeSwung()).toBe(true);
    });
    it("PoliceOfficer can have it own extensions", function(){
      po.writeTicket();
      expect(po.isTicketWritten()).toBe(true);
    });
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

  describe("Polymorphism:", function(){
    var 
      p = null,
      ff = null,
      po = null
    ;
    beforeEach(function(){
      p = new Person();
      ff = new Firefighter();
      po = new PoliceOfficer();
    });

    it("Parent class getJobDescription should not be defined", function(){
      expect(p.getJobDescription()).toBeUndefined();
    });
    it("Child class FireFighter.getJobDescription should be defined", function(){
      expect(ff.getJobDescription()).toBeDefined();
    });
    it("Parent class PoliceOfficer.getJobDescription should be defined", function(){
      expect(po.getJobDescription()).toBeDefined();
    });
  });
});