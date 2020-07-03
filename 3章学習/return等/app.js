function add(a,b){
	return a+b;
}sum=add(12,3);
alert(sum);

// メイン部分
var alertString;
alertString = addString("WebCamp");
 
// 作成した関数を呼び出す
alert(alertString);
 
// 作成した関数
function addString(strA){
    var addString = "Hello " + strA;
    return addString;
}