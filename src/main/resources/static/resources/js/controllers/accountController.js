/**
 * 
 */

angular.module('app.controller.account', [])
.controller('accountController', function($scope,$http,$rootScope,$log,$location,$window,physiotherapistService
		,uiUploader,getFileService) {
	
//	$log.info('$window.sessionStorage.userModel', $window.sessionStorage.userModel);
//	console.log($window.sessionStorage.userModel)
	
	$scope.editAccount = false;
	var oldUser = {};
	$scope.changeToEdit = function(isEdit){
		if (isEdit){
			$scope.editAccount = true;
			oldUser = angular.copy($scope.user);
		}else{
			$scope.editAccount = false;
			$scope.editUserForm.submitted = false;
			$scope.user = oldUser;
		}
	}
	
	physiotherapistService.get({id:$window.sessionStorage.id},function(data){
		$scope.user = data;
		var file = getFileService.getOneFile(data.id);
		file.then(function(result){
			$scope.avatar = result.data;
		})
	});
	
	
	
	$scope.editUser = function(user){
		if ($scope.editUserForm.$valid){
			physiotherapistService.update({id:user.id},user,function(){
				console.log("udało się zmienić dane konta")
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