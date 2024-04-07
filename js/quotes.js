const quotes = [
  {quote: "Autumn is a second spring when every leaf is a flower."}, 
  {quote: "Nothing is more despicable than respect based on fear."}, 
  {quote: "You cannot create experience. You must undergo it."}, 
  {quote: "Those who lack the courage will always find a philosophy to justify it."}, 
  {quote: "Blessed are the hearts that can bend; they shall never be broken."},
  {quote: "A man without ethics is a wild beast loosed upon this world."}, 
  {quote: "In the depth of winter I finally learned that there was in me an invincible summer."}, 
  {quote: "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life."}, 
  {quote: "I would rather live my life as if there is a God and die to find out there isn’t, than live as if there isn’t and to die to find out that there is."}, 
  {quote: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."}
]

const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child");



const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
auther.innerText = "The developer's favorite is Albert Camus!";