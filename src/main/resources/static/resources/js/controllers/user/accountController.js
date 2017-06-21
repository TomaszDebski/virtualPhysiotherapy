/**
 * 
 */

angular.module('app.controller.account', [])
.controller('accountController', function($scope,$http,$rootScope,$log,$location,$window,physiotherapistService
		,uiUploader,getFileService,user,file) {
	
	$scope.editAccount = false;
	
	$scope.user = user;
	
	$scope.successSave = false;
	$scope.editUser = function(user){
		if ($scope.editUserForm.$valid){
			physiotherapistService.update({id:user.id},user,function(){
				$scope.successSave = true;
				$window.scrollTo(0, 0);
			})
		}else{
			$scope.editUserForm.submitted=true;
		}
	}
	///////////////////////////////////UploadFile///////////////////////////////
	
	 $scope.btn_remove = function(file) {
         $log.info('deleting=' + file);
         uiUploader.removeFile(file);
     };

     $scope.btn_clean = function() {
         uiUploader.removeAll();
     };

     $scope.btn_upload = function() {
         $log.info('uploading...');
         uiUploader.startUpload({
             url: '/upload?id=' + $scope.user.id,
             concurrency: 2,
             data : {'object' : 'physiotherapist'},
             headers : {
                 'Content-Type': 'application/x-www-form-urlencoded',
                 xsrfHeaderName: 'XMLHttpRequest',
             }
     			,
             
             onProgress: function(file) {
                 $log.info(file.name + '=' + file.humanSize);
                 $scope.$apply();
             },
             onCompleted: function(file, response) {
                 $log.info(file + 'response' + response);
             }
         });
     };

     $scope.files = {};
     var element = document.getElementById('file1');
     element.addEventListener('change', function(e) {
         var files = e.target.files;
         uiUploader.addFiles(files);
         $scope.files = uiUploader.getFiles();
         $scope.$apply();
     });
	
	////////////////////////////////////////////////////////////////////////////
    })