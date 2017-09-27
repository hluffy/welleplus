app.controller('treeCtrl',function($scope,$rootScope,projectService,companyServer,sectionServer,userServer){
	$rootScope.edituser = {};
	$scope.tree = {};
	$scope.user = {};
	$scope.user.worktype = 0;
	$scope.user.equiptype = 0;
	$scope.user.equipstate = 1;
	$scope.userquery={};
	$rootScope.useruser = {};
	$scope.user.sex = "1";
//	$scope.user.role="";
	$scope.message;
	$scope.showcontext = false;
	
	$scope.treeuser = {};
	$scope.treeuser.userName = getCookie("welleplususername");
	$scope.treeuser.role = getCookie("welleplusrole");
	$scope.treeuser.rid = getCookie("welleplusrid");
	$scope.treeuser.id = getCookie("welleplusuid");
	
//	userServer.getRoles().then(function(data){
//		$scope.roles = data.roles1;
//	});
	
	
	$scope.selected = [] ;
    $scope.isChecked = function(id){
//        return $scope.defids.indexOf(id) >= 0 ;  
        return true;
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
    
    function setEdit() {
		zTree = $.fn.zTree.getZTreeObj("tree");
		zTree.setting.edit.showRemoveBtn = true;
		zTree.setting.edit.showRenameBtn = true;
		zTree.setting.edit.removeTitle = true;
		zTree.setting.edit.renameTitle = true;
		zTree.setting.edit.removeTitle = "移除";
		zTree.setting.edit.renameTitle = "修改";
    }
	
    var setting = {}
    if($scope.treeuser.role == 0 || $scope.treeuser.role == 1){
    	setting = {
//    			view: {
//    				dblClickExpand : false,
//    				showIcon: true
//    			},
    			edit: {
    				enable: true,
    			},
    			data: {
    				simpleData: {
    					enable: true
    				}
    			},
    			callback: {
    				onClick: onClick,
    				beforeRemove: beforeRemove,
    				beforeRename: beforeRename,
    				onRemove: onRemove,
    				onRename: onRename
    			}
    		};
    }else{
    	setting = {
//    			view: {
//    				dblClickExpand : false,
//    				showIcon: true
//    			},
//    			edit: {
//    				enable: true,
//    			},
    			data: {
    				simpleData: {
    					enable: true
    				}
    			},
    			callback: {
    				onClick: onClick,
    				beforeRemove: beforeRemove,
    				beforeRename: beforeRename,
    				onRemove: onRemove,
    				onRename: onRename
    			}
    		};
    }
	
	//构造树形结构组织
	projectService.getTreeInfo($scope.treeuser).then(function(data){
		$scope.zNodes = data;
		$.fn.zTree.init($("#tree"), setting, $scope.zNodes);
		setEdit();
	});
	function showIconForTree(treeId, treeNode) {
		return !treeNode.isParent;
	};
	$scope.treeNode1 = null;
	function onClick(event, treeId, treeNode, clickFlag) {
		$scope.role = treeNode.desc;
		var zTree = $.fn.zTree.getZTreeObj("tree");
		treeNode1 = treeNode;
		console.log(treeNode);
		zTree.expandNode(treeNode);
		$scope.treeNode1 = treeNode;
		
		$scope.message = treeNode.name;
//		var obj = event.target;
//		$(obj).css("font-weight","bold");
		//获取组织信息
//		companyServer.getCompanyInfos().then(function(data){
//			$scope.trees = data.data;
//		});
		//获取下级组织
		projectService.getDownMenu(treeNode.desc,treeNode.descId,$scope.treeuser.role,$scope.treeuser.id,$scope.treeuser.rid).then(function(data){
			$scope.myMenu = data.data;
			$scope.usercount =data.count;
			$rootScope.editMenu = data.data;
			console.log($scope.myMenu);
			if($scope.myMenu!=null&&$scope.myMenu.length!=0){
				$scope.user.grade = $scope.myMenu[0].grade;
				$scope.defids = [];
				for(var i=0;i<$scope.myMenu.length;i++){
					console.log($scope.myMenu[i]);
					$scope.defids.push($scope.myMenu[i].id);
				}
				$scope.selected = $scope.defids;
				
			}
		});
		
		$scope.userquery.role = treeNode.desc;
		$scope.userquery.rid = treeNode.descId;
		$rootScope.useruser.role = treeNode.desc;
		$rootScope.useruser.rid = treeNode.descId;
		if($scope.role >= $scope.treeuser.role){
			//获取人员信息
			userServer.getUserInfo($scope.userquery).then(function(data){
				console.log(data);
				$rootScope.userinfos = data.data;
			});
		}else{
			$scope.userinfos = null;
		}
		
//		$scope.user.role = treeNode.desc;
		$scope.user.rid = treeNode.descId;
		    
	}
	
	function beforeRemove(treeId, treeNode) {
		if($scope.treeuser.role!=0&&$scope.treeuser.role!=1){
			alert("您没有权限删除！");
			return false;
		}
		var zTree = $.fn.zTree.getZTreeObj("tree");
		zTree.selectNode(treeNode);
		var flag;
		if(confirm("确认删除 节点 -- " + treeNode.name + " 吗？")){
//			projectService.deleteTreeNode(treeNode.desc,treeNode.descId).then(function(data){
//				if(data.state){
//					flag = true;
//				}else{
//					flag = false;
//				}
//			});
			$.ajax({
				url:"/welleplus/project/deletetreenode.do?desc="+treeNode.desc+"&descId="+treeNode.descId,
				async:false,
				success:function(data){
					if(data.state){
						alert(data.message);
						flag = true;
					}else{
						alert(data.message);
						flag = false;
					}
				},
				error:function(){
					return false;
				}
			});
		}else{
			return false;
		};
		
		return flag;
	}
	
	function beforeRename(treeId, treeNode, newName, isCancel) {
		if($scope.treeuser.role!=0&&$scope.treeuser.role!=1){
			alert("您没有权限修改！");
			return false;
		}
		if (newName.length == 0) {
			alert("节点名称不能为空.");
			var zTree = $.fn.zTree.getZTreeObj("tree");
			setTimeout(function(){zTree.editName(treeNode)}, 10);
			return false;
		}
		if(confirm("确认修改 节点 -- " + treeNode.name + " 吗？")){
			projectService.updteTreeName(treeNode.desc,treeNode.descId,newName).then(function(data){
				if(data.state){
					return true;
				}else{
					return false;
				}
			});
		}else{
			return false;
		}
		
//		return true;
	}
	
	function onRemove(e, treeId, treeNode) {
//		alert("删除成功");
	}
	function onRename(e, treeId, treeNode, isCancel) {
//		alert("修改成功");
	}
	
	
	
	
	function  showRenameBtn(treeId, treeNode){
		//获取节点所配置的noEditBtn属性值
		if(treeNode.noEditBtn != undefined && treeNode.noEditBtn){
			return false;
		}else
		{
			return true;
		}
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
					zTree.addNodes($scope.treeNode1, {id:(100 + newCount), pId:treeNode1.id, name:$scope.tree.name,desc:$scope.treeNode1.desc+1,descId:data.id,icon:'css/zTreeStyle/img/diy/3.png'});
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
					zTree.addNodes($scope.treeNode1, {id:(1000 + newCount), pId:treeNode1.id, name:$scope.tree.name,desc:$scope.treeNode1.desc+1,descId:data.id,icon:'css/zTreeStyle/img/diy/5.png'});
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
					zTree.addNodes($scope.treeNode1, {id:(1000 + newCount), pId:treeNode1.id, name:$scope.tree.name,desc:$scope.treeNode1.desc+1,descId:data.id,icon:'css/zTreeStyle/img/diy/7.png'});
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
	
	$scope.openuserinfoview = function(){
		console.log($scope.selected);
		if(!$scope.role){
			alert("请选择组织");
			return;
		}
		if($scope.role < $scope.treeuser.role){
			alert("您没有权限向该组织添加用户");
			return;
		}
		if($scope.role!=1&&$scope.role!=4){
			$scope.showcontext = true;
		}else{
			$scope.showcontext = false;
		}
		$scope.user.role = $scope.role;
		$("#adduser").click();
		
	}
	
	//添加用户
	$scope.addUser = function(){
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
		if(!$scope.user.email){
			alert("邮箱不可以为空");
			return;
		}
		$scope.user.getdate = $("#lastname").val();
		$scope.user.ids = $scope.selected;
		console.log($scope.user);
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
	
	
	laydate.render({
        elem: '#lastname' //指定元素
        , type: 'datetime'
        , format: 'yyyy-MM-dd HH:mm:ss' //可任意组合
//        ,min: '2000-01-01 00:00:00'
//        ,max: 'new Date()'
        , theme: '#393D49'
    });
	
	$rootScope.editUser = function(){
		$rootScope.edituser.ids = $rootScope.editSelected;
		console.log($rootScope.edituser);
		userServer.editUserInfo($rootScope.edituser).then(function(data){
			console.log(data);
			if(data.state){
				alert(data.message);
				userServer.getUserInfo($rootScope.useruser).then(function(data){
					$rootScope.userinfos = data.data;
					console.log($rootScope.userinfos);
				});
				$rootScope.edituser = {};
				$("#edituserclose").click();
			}else{
				alert(data);
			}
		});
	}
	
//	$scope.selected = [] ;
//    $scope.isChecked = function(id){
////        return $scope.defids.indexOf(id) >= 0 ;  
//        return true;
//    } ;  
//    $scope.updateSelection = function($event,id){
//        var checkbox = $event.target ;  
//        var checked = checkbox.checked ;  
//        if(checked){  
//            $scope.selected.push(id) ;  
//        }else{  
//            var idx = $scope.selected.indexOf(id) ;  
//            $scope.selected.splice(idx,1) ;  
//        }  
//    } ; 
    
	$rootScope.editSelected = [];
    $rootScope.isEditChecked = function(id){
    	if($rootScope.editids){
    		return $rootScope.editids.indexOf(id) >= 0;
    	}else{
    		return false;
    	}
    	
    }
    
    $scope.updateEditSelection = function($event,id){
		  var checkbox = $event.target ;  
		  var checked = checkbox.checked ;  
		  if(checked){  
		      $rootScope.editSelected.push(id) ;  
		  }else{  
		      var idx = $rootScope.editSelected.indexOf(id) ;  
		      $rootScope.editSelected.splice(idx,1) ;  
		  }  
    } ; 
	
});

app.directive("userdelete",function($rootScope,$document,userServer){
	return{
		restrict:"E",
		require:"ngModel",
		link:function(scope,element,attrs,ngModel){
			element.bind("click",function(){
				if(confirm("您确定要删除吗？")){
					var id = ngModel.$modelValue.id;
					console.log(id);
					scope.$apply(function(){
						for(var i=0;i<scope.userinfos.length;i++){
							if(scope.userinfos[i].id == id){
								userServer.deleteUserInfo(id).then(function(data){
									if(data.state){
										alert("删除成功");
										userServer.getUserInfo($rootScope.useruser).then(function(data){
											$rootScope.userinfos = data.data;
											console.log(1111);
											console.log($rootScope.userinfos);
										});
									}else{
										alert(data);
									}
								});
							}
						}
					});
					
					
				}
//				var id = ngModel.$modelValue.userName;
//				scope.$apply(function(){
//					for(var i = 0;i<scope.users.length;i++){
//						if(scope.users[i].userName==id){
//							userService.deleteUserInfo(ngModel.$modelValue).then(function(data){
//								window.wxc.xcConfirm(data.message, window.wxc.xcConfirm.typeEnum.info);
//								$rootScope.count = $rootScope.count-1;
//								if(data.states){
//									userService.getUserInfos().then(function(data){
//										$rootScope.users = data.data;
//									});
//								}
//							});
//							
//						}
//					}
//				});
			});
		}
	}
});

app.directive("useredit",function($rootScope,$document,userServer){
	return{
		restrict:"E",
		require:"ngModel",
		link:function(scope,element,attrs,ngModel){
			element.bind("click",function(){
					var id = ngModel.$modelValue.id;
					scope.$apply(function(){
						for(var i=0;i<scope.userinfos.length;i++){
							if(scope.userinfos[i].id == id){
								console.log(ngModel.$modelValue);
								var result = ngModel.$modelValue;
								$("#edituser").click();
								$rootScope.edituser.userName = result.userName;
								$rootScope.edituser.phonenumber = result.phonenumber;
								$rootScope.edituser.name = result.name;
								$rootScope.edituser.email = result.email;
								if(result.sex == "男"){
									$rootScope.edituser.sex = 1;
								}else{
									$rootScope.edituser.sex = 0;
								}
								$rootScope.edituser.worktype = result.worktype;
								$rootScope.edituser.equiptype = result.equiptype;
								$rootScope.edituser.equipnumber = result.equipnumber;
								$rootScope.edituser.equipstate = result.equipstate;
								
								$rootScope.edituser.id = result.id;
								$rootScope.edituser.role = result.role;
								if('1'!=result.role&&"4"!=result.role){
									$rootScope.showeditcontext = true;
								}else{
									$rootScope.showeditcontext = false;
								}
								
								$rootScope.editids = [];
								var correlations = result.correlations;
								for(var j=0;j<correlations.length;j++){
									$rootScope.editids.push(correlations[j].gradeid);
								}
								console.log($rootScope.editids);
								$rootScope.editSelected = $rootScope.editids;
								
							}
						}
					});
//				var id = ngModel.$modelValue.userName;
//				scope.$apply(function(){
//					for(var i = 0;i<scope.users.length;i++){
//						if(scope.users[i].userName==id){
//							userService.deleteUserInfo(ngModel.$modelValue).then(function(data){
//								window.wxc.xcConfirm(data.message, window.wxc.xcConfirm.typeEnum.info);
//								$rootScope.count = $rootScope.count-1;
//								if(data.states){
//									userService.getUserInfos().then(function(data){
//										$rootScope.users = data.data;
//									});
//								}
//							});
//							
//						}
//					}
//				});
			});
		}
	}
});