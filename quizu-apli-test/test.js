const quiz = [
  {
    question:'パンはパンでも食べられないパンは？',
    answers:[
      'フライパン',
      'カレーパン',
      'メロンパン',
      '食パン'
    ],
    correct :'フライパン'
  }, {
    question:'パンダはパンダでもクレジットカードのパンダといえば？',
    answers:[
      'ラッキーパンダ',
      '上野動物園のパンダ',
      '楽天パンダ',
      'パンダコパンダ'
    ],
    correct :'楽天パンダ'
  },
  {
    question:'パンツはパンツでも存在しないパンツは？',
    answers:[
      'アタック',
      'ブリーフ',
      'トランクス',
      'ボクサー'
    ],
    correct :'アタック'
  },
];

//データセット
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;





const $button = document.getElementsByTagName('button');

//定数の文字列をHTMLに反映させる
//$button[0].textContent = answers[0];
//$button[1].textContent = answers[1];
//$button[2].textContent = answers[2];
//$button[3].textContent = answers[3];


//クイズの問題文、選択肢を定義
const setupQuiz = () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
let buttonIndex = 0;
const buttonLength = $button.length;
while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent =quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}
}

//↓これは↑の関数を呼び出しているコード。↓のコードが無いと、↑のsetupQuiz関数（自作の関数）はブラウザ上に呼び出されない。
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++
  }else{
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたら性誤判定
let handlerIndex = 0;

while (handlerIndex < $button.length) {
  $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

//$button[0].addEventListener('click',(e) => {
//  clickHandler();
//});
//$button[1].addEventListener('click',(e) => {
//  clickHandler();
//});
//$button[2].addEventListener('click',(e) => {
//  clickHandler();
//});
//$button[3].addEventListener('click',(e) => {
//  clickHandler();
//});