const newQuoteButton = document.querySelector('.button');
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author')
const colorChanger  = document.querySelectorAll('.color')



const apiLink ='https://game-of-thrones-quotes.herokuapp.com/v1/random'

const getQuotes = () => {
	axios.get(apiLink)
		.then(res => { 
			quoteText.textContent = res.data.sentence
			quoteAuthor.textContent = res.data.character.name
		})
}

// const colorr = colorChanger.forEach(el) => 

const colorChange = () => {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)
	colorChanger.style.color= `rgb(${r},${g},${b})`
}

newQuoteButton.addEventListener('click', getQuotes )
newQuoteButton.addEventListener('click', colorChange)

