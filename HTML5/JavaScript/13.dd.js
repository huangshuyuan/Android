/**
 * Created by Administrator on 2017/4/21.
 */
window.onload = function () {
    imgLocation("contanier", "box")//瀑布流
    var imgData = {
        "data": [{"src": "2.jpg"}, {"src": "2.jpg"},
            {"src": "2.jpg"}, {"src": "2.jpg"}, {"src": "2.jpg"},
            {"src": "1.jpg"}, {"src": "4.jpg"}, {"src": "6.jpg"}, {"src": "3.jpg"}]
    };
    window.onscroll = function () {
        if (checkFlag()) {
            var cpareng = document.getElementById("contanier");
            for (var i = 0; i < imgData.data.length; i++) {
                var content = document.createElement("div");
                content.className = "box";
                cpareng.appendChild(content);
                var boximg = document.createElement("div");
                boximg.className = "boximg";
                content.appendChild(boximg);
                var img = document.createElement("img");
                img.src = "13img/" + imgData.data[i].src;
                boximg.appendChild(img);
            }
            imgLocation("contanier", "box")//瀑布流
        }
    }
}

function checkFlag() {
    var cpareng = document.getElementById("contanier");
    var ccontent = getChildElement(cpareng, "box");
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;//最后一张图片
    // console.log(lastContentHeight);

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if (lastContentHeight < scrollTop + pageHeight
    ) {
        return true;
    }
}
/*实现瀑布流*/
function imgLocation(parent, content) {
    //获取父级看控件
    var cparenr = document.getElementById(parent);
    var ccontent = getChildElement(cparenr, content);
    // console.log(ccontent.length);
    var imgWidth = ccontent[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / imgWidth);
    cparenr.style.cssText = "width:" + imgWidth * cols + "px;margin:0px auto ";

    var boxHeightArr = [];
    for (var i = 0; i < ccontent.length; i++) {
        if (i < cols) {
            boxHeightArr[i] = ccontent[i].offsetHeight;//存储所有高度
        } else {
            var minHeight = Math.min.apply(null, boxHeightArr);
            var position = getminHeightLocation(boxHeightArr, minHeight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minHeight + "px";
            ccontent[i].style.left = ccontent[position].offsetLeft + "px";//距左边位置
            boxHeightArr[position] = boxHeightArr[position] + ccontent[i].offsetHeight;
        }


    }


}

function getminHeightLocation(boxheightArr, minHeight) {
    for (var i in boxheightArr) {
        if (boxheightArr[i] == minHeight) {
            return i;
        }
    }
}

function getChildElement(parent, content) {
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");
    for (var i = 0; i < allcontent.length; i++) {
        if (allcontent[i].className == content) {
            contentArr.push(allcontent[i]);
        }


    }
    return contentArr;
}