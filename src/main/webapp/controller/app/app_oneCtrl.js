app.controller('app_oneCtrl', function($scope,projectService) {
	$scope.treeuser = {};
	$scope.treeuser.userName = getCookie("welleplususername");
	$scope.treeuser.role = getCookie("welleplusrole");
	$scope.treeuser.rid = getCookie("welleplusrid");
	$scope.treeuser.id = getCookie("welleplusuid");
//	$scope.fence.role = $scope.treeuser.role;
//	$scope.fence.rid = $scope.treeuser.rid;
//	$scope.fence.uid = $scope.treeuser.id;
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
	console.log(1);
	 projectService.getTreeInfo($scope.treeuser).then(function(data){
			$scope.zNodes = data;
			$.fn.zTree.init($("#tree"), setting, $scope.zNodes);
		});
	 function onClick(event, treeId, treeNode, clickFlag) {
//	    	$scope.desc = treeNode.desc;
//	    	$scope.descId = treeNode.descId;
//	    	$scope.fence.desc = $scope.desc;
//	    	$scope.fence.descId = $scope.descId;
	    	
//	    	fenceServer.getInfoFromId($scope.fence).then(function(data){
//	    		if(data.data!=null&&data.data.length!=0){
//	    			var result = data.data;
//	        		console.log(result);
//	        		var polygons = [];
//	        		
//	        		for(var i=0;i<result.length;i++){
//	        			var polygonArr = [];
//	        			polygonArr.push([result[i].xloc,result[i].yloc]);
//	        			polygonArr.push([result[i].xloc1,result[i].yloc1]);
//	        			polygonArr.push([result[i].xloc2,result[i].yloc2]);
//	        			polygonArr.push([result[i].xloc3,result[i].yloc3]);
//	        			
//	        			var  polygon = new AMap.Polygon({
//	        		        path: polygonArr,//设置多边形边界路径
//	        		        strokeColor: "#FF33FF", //线颜色
//	        		        strokeOpacity: 0.2, //线透明度
//	        		        strokeWeight: 10,    //线宽
//	        		        fillColor: "#1791fc", //填充色
//	        		        fillOpacity: 0.35,//填充透明度
//	        		        extData:result[i]
//	        		    });
//	        			
//	        		    polygon.setMap(map);
//	        		    polygons.push(polygon);
//	        		}
//	        		
//	        		while(polygons.length!=0){
//	        			polygons.pop().on("click",function(){
//	        				var fenceInfo = this.getExtData();
//	        				console.log(this.getExtData());
//	        				var info = [];
////	        		        info.push("<div><div><img style=\"float:left;\" /></div> ");
////	        		        info.push("<div style=\"padding:0px 0px 0px 4px;\"><b>高德软件</b>");
//	        				info.push("<div>");
//	        		        info.push("围栏名称:"+fenceInfo.name);
//	        		        info.push("当前围栏人数:");
//	        		        info.push("报警次数:");
//	        		        info.push("最后一次统计时间:");
//	        		        infoWindow = new AMap.InfoWindow({
//	        		            content: info.join("<br/>")  //使用默认信息窗体框样式，显示信息内容
//	        		        });
//	        		        var x = Number(fenceInfo.xloc1)+Number(fenceInfo.xloc3);
//	            		    var y = Number(fenceInfo.yloc1)+Number(fenceInfo.yloc3);
//	        		        infoWindow.open(map, [x/2,y/2]);
//	        			});
//	        		}
//	        		
//	    		    map.setZoom(14);
//	    		    var x = Number(result[0].xloc1)+Number(result[0].xloc3);
//	    		    var y = Number(result[0].yloc1)+Number(result[0].yloc3);
//	    			map.setCenter([x/2,y/2]);
//	    		}
//	    		
//	    	});
	    }
	
 });