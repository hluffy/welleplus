app.controller('elepenCtrl',function($scope,$rootScope,fenceServer,projectService){
	$scope.isShow = false;
	$scope.showEdit = false;
	$scope.showtree = true;
	$scope.ztreeshow = true;
	$scope.fence = {};
	$scope.editfence = {};
	$scope.fence.warningType = 0;
	$scope.selectnumber = 0;
	$scope.radionumber = 1;
	$scope.radioeditnumber = 1;
	$scope.fence.state = 1;
	
	$scope.treeuser = {};
	$scope.treeuser.userName = getCookie("welleplususername");
	$scope.treeuser.role = getCookie("welleplusrole");
	$scope.treeuser.rid = getCookie("welleplusrid");
	$scope.treeuser.id = getCookie("welleplusuid");
	
	var map = new AMap.Map("container", {
        resizeEnable: true
    });	
	map.plugin(["AMap.MouseTool"], function() {
//		map.addControl(new AMap.MouseTool(map));
	});
	map.plugin(["AMap.ToolBar"], function() {
	});
    //在地图中添加MouseTool插件
    $rootScope.mouseTool = new AMap.MouseTool(map);
    var callbackfn = function(e){
        $rootScope.lnglat.push(e.lnglat.getLng() + ',' + e.lnglat.getLat());
        console.log(e.lnglat.getLng() + ',' + e.lnglat.getLat());
    }
    AMap.event.addDomListener(document.getElementById('addPen'), 'click', function() {
    	if(!$scope.desc||$scope.desc!=4){
    		return;
    	}
    	$rootScope.lnglat = new Array();
    	map.on('click', callbackfn);
        $rootScope.mouseTool.polygon();
        
    }, false);
    
    AMap.event.addDomListener(document.getElementById('editPen'), 'click', function() {
    	if(!$scope.desc||$scope.desc!=4){
    		return;
    	}
    	$rootScope.lnglat = new Array();
    	map.on('click', callbackfn);
        $rootScope.mouseTool.polygon();
        
    }, false);
    
    $scope.remove = function(){
    	$rootScope.mouseTool.close(true);
    	console.log($rootScope.lnglat);
    	map.off('click',callbackfn);
    }
    
    $scope.deletePen = function(){
    	if(!$rootScope.desc){
    		alert("请选择组织");
    		return;
    	}
    	if($rootScope.desc != 4){
    		alert("该组织无需编辑电子围栏");
    		return;
    	}
    	fenceServer.getFenceInfoFromPid($rootScope.descId).then(function(data){
    		if(data.state){
    			if(data.data!=null){
//    				if(confirm("您确定要删除"+$rootScope.thisname+"下的"+$scope.fenceName+"电子围栏吗?")){
    				if(confirm("您确定要删除电子围栏吗?")){
    		    		fenceServer.deleteInfo($rootScope.descId).then(function(data){
    		    			alert(data.message);
    		    		});
    		    	}
    			}else{
    				alert("该组织没有电子围栏");
    			}
    		}else{
    			alert("系统繁忙，请稍后再试");
    		}
    	});
    	
    }
    
    $scope.editPen = function(){
    	if(!$rootScope.desc){
    		alert("请选择组织");
    		return;
    	}
    	if($rootScope.desc != 4){
    		alert("该组织无需编辑电子围栏");
    		return;
    	}
    	
    	fenceServer.getFenceInfoFromPid($rootScope.descId).then(function(data){
    		if(data.state){
    			if(data.data!=null){
    				map.clearMap();
    				$("#mymap").removeClass("col-xs-12");
    		    	$("#mymap").addClass("col-xs-7");
    		    	$scope.isShow = false;
    		    	$scope.showEdit = true;
    		    	$rootScope.lnglat = new Array();
    		    	
//    		    	$scope.editfence = data.data;
    		    	$scope.selecteditnumber = data.data.warningType;
    		    	$scope.editfence.name = data.data.name;
    		    	$("#editstartdate").val(data.data.startDate);
    		    	$("#editenddate").val(data.data.endDate);
    		    	$scope.radioeditnumber = data.data.state;
    		    	$scope.editfence.state = data.data.state;
    		    	$scope.editfence.warningType = data.data.warningType;
    		    	
    		    	console.log($scope.radioeditnumber);
    			}else{
    				alert("该组织没有电子围栏");
    			}
    		}else{
    			alert("操作失败");
    		}
    	});
    	
    }
    
    $scope.addPen = function(){
    	if(!$rootScope.desc){
    		alert("请选择组织");
    		return;
    	}
    	if($rootScope.desc != 4){
    		alert("该组织无法添加电子围栏");
    		return;
    	}
    	
    	$("#mymap").removeClass("col-xs-12");
    	$("#mymap").addClass("col-xs-7");
    	$scope.isShow = true;
    }
    
    $scope.closeAddPen = function(){
    	$("#mymap").removeClass("col-xs-7");
    	$("#mymap").addClass("col-xs-12");
    	$scope.isShow = false;
    	$scope.showEdit = false;
    	$rootScope.mouseTool.close(true);
    	map.off('click',callbackfn);
    }
    
    
    $scope.editFence = function(){
		console.log($rootScope.lnglat);
		if(!$scope.editfence.name){
    		alert("请输入围栏名称");
    		return;
    	}
    	if($rootScope.lnglat.length==0){
    		alert("请在地图上绘制围栏");
    		return;
    	}
    	if($rootScope.lnglat.length!=4){
    		alert("只能选择4个点");
    		return;
    	}
    	
    	$scope.editfence.startDate = $("#editstartdate").val();
    	$scope.editfence.endDate = $("#editenddate").val();
    	$scope.editfence.pid = $rootScope.descId;
    	$scope.editfence.lnglat = $rootScope.lnglat;
    	console.log($scope.editfence);
    	fenceServer.updateInfo($scope.editfence).then(function(data){
    		console.log(data);
    		if(data.state){
    			alert(data.message);
    			$("#mymap").removeClass("col-xs-7");
    	    	$("#mymap").addClass("col-xs-12");
    	    	$scope.isShow = false;
    	    	$scope.showEdit = false;
    	    	$rootScope.mouseTool.close(true);
    	    	map.off('click',callbackfn);
    		}else{
    			alert(data.message);
    		}
    	});
    }
    
    
    $scope.addFence = function(){
    	console.log($rootScope.lnglat);
    	if(!$scope.fence.name){
    		alert("请输入围栏名称");
    		return;
    	}
    	if($rootScope.lnglat.length==0){
    		alert("请在地图上绘制围栏");
    		return;
    	}
    	if($rootScope.lnglat.length!=4){
    		alert("只能选择4个点");
    		return;
    	}
    	$scope.fence.lnglat = $rootScope.lnglat;
    	$scope.fence.startDate = $("#startdate").val();
    	$scope.fence.endDate = $("#enddate").val();
    	$scope.fence.pid = $rootScope.descId;
    	console.log($scope.fence);
    	fenceServer.addFenceInfo($scope.fence).then(function(data){
    		if(data.state){
    			alert(data.message);
    			$scope.fence.name = "";
    			$scope.fence.startdate = "";
    			$scope.fence.enddate = "";
    			$scope.fence.warningType = 0;
    			$scope.fence.state = 1;
    			
    			$scope.number = 0;
    			$scope.radionumber = 1;
    			$("#startdate").val("");
    			$("#enddate").val("");
    			
    			$("#mymap").removeClass("col-xs-7");
    	    	$("#mymap").addClass("col-xs-12");
    	    	$scope.isShow = false;
    			$rootScope.mouseTool.close(true);
    	    	map.off('click',callbackfn);
    			
    		}else{
    			alert(data.message);
    		}
    	});
    }
    
    $scope.showandhidetree = function(){
    	$scope.showtree = !$scope.showtree;
    	if($scope.showtree){
    		$("#mymain").removeClass("col-xs-12");
    		$("#mymain").addClass("col-xs-9");
    		$scope.ztreeshow =true;
    	}else{
    		$("#mymain").removeClass("col-xs-9");
    		$("#mymain").addClass("col-xs-12");
    		$scope.ztreeshow =false;
    	}
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
    
    laydate.render({
        elem: '#editstartdate' //指定元素
        , type: 'datetime'
        , format: 'yyyy-MM-dd HH:mm:ss' //可任意组合
//        ,min: '2000-01-01 00:00:00'
//        ,max: 'new Date()'
        , theme: '#393D49'
    });
    laydate.render({
        elem: '#editenddate' //指定元素
        , type: 'datetime'
        , format: 'yyyy-MM-dd HH:mm:ss' //可任意组合
//        ,min: '2000-01-01 00:00:00'
//        ,max: 'new Date()'
        , theme: '#393D49'
    });
    
    
    ///////////////////////////////////树状图
    var setting = {
			data: {
				simpleData: {
					enable: true
				}
			},
			callback: {
				onClick: onClick,
			}
		};
    
    projectService.getTreeInfo($scope.treeuser).then(function(data){
		$scope.zNodes = data;
		$.fn.zTree.init($("#tree"), setting, $scope.zNodes);
	});
    
    function onClick(event, treeId, treeNode, clickFlag) {
    	var zTree = $.fn.zTree.getZTreeObj("tree");
    	zTree.expandNode(treeNode);
    	console.log(treeNode);
    	$rootScope.desc = treeNode.desc;
    	$rootScope.descId = treeNode.descId;
    	$rootScope.thisname = treeNode.name;
    	map.clearMap();
    	//获取电子围栏
    	if($rootScope.desc==4){
    		fenceServer.getFenceInfoFromPid($rootScope.descId).then(function(data){
        		if(data.state){
//        			$scope.fenceName = data.data.name;
        			var result = data.data;
        			console.log(result);
        			var polygonArr = [];
        			polygonArr.push([result.xloc,result.yloc]);
        			polygonArr.push([result.xloc1,result.yloc1]);
        			polygonArr.push([result.xloc2,result.yloc2]);
        			polygonArr.push([result.xloc3,result.yloc3]);
        			var  polygon = new AMap.Polygon({
        		        path: polygonArr,//设置多边形边界路径
        		        strokeColor: "#FF33FF", //线颜色
        		        strokeOpacity: 0.2, //线透明度
        		        strokeWeight: 10,    //线宽
        		        fillColor: "#1791fc", //填充色
        		        fillOpacity: 0.35,//填充透明度
        		        extData:result[0]
        		    });
        			
        		    polygon.setMap(map);
        		    map.setZoom(10);
    				map.setCenter([result.xloc3,result.yloc3]);
        			
        		}
        	});
    	}
    	
    }
});