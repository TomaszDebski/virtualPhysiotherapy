/**
 * 
 */
angular.module('app.directive.multipleBodyAndPlace', ['ui.select','ngSanitize'])
.directive("multipleBodyAndPlaceDirective", function($compile,$filter){
	return {
	    restrict: 'E',
	    transclude : true,
	    scope: {
	    	counter: '=',
	    	pains : '=',
	    	bodyPart: '=',
	    }, 
	    templateUrl: 'resources/js/directives/multipleBodyAndPlaceInInterview/multipleBodyAndPlace.html',
	    link: {
	    	pre : function postLink(scope, element, attr){
	    		var $translate = $filter('translate');
		    	scope.addNextPlaceAndPain = function(){
		    		var result = document.getElementsByClassName('hidden_'+ scope.counter);
		    		console.log('scope.bodyPart ' ,scope.bodyPart)
		    		var wrappedResult = angular.element(result);
		    		var counter = ++scope.counter;
		    		var html = '';
		    		html += '<hr style="margin-top: 0px;margin-bottom: 5px;">'+
		    				'<div class="row vertical-align">'+
		    					'<div class="col-md-2">'+
		    						'<span>' + $translate('interview.kind_of_pain') + ':</span>'+
		    					'</div>'+
		    					'<div class="col-md-3" style="padding-top:10px">'+
		    						'<select id="selectPain_'+counter+'" class="form-control"'+
		    							'style="background: #f6f9fc;min-width: 150px;">';
							    		angular.forEach(scope.pains, function (value, index){
							    			html += '<option value="'+value.id+'">'+value.painName+'</option>';
							    		})
		    		html+= 			'</select>'+
		    					'</div>'+
		    					'<div class="col-md-2">'+
	    							'<span>' + $translate('interview.place_of_pain') + ':</span>'+
	    						'</div>'+
	    						'<div class="col-md-3" style="padding-top:10px">'+
	    							'<select id="selectBodyPart_'+counter+'" class="form-control"'+
		    							'style="background: #f6f9fc;min-width: 150px;">';
							    		angular.forEach(scope.bodyPart, function (value, index){
							    			html += '<option value="'+value.id+'">'+value.bodyName+'</option>';
							    		})
		    		html+= 			'</select>'+
		    					'</div>'+
		    				'</div>'+
		    			'<div class="row " style="padding-top: 15px;">'+
			    			'<div class="col-md-2" style="padding-left: 28px;">'+
			    				'<span >' + $translate('commons.description') +':</span>'+
			    			'</div>'+
			    			'<div class="col-md-8">'+
			    				'<div class="form-group" >'+
			    					'<textarea name="description"'+
			    						'class="form-control" '+
			    						'placeholder="'+$translate('commons.additional_information')+'"'+
			    						'id="pain_description_'+counter+'" '+
			    						'style="height: 61px; '+
			    						'background: #f6f9fc;"'+
			    						'ng-model="interview.description">'+
			    					'</textarea>'+
			    				'</div>'+
			    			'</div>'+
			    		'</div>'+
		    			'<div class="hidden_'+counter+'"></div>'
		    		wrappedResult.after(html)
		    		$compile(wrappedResult)(scope);
		    		console.log('koniec dyrektywy')
		    	}
		    }
	  }
	}
})
