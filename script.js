let cards=[
    {
        image:"https://tse4.mm.bing.net/th?id=OIP.js59q0deAPg7z1X2_jt76gHaIC&pid=Api&P=0&w=300&h=300",
        value:1,
        status:"closed"
    },
    {
image:"https://tse4.mm.bing.net/th?id=OIP.js59q0deAPg7z1X2_jt76gHaIC&pid=Api&P=0&w=300&h=300",
        value:1,
        status:"closed"
    },
    {
       image:"https://tse1.mm.bing.net/th?id=OIP.ivOlrdQklmhQHCQZ-Md6JwHaJZ&pid=Api&P=0&w=300&h=300",
        value:2,
        status:"closed"
    },
    {
       image:"https://tse1.mm.bing.net/th?id=OIP.ivOlrdQklmhQHCQZ-Md6JwHaJZ&pid=Api&P=0&w=300&h=300",
        value:2,
        status:"closed"
    },
    {
       image:"https://tse4.mm.bing.net/th?id=OIP.gLOwcHZ6d2SnQacik3_-SAHaLi&pid=Api&P=0&w=300&h=300",
        value: 3,
        status:"closed"
    },
    {
       image:"https://tse4.mm.bing.net/th?id=OIP.gLOwcHZ6d2SnQacik3_-SAHaLi&pid=Api&P=0&w=300&h=300",
        value: 3,
        status:"closed"
    },
    {
       image:"https://tse1.mm.bing.net/th?id=OIP.f10Vv6zFHNdDlmyOgB1GjwHaLH&pid=Api&rs=1&c=1&qlt=95&w=74&h=111",
        value: 4,
        status:"closed"
    },
    {
       image:"https://tse1.mm.bing.net/th?id=OIP.f10Vv6zFHNdDlmyOgB1GjwHaLH&pid=Api&rs=1&c=1&qlt=95&w=74&h=111",
        value: 4,
        status:"closed"
    },
    {
       image:"https://tse1.mm.bing.net/th?id=OIP.v0X5iaMJyeQbiwyUCgIE5AHaK9&pid=Api&rs=1&c=1&qlt=95&w=84&h=124",
        value: 5,
        status:"closed"
    },
    {
       image:"https://tse1.mm.bing.net/th?id=OIP.v0X5iaMJyeQbiwyUCgIE5AHaK9&pid=Api&rs=1&c=1&qlt=95&w=84&h=124",
        value: 5,
        status:"closed"
    },

]
//shuffle the array everytime
let temp;
for( let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
temp=cards[i];
cards[i]=cards[j];
cards[j]=temp;

}
let cardsCopy=cards;
//display html in cards
function displayCards(data){
    let cardsString="";
   data.forEach(function(card,index) {
       cardsString+=`
    <div class="card" style="background-image:url('${card.image}')">
<div class="overlay ${card.status}"
 onclick="openCard(${index})" >
    </div>

       </div>
       
       `;
       
   });
   document.getElementById('cards').innerHTML=cardsString;


}
displayCards(cards);
//do the game
let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

cards[index].status="opened";
if(cardCount===1){
    val1=cards[index].value;
    cardCount++;
}
else if(cardCount===2){
    val2=cards[index].value;
    if(val1===val2){
        score++;
        document.getElementById('score').innerText=score;
        //resetting after one pick 
        val1=null;
        val2=null;
        cardCount=1;
    }
    else{
//          val1=null;
//          val2=null;
//         score=0;
//          cardCount=1;
//          document.getElementById('score').innerText=score;
//  cards=cardCount;
 
//or
     alert("Game over");
     location.reload();
        

    }
}
displayCards(cards);


}