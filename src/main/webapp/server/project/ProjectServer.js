app.service("projectService",function($http,$q){
	this.getTreeInfo = function(){
		var deferred = $q.defer();
		$http.get("/welleplus/project/gettree.do").success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject("查询失败");
		});
		
		return deferred.promise;
	}
	
	this.addProjectInfo = function(project){
		var deferred = $q.defer();
		$http({
			method:"post",
			url:"/welleplus/project/addinfo.do",
			data:project,
			dataType:"json"
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject("添加失败");
		});
		
		return deferred.promise;
	}
	
	this.getDownMenu = function(desc,descId){
		var deferred = $q.defer();
		$http.get("/welleplus/project/getdownmenu.do?desc="+desc+"&descId="+descId).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject("查询失败");
		});
		
		return deferred.promise;
	}
});