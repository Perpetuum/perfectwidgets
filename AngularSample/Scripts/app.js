var app = angular.module( "Demo", [] );

app.controller(
    "AppController",
    function( $scope, $interpolate ) {
        $scope.model = {
	    	Slider1Value: 10,
	    	Slider2Value: 20,
        };
        $scope.startAnimation = function() {
        	$scope.stopAnimation();
        	$scope.animationTimeoutId = setTimeout($scope.animate, 2000);
    	};
    	$scope.stopAnimation = function() {
			clearTimeout($scope.animationTimeoutId);
    	};
    	$scope.animationTimeoutId = 0;
    	$scope.animate = function() {
    		$scope.model.Slider1Value = Math.floor((Math.random() * 40) + 1);
    		$scope.model.Slider2Value = Math.floor((Math.random() * 40) + 1);
    		$scope.$apply();
    		$scope.animationTimeoutId = setTimeout($scope.animate, 2000);
    	};
    	$scope.startAnimation();
    });

// Binding helper
function WidgetBindingHelper(rootId, widget){
	var _scope = angular.element(document.getElementById(rootId)).scope();
	var _widget = widget;

	this.BindSliderValue = function(sliderName, getFunction, setFunction){
		var slider = _widget.getByName(sliderName);
		var disableUpdates = false;	
		// widget -> model
		slider.setValue(getFunction(_scope), false);
		slider.addValueChangedHandler(function(s, e){	
			if(disableUpdates)return;
			applySliderChanges(setFunction, slider); 	
		});
		// model -> widget
		_scope.$watch(
			function( $scope ) {
					return getFunction($scope);
            },
            function( newValue ) {
				disableUpdates = true;
					slider.setValue(newValue);
				disableUpdates = false;
            }
		);
		
	}
	this.BindReadonlyValue = function(name, property, getFunction, setFunction){
		var object = _widget.getByName(name);
		// model -> widget
		_scope.$watch(
			function( $scope ) {
					return getFunction($scope);
            },
            function( newValue ) {
				setElementProperty(object, property, getFunction(_scope));
            }
		);
		setElementProperty(object, property, getFunction(_scope));
		_scope.$apply();
	}
	
	function setElementProperty(object, property, value){
		object["set"+property].apply(object, [value]);
		object.setNeedRepaint(true); 
		object.refreshElement();
	}

	function getElementProperty(object, property){
		return object["get"+property].apply(object);
	}

	function applySliderChanges(setFunction, slider){
		setFunction(_scope, slider.getValue()); 
		_scope.$apply();
	}
}

window.onload = function () {
    //widget model is stored in Scripts/widgetJson.js and is avaliable through WidgetJson.Widget1
    //creating widget
    widget = new PerfectWidgets.Widget("root", WidgetJson.Widget1);
    //setting binding
	var binder = new WidgetBindingHelper('root', widget);
	
	binder.BindSliderValue("Slider1", function(scope){ return scope.model.Slider1Value }, function(scope, value){ scope.model.Slider1Value = value });
	binder.BindSliderValue("Slider2", function(scope){ return scope.model.Slider2Value }, function(scope, value){ scope.model.Slider2Value = value });
	document.getElementById("nowYear").innerText = (new Date()).getFullYear().toString();
	var heightEqualizers = document.getElementsByClassName('heightEqualizer');
	for (var i = 0; i < heightEqualizers.length; i++) {
	    var node = heightEqualizers[i];
	    node.style.height = node.offsetHeight + 'px';
	};
}