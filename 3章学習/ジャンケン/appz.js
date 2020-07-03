var user_hand=prompt("グー、チョキ、パーのいずれかを記入しなさい。");
var js_hand=getJShand();
var judge=winLose(user_hand,js_hand);
alert("あなたの選んだ手は"+user_hand+"です。JavaSpiritの選んだ手は"+js_hand+"です。結果は"+judge+"です");

function getJShand(){
	var js_hand_number=Math.floor(Math.landom()*3);
	var hand_name;

	if(js_hand_number==0){
		hand_name="グー";
	}else if(js_hand_number==1){
		hand_name="チョキ";
	}else if(js_hand_number==2){
		hand_name="パー";
	}
	return hand_name;
}

function winLose(user_hand,js_hand){
	var winLoseStr;

	if(user_hand=="グー"){
		if(js_hand=="グー"){
			winLoseStr="あいこ";
		}else if(js_hand=="チョキ"){
			winLoseStr="勝ち";
		}else if(js_hand=="パー"){
			winLoseStr="負け"
		}
	}else if(user_hand=="チョキ"){
		if(js_hand=="グー"){
			winLoseStr="あいこ";
		}else if(js_hand=="チョキ"){
			winLoseStr="勝ち";
		}else if(js_hand=="パー"){
			winLoseStr="勝ち"
		}
	}else if(user_hand=="パー"){
		if(js_hand=="グー"){
			winLoseStr="勝ち";
		}else if(js_hand=="チョキ"){
			winLoseStr="負け";
		}else if(js_hand=="パー"){
			winLoseStr="あいこ"
		}
}
      return winLoseStr;
       }
