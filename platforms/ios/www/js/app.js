// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

  .controller('mainCtrl', function($scope, $cordovaBluetoothSerial){
    $scope.title = 'Arduino Bluetooth Connection';

    $scope.isEnabled = function() {
      $cordovaBluetoothSerial.isEnabled(function() {
        alert("Bluetooth activado");
      }, function() {
        alert("Bluetooth NO activado");
      });
    };

    $scope.getDevicesList = function() {
      $cordovaBluetoothSerial.list(function(data) {
        $scope.devices = data;
      }, function() {
        alert("No se han encontrado dispositivos");
      });
    };

  });
