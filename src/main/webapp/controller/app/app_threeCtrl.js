app.controller('app_threeCtrl', function($scope,app_threeSer) {
    $scope.treeuser = {};
	$scope.treeuser.userName = getCookie("welleplususername");//用户名
	$scope.treeuser.role = getCookie("welleplusrole");//角色01234
	$scope.treeuser.rid = getCookie("welleplusrid");//角色id
	$scope.treeuser.id = getCookie("welleplusuid");//用户id
	$scope.engineer = {
		name : "t",
		currentActivity : "工种"
	};
	$scope.activities = [ "工种" ];
	
	$scope.engineer1 = {
		name : "t1",
		currentActivity1 : "标段"
	};
	$scope.activities1 = [ "标段", "Writing code", "Testing code", "Fixing bugs",
			"Dancing", "123456" ];
	
	$scope.engineer2 = {
		name : "t2",
		currentActivity2 : "工程部"
	};
	$scope.activities2 = [ "工程部", "Writing code", "Testing code", "Fixing bugs",
			"Dancing", "123456" ];
	
	$scope.engineer3 = {
		name : "t3",
		currentActivity3 : "施工队"
	};
	$scope.activities3 = [ "施工队", "Writing code", "Testing code", "Fixing bugs",
			"Dancing", "123456" ];
	
	$scope.engineer4 = {
		name : "t4",
		currentActivity4 : "班组"
	};
	$scope.activities4 = [ "班组", "Writing code", "Testing code", "Fixing bugs",
			"Dancing", "123456" ];
	
	$scope.engineer5 = {
		name : "t5",
		currentActivity5 : "1"
	};
	$scope.activities5 = [ "1", "Writing code", "Testing code", "Fixing bugs",
			"Dancing", "123456" ];
	
	
	$scope.engineer6 = {
			name : "t5",
			currentActivity6 : "2"
		};
		$scope.activities6 = [ "2", "Writing code", "Testing code", "Fixing bugs",
				"Dancing", "123456" ];
		
		$scope.names = {Name:11231312123131,Country:2123546};
//		userServer.getUserInfos().then(function(data){
////			console.log(data);
//			$scope.users = data.data;
//		});
		
		app_threeSer.getdownbox($scope.treeuser).then(function(data){
			//console.log(data);
			console.log(data.data);
			angular.forEach(data, function(data){
				//data等价于array[index]
				$scope.activities =["工种",data] ;
				});
		});
		
		
		app_threeSer.getsurfacedata($scope.treeuser).then(function(data){
			console.log(data.data);
			$scope.userinfos = data.data;
			console.log(data.name);
		
		});
		
		
		
});