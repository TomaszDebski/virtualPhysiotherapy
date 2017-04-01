/**
 * 
 */

angular.module('app.controller.calendar', [])
.controller('CalendarCtrl', function($scope,$rootScope, $compile, $timeout, uiCalendarConfig,$http,
		$window,$uibModal,$log,visitService) {
	
	$scope.addVisit = function(){
		$scope.showModal();
	}

	////////////////////////modal//////////////////////////////////
	
//	console.log("session " , $window.sessionStorage);
	$scope.showModal = function(){
		$uibModal.open({
              templateUrl: 'addVisitModal2.html',
              controller: 'addVisitInCalendarModelController as ctrl', 
              windowClass: 'app-modal-window',
              resolve :{
            	  patients : function(allPatientsForPhysiotherapistService,$rootScope){
            		  return allPatientsForPhysiotherapistService.getPatients($rootScope.user)
            		  .then(function(result){
//            	    	console.log('result addVisitInCalendarModelController: ' , result);
            	    	return result;
            	    })
            	  },
            	  myParam : function(){
            		  return 'myParam'
            	  }
              }
         })
        .result.then(
            function () {
                alert("OK");
                $('#calendar').fullCalendar('refetchEvents')
            	
            }, 
            function () {
//                alert("Cancel");
            }
        );
    };
    
    ///////////////////////////////////////////////////////
    
    
    ////////////////////////////FullCalendar/////////////////////
	
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        
        $scope.changeTo = 'Hungarian';
        /* event source that pulls from google.com */
        $scope.eventSource = {
//                url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
//                className: 'gcal-event',           // an option!
//                currentTimezone: 'America/Chicago' // an option!
        };
        /* event source that contains custom events on the scope */
        $scope.events =  {
                 url: '/visit/forScheduler', // use the `url` property
                 data : {
                 	id : function(){
                 		return $window.sessionStorage.id;
                 	}
                 },
// 				                    color: 'yellow',    // an option!
//                 textColor: 'black',  // an option!
                 	 error: function() {
                          alert('There was an error while fetching events.');
                      }
             };
        /* event source that calls a function on every view switch */
        $scope.eventsF = function (start, end, timezone, callback) {
        	console.log("eventsF")
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
        	console.log("alertOnEventClick")
            $scope.alertMessage = (date.title + ' was clicked ');
        };
        /* alert on Drop */
         $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
        	 $log.info("alertOnDrop", event.start.format());
        	 visitService.update($scope.Reader,function(){
					refreshFunction();
});
           //$scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
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
        	console.log("addEventtt")
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
        	console.log("changeView")
          uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
        };
        /* Change View */
        $scope.renderCalender = function(calendar) {
        	console.log("renderCalender")
          if(uiCalendarConfig.calendars[calendar]){
            uiCalendarConfig.calendars[calendar].fullCalendar('render');
          }
        };
         /* Render Tooltip */
        $scope.eventRender = function( event, element, view ) { 
        	console.log("eventRender")
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
            slotLabelFormat:"HH:mm",
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
            eventRender: $scope.eventRender
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
        
//        $scope.select = function(start, end, allDay) {
////		        endtime = $.fullCalendar.formatDate(end,'h:mm tt');
////		        starttime = $.fullCalendar.formatDate(start,'ddd, MMM d, h:mm tt');
////		        var mywhen = starttime + ' - ' + endtime;
//		        console.log("jestem w selectcie")
////// 		        var element = angular.element('#CalendarCtrl');
////// 		        element.scope().showModal();
////// 		        $('#createEventModal #apptStartTime').val(start);
////// 		        $('#createEventModal #apptEndTime').val(end);
////// 		        $('#createEventModal #apptAllDay').val(allDay);
////// 		        $('#createEventModal #when').text(mywhen);
////		        jQuery('#myModal').modal('show');
//		     }
        
//////////////////////////////////////////////////////////////////        
        
        $scope.myFunction = function(){
//        	$('#calendar').fullCalendar('gotoDate', 2017,3,11);
//        	$('#calendar').fullCalendar( 'changeView', 'agendaDay' )
//        	$('#calendar').fullCalendar('gotoDate', '2017-03-11');
        }

});