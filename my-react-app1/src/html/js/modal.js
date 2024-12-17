
$(function () {
    var mdwBtn = $('.modalBtn');  // 開啟彈出視窗的按鈕
    var overlayOpacity = 0.7;  // 彈出視窗的透明度
    var fadeTime = 500;  // 彈出視窗的淡入淡出時間

    mdwBtn.on('click', function (e) {
        e.preventDefault();

        var setMdw = $(this),
            setHref = setMdw.attr('href'),
            setSource = $(setHref).html(),
            wdHeight = $(window).height();

        //插入到網頁端的HTML，不包含 #modalInclude的ID元素
        $('body').append('<div id="mdOverlay"></div><div id="mdWindow"><div class="mdClose">x</div><div id="contWrap">' + setSource + '</div></div>');

        //取得外部檔案內容
        // $('#contWrap').load(setHref);

        //將產生的彈出視窗與遮罩元素，透明度為0
        $('#mdOverlay, #mdWindow').css({ display: 'block', opacity: '0' });
        //將遮罩元素高度設定為視窗高度並淡入動畫顯示
        $('#mdOverlay').css({ height: wdHeight }).stop().animate({ opacity: overlayOpacity }, fadeTime);
        //彈出視窗也可以淡入動畫顯示
        $('#mdWindow').stop().animate({ opacity: '1' }, fadeTime);

        //由於視窗大小改變時，遮罩元素仍要覆蓋整個頁面，因此需要取得高度後重新設定遮罩元素高度
        $(window).on('resize', function () {
            //取得視窗高度
            var newHeight = $(window).height();
            //重新設定遮罩元素高度
            $('#mdOverlay').css({ height: newHeight });
        });

        //關閉彈出視窗或按下關閉紐時
        $('.mdClose, #mdOverlay').on('click', function () {
            //淡出彈出視窗與遮罩元素
            $('#mdWindow, #mdOverlay').stop().animate({ opacity: '0' }, fadeTime, function () {
                //移除元素
                $('#mdWindow, #mdOverlay').remove();
            });
        });
    });
});