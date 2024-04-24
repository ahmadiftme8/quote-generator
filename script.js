import { localQuotes } from "./quotes.js";

const quoteContainer = document.querySelector('.quote-container');
const qcc = document.querySelector('.q-c-c');
const quoteItself = document.querySelector('.quote-itself');
const autherName = document.querySelector('.auther-name');
const newQuoteBtn = document.querySelector('.new-quote-btn');
const twitterBtn = document.querySelector('.twitter-btn');
const loader = document.querySelector('.loader');
const qANDaContainer = document.querySelector('.quoteAndAutherContainer');
const loaderContainer= document.querySelector('.loader-container');

function Showloading(){
    loaderContainer.hidden = false;
    qANDaContainer.hidden = true;
}

function completeLoading(){
    qANDaContainer.hidden = false;
    loaderContainer.hidden = true;
    
}



async function getQuoate(){
    await Showloading();
    const proxyUrl = 'https://corsproxy.io/?';
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json ';
    

    try{
        
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();

        quoteItself.innerText = data.quoteText;
        autherName.innerText= data.quoteAuthor;
        await completeLoading();

    }catch(error){
        getQuoate();
        console.log(`oops! no quote!`, error);
    }
    
}

//on load
getQuoate();

newQuoteBtn.addEventListener('click',  getQuoate)


//Tweet Quote

function tweetQuote(){
    
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteItself.innerText} - ${autherName.innerText}`;
    window.open(twitterUrl, '_blank')
}

//Tweet Button

twitterBtn.addEventListener('click', tweetQuote );







