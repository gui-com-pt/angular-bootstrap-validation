(function(){

    /**
     * @ngdoc directive
     * @name bsHasSuccess
     *
     * @description 
     * When used, the input field will add "has-success" class to the element if its dirty and valid
     * Dont forget to add the class form-control to the element, as boostrap apply style with ".has-success .form-control {}"
     */
    angular
        .module('bs-validation')
        .directive('bsHasSuccess', ['bsProcessValidator', function(bsProcessValidator) {
            return {
                restrict: 'A',
                link: function(scope, element) {
                    if (element[0].nodeName.toLowerCase() === 'form') {
                        element.find('.form-group').each(function(i, formGroup) {
                            bsProcessValidator(scope, angular.element(formGroup), 'ng-valid', 'has-success');
                        });
                    } else {
                        bsProcessValidator(scope, element, 'ng-valid', 'has-success');
                    }

                }
            }
         }]);
})();