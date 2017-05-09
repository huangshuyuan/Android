/**
 * Created by Administrator on 2017/1/12.
 */
function savaData(id) {
    var data = document.getElementById(id).value;
    var time = new Date().getTime();
    localStorage.setItem(time, data);
    alert("数据已储存");
    loadStorage("msg");
}

function loadStorage(id) {/*加载数据*/
    var result = "<table border='1'>";
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var date = new Date();
        date.setTime(key);
        result += "<tr><td>" + value + "</td><td>" + date + "</td></tr>";

    }
    result += "</table>";

    var tagert = document.getElementById(id);
    tagert.innerHTML = result;
}

function deleteData() {
    localStorage.clear();
    alert("数据已清除");
    loadStorage("msg");

}