/**
 * Created by Administrator on 2017/1/12.
 */
function saveStorage(id) {
    var target = document.getElementById(id);
    var str = target.value;
    //保存数据方法
    sessionStorage.setItem("message", str);

}
function loadStorage(id) {
    var target = document.getElementById(id);
    //读取数据
    var msg = sessionStorage.getItem("message");
    target.innerHTML = msg;

}

function saveLocalStorage(id) {/*永久保存*/
    var target = document.getElementById(id);
    var str = target.value;
    //保存数据方法
    localStorage.setItem("message", str);

}
function loadLocalStorage(id) {
    var target = document.getElementById(id);
    //读取数据
    var msg = localStorage.getItem("message");
    target.innerHTML = msg;

}