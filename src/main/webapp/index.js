angular.module("myApp",['ui.router']);
var app = angular.module("myApp");

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
	    .state('index',{
	    	url:'/index',
	    	templateUrl:'html/index.html'
	    })
	    .state('index2',{
	    	url:'/index2',
	    	templateUrl:'html/index2.html'
	    })
	    .state('index3',{
	    	url:'/index3',
	    	templateUrl:'html/index3.html'
	    })
	    .state('table',{
	    	url:'/table',
	    	templateUrl:'html/table.html'
	    })
	    .state('user',{
	    	url:'/user',
	    	templateUrl:'html/user/general.html',
	    	controller:function($state){
	    		$state.go('user.home');
	    	}
	    })
	    .state('user.home',{
	    	url:'/home',
	    	templateUrl:'html/index.html',
	    	controller:function(){
	    		$('#myul').children().first().addClass("active");
	    		$("#myul li").click(function(e){
	    			console.log(111);
	    			$("#myul li").removeClass("active");
	    			var object = e.target;
	    			console.log(object);
	    			$(object).parent().addClass("active");
	    		})
	    	}
	    })
	    .state('user.profile',{
	    	url:'/profile',
	    	templateUrl:'html/index2.html'
	    })
	    .state('user.messages',{
	    	url:'/messages',
	    	templateUrl:'html/index3.html'
	    })
	    .state('user.settings',{
	    	url:'/settings',
	    	templateUrl:'html/table.html'
	    })
	    .state('tree',{
	    	url:'/tree',
	    	templateUrl:'html/tree/general.html',
	    	controller:'treeCtrl'
	    })
	    
        
});