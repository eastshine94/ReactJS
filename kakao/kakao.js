let chatObjs = {
  "chat" : []
};

let flag = 1;
let order = 0;

let init_chat = document.getElementsByClassName("chat");

for(let i=0; i<init_chat.length; i++){
    if(init_chat[i].className === "chat chat_right"){
        chatObjs.chat.push({
            "uid": 0,
            "order": order,
            "content": init_chat[i].innerHTML
          });
          flag = 2;
    }
    else{
        chatObjs.chat.push({
            "uid": 1,
            "order": order,
            "content": init_chat[i].innerHTML
          });
          flag =1;
    }
    
      order += 1;
}
setInterval(function(){
  let bonochat = {
    "talk" : ["국회는 법률에 저촉되지 아니하는 범위안에서 의사와 내부규율에 관한 규칙을 제정할 수 있다.",
    "대통령은 취임에 즈음하여 다음의 선서를 한다. 모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다.",
    "모든 국민은 그 보호하는 자녀에게 적어도 초등교육과 법률이 정하는 교육을 받게 할 의무를 진다.",
    "저작자·발명가·과학기술자와 예술가의 권리는 법률로써 보호한다.",
    "대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다.",
    "정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을 보조할 수 있다."
    ]
  };

  let div = document.createElement("div");
  let bono_say = bonochat.talk[Math.floor(Math.random() * 6)];
  if(flag ===2 || document.getElementsByClassName("user_block").length===0){
    div.innerHTML = ('<div class="user_block">'+
    '<div class="user_thumbnail"></div>'+
    '<div class="chat_block_left">'+
    '<div class="user_id">보노보노</div>'+
    '<div><div class="chat chat_left">'+ bono_say +'</div></div>');
    document.getElementById("chat_panel").appendChild(div);
  }
  else {
    let block_left = document.getElementsByClassName("chat_block_left");
    div.innerHTML = (
      '<div><div class="chat chat_left">'+
      bono_say +
      '</div></div>');
    block_left[block_left.length-1].appendChild(div);
  }

  flag = 1; 
  chatObjs.chat.push({
    "uid": 1,
    "order": order,
    "content": bono_say
  });

  order += 1;
  document.getElementById("chat_panel").scrollTop = document.getElementById("chat_panel").scrollHeight;
},5000);



function onTransferClick(){
  if(document.getElementById("input_control").value !== ""){ 
    let div = document.createElement("div");
    div.innerHTML = ('<div class="user_block">'+
    '<div class="chat_block_right">'+
    '<div><div class="chat chat_right">'+
    document.getElementById("input_control").value
    +'</div></div>'+'</div></div>');
    
    document.getElementById("chat_panel").appendChild(div);
    document.getElementById("chat_panel").scrollTop = document.getElementById("chat_panel").scrollHeight;
    
    
    chatObjs.chat.push({
      "uid": 0,
      "order": order,
      "content": document.getElementById("input_control").value
    });
    order += 1;

    flag = 2;
    document.getElementById("input_control").value = "";
  }
}

function onExportClick(){
  console.log(JSON.stringify(chatObjs, null, '\t'));
}

function onInputKeyDown(event){
  if(event.keyCode == 13 && document.getElementById("input_control").value !== ""){ 
    onTransferClick();
  }
  
}