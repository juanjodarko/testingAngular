var app = angular.module('testingAngular', []);

app.controller('testingAngularController', function($rootScope, $scope, $http){
  $scope.title = "Testing Angular JS applications";
  $scope.apiKey = "a5c28430300d2ea176ae989b81d91b88";

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

  $scope.getWeather = function(destination){
    $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + destination.city + "&appid=" + $scope.apiKey)
      .then(function successCallback(response){
        if(response.data.weather){
          destination.weather = {};
          destination.weather.main = response.data.weather[0].main;
          destination.weather.temp = $scope.convertKelvinToCelsius(response.data.main.temp);
        }
      }, function errorCallback(error){
        console.log(error);
      });
  }

  $scope.convertKelvinToCelsius = function(temp){
    return Math.round(temp-273);
  }
});
