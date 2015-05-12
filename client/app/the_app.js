//configuration
var app = angular.module("myWorld", ['ngRoute']);
app.run(["AuthSvc", "PeopleSvc", "ThingsSvc", function(AuthSvc, PeopleSvc, ThingsSvc){
  AuthSvc.setUser();
}]);

// services


//directives
