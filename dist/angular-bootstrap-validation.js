(function(){    
    /**
     * @ngdoc module
     * @name Bootstrap Validation
     *
     * @description
     * Directives to apply bootstrap form classes on angular models
     *
     * You can either apply it to .form-group or to parent form
     *
     * This module was mainly written by SO users, see here: http://stackoverflow.com/questions/14348384/reconcile-angular-js-and-bootstrap-form-validation-styling
     */
    angular
        .module('bs-validation', []);
})();

(function(){
	/**
	 * @ngdoc directive
	 * @name bsHasError
	 *
	 * @description 
	 * When used, the input field will add "has-error" class to the element if its dirty and invalid
	 * Dont forget to add the class form-control to the element, as boostrap apply style with ".has-error .form-control {}"
	 */
	angular
		.module('bs-validation')
		.directive('bsHasError', ['bsProcessValidator', function(bsProcessValidator) {
	        return {
	            restrict: 'A',
	            link: function(scope, element) {
	                if (element[0].nodeName.toLowerCase() === 'form') {
	                    element.find('.form-group').each(function(i, formGroup) {
	                        bsProcessValidator(scope, angular.element(formGroup), 'ng-invalid', 'has-error');
	                    });
	                } else {
	                    bsProcessValidator(scope, element, 'ng-invalid', 'has-error');
	                }
	            }
	        }
    	}]);
})();
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
(function(){
	/**
	 * @ngdoc service
	 *
	 * @name bsProcessValidator
	 * @descripion
	 * This service is applied to directives in link function to watch for changes
	 * The ngClass is the AngularJS class to be matched. The validation is done by angular, we just check the classes applied
	 * The bsClass is the bootstrap class applied to the element in case it's dirty and has the ngClass passed
	 */
	angular
		.module('bs-validation')
		.factory('bsProcessValidator', ['$timeout', function($timeout) {
	        return function(scope, element, ngClass, bsClass) {
	            $timeout(function() {
	                var input = element.find('input');
	                if (!input.length) {
	                    input = element.find('select');
	                }
	                if (!input.length) {
	                    input = element.find('textarea');
	                }
	                if (input.length) {
	                    scope.$watch(function() {
	                        return input.hasClass(ngClass) && input.hasClass('ng-dirty');
	                    }, function(isValid) {
	                        element.toggleClass(bsClass, isValid);
	                    });
	                }
	            });
	        }
   	 }]);

})();
(function(){    
    /**
     * @ngdoc module
     * @name Bootstrap Validation
     *
     * @description
     * Directives to apply bootstrap form classes on angular models
     *
     * You can either apply it to .form-group or to parent form
     *
     * This module was mainly written by SO users, see here: http://stackoverflow.com/questions/14348384/reconcile-angular-js-and-bootstrap-form-validation-styling
     */
    angular
        .module('bs-validation', []);
})();

(function(){
	/**
	 * @ngdoc directive
	 * @name bsHasError
	 *
	 * @description 
	 * When used, the input field will add "has-error" class to the element if its dirty and invalid
	 * Dont forget to add the class form-control to the element, as boostrap apply style with ".has-error .form-control {}"
	 */
	angular
		.module('bs-validation')
		.directive('bsHasError', ['bsProcessValidator', function(bsProcessValidator) {
	        return {
	            restrict: 'A',
	            link: function(scope, element) {
	                if (element[0].nodeName.toLowerCase() === 'form') {
	                    element.find('.form-group').each(function(i, formGroup) {
	                        bsProcessValidator(scope, angular.element(formGroup), 'ng-invalid', 'has-error');
	                    });
	                } else {
	                    bsProcessValidator(scope, element, 'ng-invalid', 'has-error');
	                }
	            }
	        }
    	}]);
})();
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
(function(){
	/**
	 * @ngdoc service
	 *
	 * @name bsProcessValidator
	 * @descripion
	 * This service is applied to directives in link function to watch for changes
	 * The ngClass is the AngularJS class to be matched. The validation is done by angular, we just check the classes applied
	 * The bsClass is the bootstrap class applied to the element in case it's dirty and has the ngClass passed
	 */
	angular
		.module('bs-validation')
		.factory('bsProcessValidator', ['$timeout', function($timeout) {
	        return function(scope, element, ngClass, bsClass) {
	            $timeout(function() {
	                var input = element.find('input');
	                if (!input.length) {
	                    input = element.find('select');
	                }
	                if (!input.length) {
	                    input = element.find('textarea');
	                }
	                if (input.length) {
	                    scope.$watch(function() {
	                        return input.hasClass(ngClass) && input.hasClass('ng-dirty');
	                    }, function(isValid) {
	                        element.toggleClass(bsClass, isValid);
	                    });
	                }
	            });
	        }
   	 }]);

})();