app.service('fenceServer',function($q,$http){
	this.addFenceInfo = function(fence){
		var deferred = $q.defer();
		$http({
			method:"post",
			url:"/welleplus/fence/addinfo.do",
			data:fence,
			dataType:"json"
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject("添加失败");
		});
		
		return deferred.promise;
	}
	
	this.getFenceInfoFromPid = function(pid){
		var deferred = $q.defer();
		$http.get("/welleplus/fence/getinfofrompid.do?pid="+pid).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject("查询失败");
		});
		
		return deferred.promise;
	}
	
	this.updateInfo = function(fence){
		var deferred = $q.defer();
		$http({
			method:"post",
			url:"/welleplus/fence/updateinfo.do",
			data:fence,
			dataType:"json"
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject();
		});
		
		return deferred.promise;
	}
	
	this.deleteInfo = function(pid){
		var deferred = $q.defer();
		$http.get("/welleplus/fence/deleteinfo.do?pid="+pid).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject();
		});
		
		return deferred.promise;
	}
	
	//根据id获取电子围栏
	this.getInfoFromId = function(fence){
		var deferred = $q.defer();
		$http.get("/welleplus/fence/getinfofromid.do?role="+fence.role+"&rid="+fence.rid+"&uid="+fence.uid+"&desc="+fence.desc+"&descId="+fence.descId).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject();
		});
		
		return deferred.promise;
	}
	
	this.getCount = function(id){
		var deferred = $q.defer();
		$http.get("/welleplus/fence/getcount.do?id="+id).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject();
		});
		
		return deferred.promise;
	}
});