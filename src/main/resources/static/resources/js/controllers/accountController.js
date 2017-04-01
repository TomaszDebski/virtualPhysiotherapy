/**
 * 
 */

angular.module('app.controller.account', [])
.controller('accountController', function($scope,$http,$rootScope,$log,$location,$window,physiotherapistService
		,uiUploader,getFileService) {
	
//	$log.info('$window.sessionStorage.userModel', $window.sessionStorage.userModel);
//	console.log($window.sessionStorage.userModel)
	
	$scope.editAccount = false;
	
	$scope.changeToEdit = function(isEdit){
		$scope.editAccount = isEdit ? true : false;
	}
	
	physiotherapistService.get({id:$window.sessionStorage.id},function(data){
//		refreshMethod();
		$scope.user = data;
		var file = getFileService.getOneFile(data.id);
		file.then(function(result){
			$scope.avatar = result.data;
		})
		//console.log("dataaa "  ,data.firstname);
	});
	
	
	
	$scope.editUser = function(user){
		physiotherapistService.update({id:user.id},user,function(){
			console.log("udało się zmienić dane konta")
		})
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