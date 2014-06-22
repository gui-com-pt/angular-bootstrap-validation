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
angular.module('bs-validation', []).
        factory('bsProcessValidator', ['$timeout', function($timeout) {
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
        }]).
        directive('bsHasSuccess', ['bsProcessValidator', function(bsProcessValidator) {
            return {
                restrict: 'A',
                link: function(scope, element) {
                    if (element.get(0).nodeName.toLowerCase() === 'form') {
                        element.find('.form-group').each(function(i, formGroup) {
                            bsProcessValidator(scope, angular.element(formGroup), 'ng-valid', 'has-success');
                        });
                    } else {
                        bsProcessValidator(scope, element, 'ng-valid', 'has-success');
                    }

                }
            }
        }]).
        directive('bsHasError', ['bsProcessValidator', function(bsProcessValidator) {
            return {
                restrict: 'A',
                link: function(scope, element) {
                    if (element.get(0).nodeName.toLowerCase() === 'form') {
                        element.find('.form-group').each(function(i, formGroup) {
                            bsProcessValidator(scope, angular.element(formGroup), 'ng-invalid', 'has-error');
                        });
                    } else {
                        bsProcessValidator(scope, element, 'ng-invalid', 'has-error');
                    }

                }
            }
        }]).
        directive('bsHas', ['bsProcessValidator', function(bsProcessValidator) {
            return {
                restrict: 'A',
                link: function(scope, element) {
                    if (element.get(0).nodeName.toLowerCase() === 'form') {
                        element.find('.form-group').each(function(i, formGroup) {
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