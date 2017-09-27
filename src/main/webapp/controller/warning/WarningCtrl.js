app.controller("warningCtrl",function($scope,waringServer){
	$scope.warning = {};
	$scope.warning.user = {};
	$scope.warning.fence = {};
	$scope.warning.fence.warningType = 0;
	
	$scope.treeuser = {};
	$scope.treeuser.userName = getCookie("welleplususername");
	$scope.treeuser.role = getCookie("welleplusrole");
	$scope.treeuser.rid = getCookie("welleplusrid");
	$scope.treeuser.id = getCookie("welleplusuid");
	
	$scope.warning.user.id = $scope.treeuser.id;
	$scope.warning.user.rid = $scope.treeuser.rid;
	$scope.warning.user.role = $scope.treeuser.role;
	waringServer.getWarningInfoForInfo($scope.warning).then(function(data){
		$scope.warninginfos = data.data;
	});
	
	$scope.searchInfo = function(){
		$scope.warning.startDate = $("#startdate").val();
		$scope.warning.endDate = $("#enddate").val();
		console.log($scope.warning);
		waringServer.getWarningInfoForInfo($scope.warning).then(function(data){
			$scope.warninginfos = data.data;
		});
	}
	
	
	//执行一个laydate实例
    laydate.render({
        elem: '#startdate' //指定元素
        , type: 'datetime'
        , format: 'yyyy-MM-dd HH:mm:ss' //可任意组合
//        ,min: '2000-01-01 00:00:00'
//        ,max: 'new Date()'
        , theme: '#393D49'
    });
    laydate.render({
        elem: '#enddate' //指定元素
        , type: 'datetime'
        , format: 'yyyy-MM-dd HH:mm:ss' //可任意组合
//        ,min: '2000-01-01 00:00:00'
//        ,max: 'new Date()'
        , theme: '#393D49'
    });
});