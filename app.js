(function (){
  var app = angular.module('wordnetApp', []);

  app.controller('WordnetAppController', function(){
    this.info = projectInfo;
  });
  var projectInfo = {
    courseName: 'Informatyka w gospodarce',
    projectName: 'Aplikacja do przegladania slowosieci',
  }
})();
