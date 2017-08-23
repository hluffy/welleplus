app.controller('treeCtrl',function($scope,projectService,companyServer){
	$scope.tree = {};
	$scope.message;
	
	$scope.setting = {
			view: {
				dblClickExpand : false,
				showIcon: showIconForTree
			},
			data: {
				simpleData: {
					enable: true
				}
			},
			callback: {
				onClick: onClick
			}
		};
	
	projectService.getTreeInfo().then(function(data){
		$scope.zNodes = data;
		$.fn.zTree.init($("#tree"), $scope.setting, $scope.zNodes);
	});
	
	
	function showIconForTree(treeId, treeNode) {
		return !treeNode.isParent;
	};
	
	

	
	
	
	$scope.treeNode1 = {};
	function onClick(event, treeId, treeNode, clickFlag) {
		var cdata = null;
		var zTree = $.fn.zTree.getZTreeObj("tree");
		treeNode1 = treeNode;
		zTree.expandNode(treeNode);
		$scope.treeNode1 = treeNode;
		$scope.message = treeNode.name;
		var obj = event.target;
		$(obj).css("font-weight","bold");
		var promise = companyServer.getCompanyInfos();
//		promise.then(function(data){
//			cdata = data.data;
//		});
		companyServer.getCompanyInfos().then(function(data){
			cdata = data.data;
		});
		while(true){
			if(cdata!=null){
				break;
			}
		}
		$scope.$apply(function(){
			console.log(cdata);
			$scope.trees = cdata;
		})
		    
	}	
	
	var newCount = 1;
	$scope.addNode = function(){
		if($scope.treeNode1==null){
			alert("请选择组织！！");
			return;
		}
		$scope.tree.fid = treeNode1.descId;
		if(treeNode1.desc=="1"){
			if($scope.tree.name==null||$scope.tree.name==""){
				alert("请输入名称");
				return;
			}
			companyServer.addCompanyInfo($scope.tree).then(function(data){
				if(data.state){
					$("#myclose").click();
					var zTree = $.fn.zTree.getZTreeObj("tree");
					zTree.addNodes($scope.treeNode1, {id:(100 + newCount), pId:treeNode1.id, name:$scope.tree.name,desc:$scope.treeNode1.desc+1,descId:data.id});
				}else{
					alert("data.message");
				}
			});
		}
		
	}
	
});