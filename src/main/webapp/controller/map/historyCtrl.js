app.controller('historyCtrl', function ($scope, historyServer) {
    $scope.map = {};
    //地图显示
    var map = new AMap.Map("container", {
        resizeEnable: true,
        zoom: 10
    });
    AMap.plugin('AMap.ToolBar', function () {
        var toolbar = new AMap.ToolBar();
        map.addControl(toolbar)
    })
    //工具条
    AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.OverView'],
        function () {
            map.addControl(new AMap.ToolBar());

            map.addControl(new AMap.Scale());

            map.addControl(new AMap.OverView({isOpen: true}));
        });


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
    $("#searchhistory").click(function(map){
        var srartdate
        var enddate
        startdate=$('#startdate').val();
        enddate=$('#enddate').val();
        alert(map);
    });

    $scope.searchhistory = function () {
        $scope.map.startdate = $('#startdate').val();
        $scope.map.enddate = $('#enddate').val();
        console.log($scope.map);
        historyServer.getHistory($scope.map).then(function (data) {
            console.log(data);
            $scope.historys = data.data;
            var lineArr = [];
            if(data.data!=null){
                map = new AMap.Map('container', {
                    resizeEnable: true,
                    // center: [data.data[0].xloc, data.data[0].yloc],
                    center: [(Number(data.data[0].xloc)+Number(data.data[data.data.length-1].xloc))/2, (Number(data.data[0].yloc)+Number(data.data[data.data.length-1].yloc))/2],
                    zoom: 10
                });
                for(var i=0;i<data.data.length;i++){
                    var result = data.data[i];
                    lineArr.push([result.xloc,result.yloc]);
                };

                var marker = new AMap.Marker({ //添加自定义点标记
                    map: map,
                    position: [data.data[0].xloc, data.data[0].yloc], //基点位置
                    offset: new AMap.Pixel(-17, -42), //相对于基点的偏移位置
                    draggable: false,  //是否可拖动
                    content: '<div class="marker-route marker-marker-bus-end"></div>',  //自定义点标记覆盖物内容
                });
                marker.setTitle('定位方式:'+data.data[data.data.length-1].is_position+'\n位置:'+data.data[0].address+'\n时间:'+data.data[0].watch_date);

                var marker = new AMap.Marker({ //添加自定义点标记
                    map: map,
                    position: [data.data[data.data.length-1].xloc, data.data[data.data.length-1].yloc], //基点位置
                    // offset: new AMap.Pixel(-7, -30), //相对于基点的偏移位置
                    offset: new AMap.Pixel(-17, -42), //相对于基点的偏移位置
                    draggable: false,  //是否可拖动
                    content: '<div class="marker-route marker-marker-bus-from"></div>',  //自定义点标记覆盖物内容

                });
                marker.setTitle('定位方式:'+data.data[data.data.length-1].is_position+'\n位置:'+data.data[data.data.length-1].address+'\n时间:'+data.data[data.data.length-1].watch_date);

                // 设置鼠标划过点标记显示的文字提示

                // 设置label标签
                // marker.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
                //     offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
                //     content: "我是marker的label标签"
                // });
                //折线样式
                var polyline = new AMap.Polyline({
                    path: lineArr,          //设置线覆盖物路径
                    strokeColor: "#3366FF", //线颜色
                    strokeOpacity: 1,       //线透明度
                    strokeWeight: 5,        //线宽
                    strokeStyle: "solid",   //线样式
                    strokeDasharray: [10, 5] //补充线样式
                });
                polyline.setMap(map);
            }else {
                polyline.setMap(null);
                map = new AMap.Map('container', {
                    resizeEnable: true,
                    // center: [data.data[0].xloc, data.data[0].yloc],
                    // center: [(data.data[0].xloc+data.data[data.data.length-1].xloc)/2, (data.data[0].yloc+data.data[data.data.length-1].yloc)/2],
                    zoom: 10
                });
                alert("新地图");

            }
        });
    }
});