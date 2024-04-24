import { localQuotes } from "./quotes.js";

const quoteContainer = document.querySelector('.quote-container');
const qcc = document.querySelector('.q-c-c');
const quoteItself = document.querySelector('.quote-itself');
const autherName = document.querySelector('.auther-name');
const newQuoteBtn = document.querySelector('.new-quote-btn');
const twitterBtn = document.querySelector('.twitter-btn');
const loader = document.querySelector('.loader');

function showLoading(){
    qcc.hidden= true;
    loader.hidden = false;
    
    
}


function hideLoadingWhenComplete(){
    
    qcc.hidden= false;
    loader.hidden = true;
    
}


let apiQuotes = [];





function triggerNewQuote(){
    showLoading();
    const quote = apiQuotes[ Math.floor(Math.random()*apiQuotes.length)];
    console.log(quote);
   
    quoteItself.textContent = quote.text;
    autherName.textContent = quote.author;

    hideLoadingWhenComplete();
}

async function getQuote(){
    showLoading();
    const apiUrl = 'https://type.fit/api/quotes'

    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        triggerNewQuote();
    }catch{
        alert(error);
    }
    hideLoadingWhenComplete();
}

//on load



//New Quote Button

newQuoteBtn.addEventListener('click', triggerNewQuote )


//Tweet Quote

function tweetQuote(){
    
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteItself.textContent} - ${autherName.textContent}`;
    window.open(twitterUrl, '_blank')
}

//Tweet Button

twitterBtn.addEventListener('click', tweetQuote );

getQuote();






