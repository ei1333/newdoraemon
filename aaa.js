
var basex;
var flag; //進行方向 1:右 -1:左
var mybody_y; //自分の位置 = 今の跳ね返す位置
var enemybody_y;

window.onload = function(){
  basex = 300;
  basey = 0;
  flag = 1;
  mybody_y = 130;
  enemybody_y = 130;
  flag2 = 1;
  Main();
};

function Main(){
  paint();

  move_doraemon();
  if(basex > 1000) basex = -300;
  else if(basex < -300) basex = 1000;
  basey += Math.random() * 2 * flag2;
  if(basey > 250) flag2 *= -1;
  else if(basey < -250) flag2 *= -1;
  setTimeout("Main()", 10);
}

function move_doraemon(){
  My_body_hit();
  Enemy_body_hit();

  basex += 5 * flag;
}

function Enemy_body_hit(){
  if(flag == 1 && basex >= -168 && basex <= -100){
    if(80 + basey <= enemybody_y &&  enemybody_y <= 330 + basey){
      flag *= -1;
    }
  }else if(flag == -1 && basex >= 140 && basex <= 160){
    if(80 + basey <= enemybody_y &&  enemybody_y <= 330 + basey){
      flag *= -1;
    }
  }
}
function My_body_hit(){
  if(flag == 1 && basex >= 438 && basex <= 500){
    if(basey + 80 <= mybody_y &&  mybody_y <= 330 + basey){
      flag *= -1;
    }
  }else if(flag == -1 && basex >= 700 && basex <= 767){
    if(basey + 80 <= mybody_y &&  mybody_y <= 330 + basey){
      flag *= -1;
    }
  }
}


function paint(){
  var canvas = document.getElementById("stage");
  var ctx = canvas.getContext('2d');


  ctx.clearRect( 0, 0, 1050, 750);

  ctx.beginPath();
  ctx.fillStyle = 'rgb( 0, 128, 255)';
  ctx.arc(200 + basex, 200 + basey, 150, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.stroke();

  for(var i = 0; i < 15; i++){
    ctx.save();
  }


  ctx.beginPath();
  ctx.scale(1.0,0.9);
  ctx.fillStyle = 'rgb( 255, 255, 255)'; //白
  ctx.arc(200 + basex, 255 + basey / 0.9, 130, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.stroke();

  ctx.restore();
  ctx.beginPath();
  ctx.scale(1.0,1.4);
  ctx.fillStyle = 'rgb( 255, 255, 255)'; //白
  ctx.arc(165 + basex, 90 + basey / 1.4, 35, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();

  ctx.restore();
  ctx.beginPath();
  ctx.scale(1.0,1.4);
  ctx.fillStyle = 'rgb( 255, 255, 255)'; //白
  ctx.arc(235 + basex, 90 + basey / 1.4, 35, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();

  ctx.restore();
  ctx.beginPath();
  ctx.fillStyle = 'rgb( 0, 0, 0)'; //黒
  ctx.arc(215 + basex, 130 + basey, 8, 0, Math.PI*2, false);
  ctx.fill();

  ctx.restore();
  ctx.beginPath();
  ctx.fillStyle = 'rgb( 0, 0, 0)'; //黒
  ctx.arc(185 + basex, 130 + basey, 8, 0, Math.PI*2, false);
  ctx.fill();

  ctx.restore();
  ctx.beginPath();
  ctx.fillStyle = 'rgb( 255, 0, 0)'; //赤
  ctx.arc(200 + basex, 175 + basey, 18, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();

  ctx.restore();
  ctx.beginPath();
  ctx.fillStyle = 'rgb( 255, 255, 255)'; //白
  ctx.arc(195 + basex, 170 + basey, 5, 0, Math.PI*2, false);
  ctx.fill();

  ctx.restore();
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle="#000000";   // 黒
  ctx.moveTo(200 + basex,193 + basey);
  ctx.lineTo(200 + basex,300 + basey);
  ctx.stroke();

  ctx.restore();
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle="#000000";   // 黒
  ctx.moveTo(100 + basex,250 + basey);
  ctx.quadraticCurveTo( 200 + basex, 350 + basey, 300 + basex, 250 + basey);
  ctx.stroke();

  ctx.restore();
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle="#000000";   // 黒
  ctx.moveTo(170 + basex, 200 + basey);
  // ctx.lineTo(85, 180);
  ctx.lineTo(300, 180);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(170 + basex, 220 + basey);
  //  ctx.lineTo(85, 220);
  ctx.lineTo(300, 220);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(170 + basex, 240 + basey);
  ctx.lineTo(300, 260);
  // ctx.lineTo(85, 260);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(230 + basex, 200 + basey);
  ctx.lineTo(530, 180);
  //ctx.lineTo(315 ,180);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(230 + basex, 220 + basey);
  ctx.lineTo(530, 220);
  //  ctx.lineTo(315 ,220);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(230 + basex,240 + basey);
  ctx.lineTo(530,260);
  // ctx.lineTo(315 ,260);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 25;
  ctx.lineCap = "round";
  ctx.moveTo(120 + basex,335 + basey);
  ctx.lineTo(280 + basex,335 + basey);
  ctx.strokeStyle = 'rgb( 255, 0, 0)'; //白
  ctx.stroke();
  
  ctx.restore();
  ctx.beginPath();
  ctx.fillStyle = 'rgb( 255, 255, 0)'; //赤
  ctx.arc(200 + basex, 345 + basey, 20, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(200 + basex,345 + basey);
  ctx.lineTo(200 + basex,365 + basey);
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.restore();
  ctx.beginPath();
  ctx.fillStyle = 'rgb( 0, 0, 0)'; //赤
  ctx.arc(200 + basex, 345 + basey, 5, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(182 + basex,338 + basey);
  ctx.lineTo(218 + basex,338 + basey);
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 25;
  ctx.lineCap = "round";
  ctx.moveTo(800,mybody_y - 100);
  ctx.lineTo(800,mybody_y + 100);
  ctx.strokeStyle = 'rgb( 255, 0, 0)'; //白
  ctx.stroke();


  ctx.beginPath();
  ctx.lineWidth = 25;
  ctx.lineCap = "round";
  ctx.moveTo(200,enemybody_y - 100);
  ctx.lineTo(200,enemybody_y + 100);
  ctx.strokeStyle = 'rgb( 255, 0, 0)'; //白
  ctx.stroke();

  ctx.restore();
}

document.onkeydown = function(e){
  var keycode ;
  if (e != null) {
    keycode = e.which;
    e.preventDefault(); 
    e.stopPropagation(); 
  } else { 
    keycode = e.which;
    event.returnValue = false; 
    event.cancelBubble = true; 
  }
  if( keycode == 38){
    //alert("Push Up");
    mybody_y -= 10;
  }else if( keycode == 40){
    // alert("Push Down");
    mybody_y += 10;
  }else if( keycode == 65){
    enemybody_y -= 10;
  }else if( keycode == 90){
    enemybody_y += 10;
  }
}
