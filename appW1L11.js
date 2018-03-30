(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = "Yaakov";
    $scope.stateOfBeing = "only";
    $scope.sayMessage = function () {
      return "Yaakov likes to eat healthy";
    };

    $scope.feedYaakov = function () {
      if ($scope.stateOfBeing=="only")
        $scope.stateOfBeing = "full";
      else
        $scope.stateOfBeing = "only";
    }
  }
})();
