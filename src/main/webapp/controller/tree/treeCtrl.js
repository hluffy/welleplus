app.controller('treeCtrl',function($scope,projectService,companyServer,sectionServer,userServer){
	$scope.tree = {};
	$scope.user = {};
	$scope.userquery={};
	$scope.user.sex = "1";
	$scope.user.role="";
	$scope.message;
	
//	userServer.getRoles().then(function(data){
//		$scope.roles = data.roles1;
//	});
	
	
	$scope.selected = [] ;  
    
    $scope.isChecked = function(id){  
        return $scope.roles.indexOf(id) >= 0 ;  
    } ;  
      
    $scope.updateSelection = function($event,id){  
        var checkbox = $event.target ;  
        var checked = checkbox.checked ;  
        if(checked){  
            $scope.selected.push(id) ;  
        }else{  
            var idx = $scope.selected.indexOf(id) ;  
            $scope.selected.splice(idx,1) ;  
        }  
    } ;  
	
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
	
	//构造树形结构组织
	projectService.getTreeInfo().then(function(data){
		$scope.zNodes = data;
		$.fn.zTree.init($("#tree"), $scope.setting, $scope.zNodes);
	});
	
	
	function showIconForTree(treeId, treeNode) {
		return !treeNode.isParent;
	};
	
	

	
	
	
	$scope.treeNode1 = null;
	function onClick(event, treeId, treeNode, clickFlag) {
		var zTree = $.fn.zTree.getZTreeObj("tree");
		treeNode1 = treeNode;
		console.log(treeNode);
		zTree.expandNode(treeNode);
		$scope.treeNode1 = treeNode;
		
		$scope.message = treeNode.name;
		var obj = event.target;
		$(obj).css("font-weight","bold");
//		if(treeNode.desc=="1"){
//			$scope.first = treeNode.name;
//			$scope.second = "";
//			$scope.thired = "";
//			$scope.forth = "";
//		}else if(treeNode.desc=="2"){
//			$scope.second = 
//		}
		
//		var promise = companyServer.getCompanyInfos();
		//获取组织信息
		companyServer.getCompanyInfos().then(function(data){
			$scope.trees = data.data;
		});
		
		//获取下级组织
		projectService.getDownMenu(treeNode.desc,treeNode.descId).then(function(data){
			$scope.myMenu = data.data;
			$scope.user.grade = $scope.myMenu[0].grade;
		});
		
		$scope.userquery.role = treeNode.desc;
		$scope.userquery.rid = treeNode.descId;
		//获取人员信息
		userServer.getUserInfo($scope.userquery).then(function(data){
			console.log(data);
			$scope.userinfos = data.data;
		});
		
		$scope.user.role = treeNode.desc;
		$scope.user.rid = treeNode.descId;
		    
	}	
	
	//添加节点
	var newCount = 1;
	$scope.addNode = function(){
		if(!$scope.treeNode1){
			alert("请选择组织！！");
			return;
		}
		$scope.tree.fid = $scope.treeNode1.descId;
		$scope.tree.cid = $scope.treeNode1.descId;
		$scope.tree.sid = $scope.treeNode1.descId;
		if($scope.tree.name==null||$scope.tree.name==""){
			alert("请输入名称");
			return;
		}
		if($scope.treeNode1.desc=="1"){
			
			companyServer.addCompanyInfo($scope.tree).then(function(data){
				if(data.state){
					$("#myclose").click();
					var zTree = $.fn.zTree.getZTreeObj("tree");
					zTree.addNodes($scope.treeNode1, {id:(100 + newCount), pId:treeNode1.id, name:$scope.tree.name,desc:$scope.treeNode1.desc+1,descId:data.id});
					newCount++;
				}else{
					alert(data.message);
				}
			});
		}else if($scope.treeNode1.desc=="2"){
			sectionServer.addSectionInfo($scope.tree).then(function(data){
				if(data.state){
					$("#myclose").click();
					var zTree = $.fn.zTree.getZTreeObj("tree");
					zTree.addNodes($scope.treeNode1, {id:(1000 + newCount), pId:treeNode1.id, name:$scope.tree.name,desc:$scope.treeNode1.desc+1,descId:data.id});
					newCount++;
				}else{
					alert(data.message);
				}
				
			});
		}else if($scope.treeNode1.desc=="3"){
			projectService.addProjectInfo($scope.tree).then(function(data){
				if(data.state){
					$("#myclose").click();
					var zTree = $.fn.zTree.getZTreeObj("tree");
					zTree.addNodes($scope.treeNode1, {id:(1000 + newCount), pId:treeNode1.id, name:$scope.tree.name,desc:$scope.treeNode1.desc+1,descId:data.id});
					newCount++;
				}else{
					alert(data.message);
				}
			});
		}else{
			$("#myclose").click();
			alert("无法添加");
		}
		
	}
	
	//添加用户
	$scope.addUser = function(){
		console.log($scope.selected);
		if($scope.user.role==""){
			alert("请选择组织");
			return;
		}
		if(!$scope.user.userName){
			alert("用户名不可以为空");
			return;
		}
		if(!$scope.user.password){
			alert("密码不可以为空");
			return;
		}
		if(!$scope.user.phonenumber){
			alert("电话号码不可以为空");
			return;
		}
		if(!$scope.user.name){
			alert("姓名不可以为空");
			return;
		}
		$scope.user.ids = $scope.selected;
		userServer.addUserInfo($scope.user).then(function(data){
			if(data.state){
				alert(data.message);
				$("#userclose").click();
				$scope.user.userName="";
				$scope.user.password="";
				$scope.user.phonenumber="";
				$scope.user.name="";
				$scope.user.email="";
			}else{
				alert(data);
			}
		});
	}
	
});