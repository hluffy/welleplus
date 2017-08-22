app.service('userServer',function($http,$q){
	this.getUserInfos = function(){
		var deferred = $q.defer();
		$http.get("/welleplus/user/getinfos.ll").success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject("查询失败");
		});
		
		return deferred.promise;
	}
});