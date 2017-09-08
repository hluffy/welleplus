app.service('userServer',function($http,$q){
	this.getUserInfos = function(){
		var deferred = $q.defer();
		$http.get("/welleplus/user/getinfos.do").success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject("查询失败");
		});
		
		return deferred.promise;
	}
	
	this.getRoles = function(){
		var deferred = $q.defer();
		$http.get("/welleplus/data/role.json").success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject("查询失败");
		});
		
		return deferred.promise;
	}
	
	this.addUserInfo = function(user){
		var deferred = $q.defer();
		$http({
			method:"post",
			url:"/welleplus/user/addinfo.do",
			data:user,
			dataType:"json"
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject("添加失败");
		});
		
		return deferred.promise;
	}
	
	this.getUserInfo = function(user){
		var deferred = $q.defer();
		$http({
			method:"post",
			url:"/welleplus/user/getinfo.do",
			data:user,
			dataType:"json"
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject("查询失败");
		});
		
		return deferred.promise;
	}
});