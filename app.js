(function() {
  'use strict';

  var ShoppingList1 = ["Milk", "Donuts", "Cookies", "Choclate", "Peanut Butter", "Pepto Bismol (Choclate flavour)", "Ice-Cream"];

  angular.module('ShoppingListApp', [])
  .controller('ShoppingListController',ShoppingListController);

  ShoppingListController.$inject = ['$scope'];
  function ShoppingListController ($scope) {
    $scope.ShoppingList1 = ShoppingList1;

  };
})();
