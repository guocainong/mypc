
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 10 * (clientWidth / 375) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

// Swiper属性
// 第一个轮播图
var oneClass = {
    data: [
        {
            url: './src/images/banner1.png'
        },
        {
            url: './src/images/banner2.png'
        },
        {
            url: './src/images/banner3.png'
        }
    ],
    render: function () {
        var list = this.data;
        if (Array.isArray(list) && list.length > 0) {
            var result = '';
            list.forEach(function (item, index) {
                result += '<div class="swiper-slide">'
                    + '<img src="' + item.url + '" alt="">'
                    + '</div>';
            })
            $('#one-swiper-wrapper').html(result);
            var mySwiper1 = new Swiper('#swiper-container1', {
                autoplay: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        }
    }
}
oneClass.render();
// 第二个轮播图
var classSwiper = null;
var handelSwiper = function () {
    if (classSwiper && classSwiper.destroy) {
        classSwiper.destroy(false);
    }
    var pageCount = document.documentElement.clientWidth < 768 ? 1 : 3;
    classSwiper = new Swiper('#swiper-container2', {
        autoplay: true,
        loop: true, 
        slidesPerView: pageCount,
        pagination: {
            el: '#fenye2-swiper-pagination',
        }
    })
}
handelSwiper();

window.onresize = function () {
    handelSwiper();
}


// 移动端导航栏点击
var $ = function (id) {
    return document.getElementById(id);
}
$('sidnav').onclick = function (e) {
    e.stopPropagation();
    $('uls').style.display = 'block';
}
document.onclick = function () {
    if (document.documentElement.clientWidth <= 640) {
        $('uls').style.display = 'none';

    }
}

