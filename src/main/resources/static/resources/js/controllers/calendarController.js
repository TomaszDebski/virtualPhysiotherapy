/**
 * 
 */

angular.module('app.controller.calendar', [])
.controller('CalendarCtrl', function($scope,$rootScope, $compile, $timeout, uiCalendarConfig,$http,
		$window,$uibModal,$log,visitService,$filter) {
	
	var $translate = $filter('translate');
	$scope.addVisit = function(){
		$scope.showModalVisit();
	}
	
	$scope.addHoliday = function(){
		$scope.showModalHoliday();
	}

	////////////////////////modals//////////////////////////////////
	
	/////////////////////////////////addVisit//////////////////
	$scope.showModalVisit = function(){
		$uibModal.open({
              templateUrl: 'addVisitModal.html',
              controller: 'addVisitInCalendarModelController as ctrl', 
              windowClass: 'app-modal-window',
              resolve :{
            	  patients : function(allPatientsForPhysiotherapistService,$rootScope){
            		  return allPatientsForPhysiotherapistService.getPatients()
            		  .then(function(result){
            	    	return result;
            	    })
            	  },
            	  services : function(serviceService){
            	  		return serviceService.query(function(data) {
            	  			return data;
            	  		});
            	  	},
            	  myParam : function(){
            		  return 'myParam'
            	  }
              }
         })
        .result.then(
            function () {
            	swal({
      			  title: $translate('addVisit.correct_add_visit'),
      			  type: "success",
      			  showCancelButton: false,
      			  confirmButtonClass: "btn-primary",
      			  confirmButtonText: $translate('commons.close'),
      			  closeOnConfirm: true
      			})
                $('#calendar').fullCalendar('refetchEvents')
            	
            }, 
            function () {
//                alert("Cancel");
            }
        );
    };
    
///////////////////////////////////////////////////////
///////////////////addHoliday/////////////////////////
    $scope.showModalHoliday = function(){
		$uibModal.open({
              templateUrl: 'addHolidayModal.html',
              controller: 'addHolidayInCalendarModelController as ctrl', 
              windowClass: 'app-modal-window',
              resolve :{
              }
         })
        .result.then(
            function () {
                $('#calendar').fullCalendar('refetchEvents')
            	
            }, 
            function () {
            }
        );
    };
///////////////////////////////////////////////////////
/////////////////////////////////////////////////////
    
    ////////////////////////////FullCalendar/////////////////////
	
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        
        $scope.changeTo = 'Hungarian';
        $scope.eventSource = {
        };
        /* event source that contains custom events on the scope */
        $scope.events =  {
                 url: '/visit/forScheduler', // use the `url` property
                 data : {
                 	id : function(){
                 		return $window.sessionStorage.id;
                 	}
                 },
                 	 error: function() {
                          alert('There was an error while fetching events.');
                      }
             };
        /* event source that calls a function on every view switch */
        $scope.eventsF = function (start, end, timezone, callback) {
          var s = new Date(start).getTime() / 1000;
          var e = new Date(end).getTime() / 1000;
          var m = new Date(start).getMonth();
          var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
          callback(events);
        };

        $scope.calEventsExt = {
           color: '#f00',
           textColor: 'yellow',
           events: [ 
              {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
              {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
              {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
            ]
        
        };
        /* alert on eventClick */
        $scope.alertOnEventClick = function( date, jsEvent, view){
            $scope.alertMessage = (date.title + ' was clicked ');
        };
        /* alert on Drop */
         $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
        	 $log.info("alertOnDrop", event.start.format());
        	 visitService.update($scope.Reader,function(){
					refreshFunction();
});
        };
        /* alert on Resize */
        $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
           $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
        };
        /* add and removes an event source of choice */
        $scope.addRemoveEventSource = function(sources,source) {
          var canAdd = 0;
          angular.forEach(sources,function(value, key){
            if(sources[key] === source){
              sources.splice(key,1);
              canAdd = 1;
            }
          });
          if(canAdd === 0){
            sources.push(source);
          }
        };
        /* add custom event*/
        $scope.addEvent = function() {
          $scope.events.push({
            title: 'Open Sesame',
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            className: ['openSesame']
          });
        };
        /* remove event */
        $scope.remove = function(index) {
          $scope.events.splice(index,1);
        };
        /* Change View */
        $scope.changeView = function(view,calendar) {
          uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
        };
        /* Change View */
        $scope.renderCalender = function(calendar) {
          if(uiCalendarConfig.calendars[calendar]){
            uiCalendarConfig.calendars[calendar].fullCalendar('render');
          }
        };
         /* Render Tooltip */
        $scope.eventRender = function( event, element, view ) { 
            element.attr({'tooltip': event.title,
                         'tooltip-append-to-body': true});
            $compile(element)($scope);
        };
        /* config object */
        $scope.uiConfig = {
          calendar:{
            height: 900,
            editable: true,
            locale: 'pl',
//            slotLabelFormat:"HH:mm",
            weekMode:'liquid',
            timeFormat:'HH:mm',
            dayClick: function(event) {
            	$('#calendar').fullCalendar( 'changeView', 'agendaDay' );
            	$('#calendar').fullCalendar('gotoDate', event._d);
            	},
// 	           defaultView: 'agendaWeek',
            header: {
 	            left: 'prev,next today prevYear',
 	            center: 'title',
 	            right: 'agendaDay,agendaWeek,nextYear month'
 	        },
            eventClick: $scope.alertOnEventClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize,
            eventRender: $scope.eventRender,
//            minTime : "07:00:00",
//            maxTime : "20:00:00",
          
          }
        };

        $scope.changeLang = function() {
          if($scope.changeTo === 'Hungarian'){
            $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
            $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
            $scope.changeTo= 'English';
          } else {
            $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            $scope.changeTo = 'Hungarian';
          }
        };
        /* event sources array*/
        $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
        $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
        
//////////////////////////////////////////////////////////////////        
        
});