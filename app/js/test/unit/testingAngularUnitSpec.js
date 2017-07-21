describe('Testing AngularJS Test Suite', function(){
  describe('Testing AngularJS Controller', function(){

    it('Should initialize the title in the scope', function(){
      module('testingAngular');

      var scope = {};
      var ctrl;

      inject(function($controller){
        ctrl = $controller('testingAngularController', {$scope:scope});
      });

      expect(scope.title).toBeDefined();
      expect(scope.title).toBe("Testing Angular JS applications");

    });

  });
});
