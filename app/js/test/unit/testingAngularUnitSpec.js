describe('Testing AngularJS Test Suite', function(){

  beforeEach(module('testingAngular'));
  describe('Testing AngularJS Controller', function(){
    var scope, ctrl;

    beforeEach(inject(function($controller, $rootScope){
      scope = $rootScope.$new();
      ctrl = $controller('testingAngularController', {$scope:scope});
    }));

    it('Should initialize the title in the scope', function(){
      expect(scope.title).toBeDefined();
      expect(scope.title).toBe("Testing Angular JS applications");
    });

    it('Should add 2 destinations to the destinations list', function(){
      expect(scope.destinations).toBeDefined();
      expect(scope.destinations.length).toBe(0);

      scope.newDestionation = {
        city: "London",
        country: "England"
      };

      scope.addDestination();

      expect(scope.destinations.length).toBe(1);
      expect(scope.destinations[0].city).toBe("London");
      expect(scope.destinations[0].country).toBe("England");

      scope.newDestionation = {
        city: "Frankfurt",
        country: "Germany"
      }
      scope.addDestination();

      expect(scope.destinations.length).toBe(2);
      expect(scope.destinations[1].city).toBe("Frankfurt");
      expect(scope.destinations[1].country).toBe("Germany");
      expect(scope.destinations[0].city).toBe("London");
      expect(scope.destinations[0].country).toBe("England");
    });

    it('should remove a destination from the destinations list', function(){
      scope.destinations = [
        {
          city: "Paris",
          country: "France"
        },
        {
          city: "Warsaw",
          country: "Poland"
        }
      ];
      expect(scope.destinations.length).toBe(2);
      scope.removeDestination(0);

      expect(scope.destinations.length).toBe(1);
      expect(scope.destinations[0].city).toBe("Warsaw");
      expect(scope.destinations[0].country).toBe("Poland");
    });

  });
});
