app.controller('locationCtrl', function ($scope, locationServer) {
    $scope.map = {};
    $scope.searchlocation = function () {
        locationServer.getLocation($scope.map).then(function (data) {
            console.log(data.data);
            $scope.locations = data.data;
            if (data.data!=null){
                map = new AMap.Map('container', {
                    resizeEnable: true,
                    // center: [data.data[0].xloc, data.data[0].yloc],
                    center: [(Number(data.data[0].xloc)+Number(data.data[data.data.length-1].xloc))/2, (Number(data.data[0].yloc)+Number(data.data[data.data.length-1].yloc))/2],
                    zoom: 10
                });
                console.log(1111);
                var xloc = data.data[0].xloc;
                var yloc = data.data[0].yloc;
                console.log(xloc+":"+yloc);
                marker = new AMap.Marker({
                    position: new AMap.LngLat(xloc,yloc)
                });
                console.log(marker);

                marker.setMap(map);
                //鼠标点击marker弹出自定义的信息窗体
                AMap.event.addListener(marker, 'click', function() {
                    infoWindow.open(map, marker.getPosition());
                });
                //实例化信息窗体
                var title = '人员位置信息',
                // var title = '姓名:<span style="font-size:11px;color:#F00;">价格:8888</span>',
                    content = [];
                content.push("姓名："+data.data[0].userName);
                content.push("时间："+data.data[0].watch_date);
                // content.push("<img src='https://tpc.googlesyndication.com/simgad/5843493769827749134'>地址："+data.data[0].address);
                content.push("电话："+data.data[0].phonenumber);
                content.push("地址："+data.data[0].address);

                content.push("<a style='color:rgba(13,11,106,0.87);text-decoration:underline;' href='http://101.37.34.43:8080/welleplus/main.html#/history'>历史轨迹</a>");
                var infoWindow = new AMap.InfoWindow({
                    isCustom: true,  //使用自定义窗体
                    content: createInfoWindow(title, content.join("<br/>")),
                    offset: new AMap.Pixel(16, -45)
                });

                //构建自定义信息窗体
                function createInfoWindow(title, content) {
                    var info = document.createElement("div");
                    info.className = "info";

                    //可以通过下面的方式修改自定义窗体的宽高
                    //info.style.width = "400px";
                    // 定义顶部标题
                    var top = document.createElement("div");
                    var titleD = document.createElement("div");
                    var closeX = document.createElement("img");
                    top.className = "info-top";
                    titleD.innerHTML = title;
                    closeX.src = "https://webapi.amap.com/images/close2.gif";
                    closeX.onclick = closeInfoWindow;

                    top.appendChild(titleD);
                    top.appendChild(closeX);
                    info.appendChild(top);

                    // 定义中部内容
                    var middle = document.createElement("div");
                    middle.className = "info-middle";
                    middle.style.backgroundColor = 'white';
                    middle.innerHTML = content;
                    info.appendChild(middle);

                    // 定义底部内容
                    var bottom = document.createElement("div");
                    bottom.className = "info-bottom";
                    bottom.style.position = 'relative';
                    bottom.style.top = '0px';
                    bottom.style.margin = '0 auto';
                    var sharp = document.createElement("img");
                    sharp.src = "https://webapi.amap.com/images/sharp.png";
                    bottom.appendChild(sharp);
                    info.appendChild(bottom);
                    return info;
                }

                //关闭信息窗体
                function closeInfoWindow() {
                    map.clearInfoWindow();
                }
            }

        });
    }

    $scope.toroad = function(){}

    //地图显示
    var map = new AMap.Map("container", {
        resizeEnable: true,
        zoom: 10
    });
    //高德地图工具条
    AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.OverView'],
        function () {
            map.addControl(new AMap.ToolBar());

            map.addControl(new AMap.Scale());

            map.addControl(new AMap.OverView({isOpen: true}));
        });
});

