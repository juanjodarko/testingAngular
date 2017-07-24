var app = angular.module('testingAngular', []);

app.controller('testingAngularController', function($rootScope, $scope){
  $scope.title = "Testing Angular JS applications";

  $scope.destinations = [];
  $scope.newDestionation = {
      city: undefined,
      country: undefined
  };

  $scope.addDestination = function(){
    $scope.destinations.push(
      {
        city:$scope.newDestionation.city,
        country:$scope.newDestionation.country
      }
    );
  }

  $scope.removeDestination = function(index){
    $scope.destinations.splice(index, 1);
  }
});
