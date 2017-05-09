/**
 * Created by Administrator on 2017/1/13.
 */
var table = null;
var db = openDatabase("MsgData", "1.0", "My Data", 1024 * 100);
function init() {
    table = document.getElementById("table");
    showAllData();

}
function removeAllData() {
    for (var i = table.childNodes.length - 1; i >= 0; i--) {
        table.removeChild(table.childNodes[i]);
    }
    var tr = document.createElement("tr");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    th1.innerHTML = "姓名";
    th2.innerHTML = "留言";
    th3.innerHTML = "时间";
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    table.appendChild(tr);
}
function showData(row) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = row.name;
    var td2 = document.createElement("td");
    td2.innerHTML = row.message;
    var td3 = document.createElement("td");
    var t = new Date();
    t.setTime(row.time);
    td3.innerHTML = t.toLocaleDateString() + t.toLocaleTimeString();
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);
}
function showAllData() {
    db.transaction(function (tx) {
        tx.executeSql("CREATE  TABLE  IF NOT EXISTS MsgData(name TEXT,message TEXT,time INTEGER)", []);
        tx.executeSql("SELECT  * FROM MsgData", [], function (tx, rs) {
            removeAllData();
            for (var i = 0; i < rs.rows.length; i++) {
                showData(rs.rows.item(i));
            }

        })
    })

}
function addData(name, message, time) {
    db.transaction(function (tx) {
        tx.executeSql("INSERT INTO MsgData VALUES (?,?,?)", [name, message, time], function (tx, rs) {
                alert("成功");

            }, function (tx, error) {
                alert(error.source + "::" + error.message);
            }
        )
        ;

    })

}
function saveData() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("info").value;
    var time = new Date().getTime();
    addData(name, message, time);
    showAllData();

}