/*
    ng-riot
    @author: lucasbrigida <lucasbrigida@gmail.com>
    @description: riot module for angular
 */

angular.module('angular-riot', [])
  .factory('riot', ['$window', '$log',
    function ($window, $log) {

      //Check dependency
      if (!$window.riot) {
        return $log.error('Riot not installed, install package run: "bower install riot -g", More information: https://muut.com/riotjs/download.html');
      }

      return $window.riot;
}])
