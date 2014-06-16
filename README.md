Angular Bootstrap Validation
============================

Directives to apply bootstrap styles to AngularJs form elements. 
You can either apply success, error or both styles. In case of success state, it's only applied to dirty forms.

Directives:
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