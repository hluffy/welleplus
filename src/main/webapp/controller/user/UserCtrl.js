app.controller('userCtrl',function($scope,userServer){
	$scope.users= {};
	userServer.getUserInfos().then(function(data){
		$scope.users = data.data;
	});
});