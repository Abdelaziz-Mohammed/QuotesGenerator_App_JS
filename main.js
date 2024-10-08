const quoteBtn = document.getElementById('quote-btn');
const tweetBtn = document.getElementById('tweet-btn');
const quoteBox = document.querySelector('.quote');
const autherBox = document.querySelector('.auther');
const apiLink = 'https://api.api-ninjas.com/v1/quotes?category=success';
const apiKey = 'NWpoggZJWCRrezhbU7Iz7g==gj0sJVagBeuInYgh';

async function getQuote() {
    const response = await fetch(apiLink, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey
        }
    });
    const [data] = await response.json();
    if (response.status === 200 && response.ok === true) {
        quoteBox.innerHTML = data.quote;
        autherBox.innerHTML = data.author;
    }
    else {
        console.log('Error fetching quote');
        quoteBox.innerHTML = 'Loading...';
        autherBox.innerHTML = 'Loading...';
    }
}

function tweetQuote() {
    window.open(
        `https://twitter.com/intent/tweet?text=${quoteBox.innerHTML}
        By ${autherBox.innerHTML}`, 
        "Tweet Window", 
        "width=600, height=400"
    );
}

getQuote();

quoteBtn.addEventListener('click', getQuote);

tweetBtn.addEventListener('click', tweetQuote);
