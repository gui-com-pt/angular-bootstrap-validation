(function(){
    /**
     * @ngdoc directive
     * @name bsHas
     *
     * @description 
     * Apply both bsHasSuccess and bsHasError to all elements being validated within in.
     * When used, the input field will add "has-success" class to the element if its dirty and valid and "has-error" class to if its dirty and invalid
     * Dont forget to add the class form-control to the element, as boostrap apply style with ".has-success .form-control {}" and ".has-error .form-controls {}"
     */
	angular
		.module('bs-validation')
		.directive('bsHas', ['bsProcessValidator', function(bsProcessValidator) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                if (element[0].nodeName.toLowerCase() === 'form') {
                    $(element[0]).find('.form-group').each(function(i, formGroup) {
                        bsProcessValidator(scope, angular.element(formGroup), 'ng-valid', 'has-success');
                        bsProcessValidator(scope, angular.element(formGroup), 'ng-invalid', 'has-error');
                    });
                } else {
                    bsProcessValidator(scope, element, 'ng-valid', 'has-success');
                    bsProcessValidator(scope, element, 'ng-invalid', 'has-error');
                }

            }
        }
    }]);
})();