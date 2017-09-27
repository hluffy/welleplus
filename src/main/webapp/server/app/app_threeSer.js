app.service("app_threeSer",function($http,$q){
	this.getdownbox = function(section){
		var deferred = $q.defer();
		$http({
			method:"post",
			url:"/welleplus/drop/getboxone.do",
			data:section,
			dataType:"json"
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject("查询失败");
		});
		
		return deferred.promise;
	}
	this.getsurfacedata = function(section){
		var deferred = $q.defer();
		$http({
			method:"post",
			url:"/welleplus/drop/getsurfacedata.do",
			data:section,
			dataType:"json"
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject("查询失败");
		});
		
		return deferred.promise;
	}
});