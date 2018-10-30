Angular Bootstrap Validation
============================

Directives to apply bootstrap styles to AngularJs form elements. 
You can either apply success, error or both styles. In case of success state, it's only applied to dirty forms.

Check the demo: [http://gui-acab.github.io/angular-bootstrap-validation/](http://guilhermegeek.github.io/angular-bootstrap-validation/)

#### Instalation

jQuery 1.6 or newer is required

With Bower

	bower install angular-bootstrap-validation


For a manual installation copy the angular-boostrap-validation.js inside dist folder.

#### Quick Start

Include the module bs-validation

	angular.module('app', ['bs-validation']);

You've three directives:

 * bs-has - Apply both success and error directives
 * bs-has-success - Add 'has-success' class
 * bs-has-error - Add 'has-error' class

 You can use directives at the form element or in .form-group elements.

````html
<form novalidate bs-has> <!-- Apply both success and error styles to name and address -->
	<div class="form-group">
		<label class="control-label">Name</label>
		<input type="text" class="form-control" required ng-model="name" />
	</div>
	<div class="form-group">
		<label class="control-label">Address</label>
		<input type="text" class="form-control" required ng-model="address" />
	</div>
</form>

<form novalidate>
	<div class="form-group" bs-has-success> <!-- Apply sucess styles to name only -->
		<label class="control-label">Name</label>
		<input type="text" class="form-control" required ng-model="name" />
	</div>
	<div class="form-group" bs-has> <!-- Apply sucess and error styles to address only -->
		<label class="control-label">Address</label>
		<input type="text" class="form-control" required ng-model="address" />
	</div>
</form>
````

#### Authors

I've only modified a little bit the code and put it on bower. The REAL authors are:

* [fiznool](http://stackoverflow.com/users/1171775/fiznool)
* [farincz](http://stackoverflow.com/users/1838984/farincz)

The SO question where they've published the code: [here](http://stackoverflow.com/questions/17326796/how-to-iterate-through-angular-scope-variables-with-a-loop)
