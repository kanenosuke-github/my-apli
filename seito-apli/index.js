//変数
let greet = 'Hello World';



//定数
const bigGreet = 'goodmorning';


//配列
let inoki = ['いーち','にーい','さーん','だー！'];

//ループ文
//let index =0;
//while(index < inoki.length){
  //繰り返したい命令
  //console.log(inoki[index]);
  //index++;
//}

//if else
//if(inoki.length > 5){
 // console.log('ボンバイエ!');
//}else{
 // console.log('ボンバ、、、');
//}

//関数
const test = (arg) => {
  //ここに実行したい命令を書く
 if(inoki.length > arg){
  console.log('ボンバイエ！');
 }else{
  console.log('ボンバ、、、');
 }
};

//オブジェクト
const greet2 = {
  color:'pink',
  size:'large',
  purfume:'mint',
  goToilet:() =>{
    console.log('Hello,world!');
  }
};

document.getElementsByTagName('button')[0].addEventListener('click',()=> {
  window.alert('hello world')
});
