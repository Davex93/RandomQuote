var quotes=[
  {author:"Andrew Ryan",quote:"We all make choices, but in the end, our choices make us.",image:"images/Andrew.png"},
  {author:"Andrew Ryan",quote:"A man chooses. A slave obeys.",image:"images/Andrew.png"},
  {author:"Jack Ryan",quote:"Son... you're special. You were born to do great things.' And you know what? They were right.",image:"images/Jack.png"},
  {author:"Andrew Ryan",quote:"I am Andrew Ryan, and I'm here to ask you a question. Is a man not entitled to the sweat of his brow? 'No!' says the man in Washington, 'It belongs to the poor.' 'No!' says the man in the Vatican, 'It belongs to God.' 'No!' says the man in Moscow, 'It belongs to everyone.' I rejected those answers; instead, I chose something different. I chose the impossible. I chose... Rapture, a city where the artist would not fear the censor, where the scientist would not be bound by petty morality, Where the great would not be constrained by the small! And with the sweat of your brow, Rapture can become your city as well."},
  {author:"Little Sister",quote:"Look, Mr. Bubbles. It's an angel! I can see light coming from his belly. Wait a minute... he's still breathing. It's alright. I know he'll be an angel soon.",image:"images/littlesister.jpg"},
  {author:"Little Sister",quote:"Kill him, Mr. B! Kill him!",image:"images/littlesister.jpg"},
  {author:"Little Sister",quote:"Look daddy, he's dancing, dancing!",image:"images/littlesister.jpg"},
  {author:"Andrew Ryan",quote:"What is the difference between a man and a parasite? A man builds, a parasite asks, 'Where's my share?' A man creates, a parasite says, 'What will the neighbors think?' A man invents, a parasite says, 'Watch out, or you might tread on the toes of God...'",image:"images/Andrew.png"},
  {author:"Andrew Ryan",quote:"I believe in no God, no invisible man in the sky. But there is something more powerful than each of us, a combination of our efforts, a Great Chain of industry that unites us. But it is only when we struggle in our own interest that the chain pulls society in the right direction. The chain is too powerful and too mysterious for any government to guide. Any man who tells you different either has his hand in your pocket, or a pistol to your neck",image:"images/Andrew.png"},
  {author:"Atlas",quote:"Would you kindly?",image:"images/Atlasss.png"}
]




var i=0;

$(document).ready(function(){
newQuote();
$('.btn').click(function(){
newQuote();
});
});

function randomQuote(){
  return Math.floor((Math.random()*quotes.length-0+1)+0);
};

function newQuote(){
i= randomQuote();
$('#author').text('-'+  quotes[i].author);
$('#quote').text('" '+quotes[i].quote+' "');
$("#hero").attr("src",quotes[i].image);
}
