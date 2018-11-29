uis.directive('uiSelectNodirty', [function () {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModelCtrl) {
        //set to empty functions
        ngModelCtrl.$setPristine = angular.noop;
        ngModelCtrl.$setDirty = angular.noop;
    } // link
};
}]);
