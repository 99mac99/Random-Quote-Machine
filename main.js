const newQuoteButton = document.querySelector('.button');
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author')
const text = document.querySelector('.text')

const apiLink ='https://game-of-thrones-quotes.herokuapp.com/v1/random'

const getQuotes = () => {
	axios.get(apiLink)
		.then(res =>{ 
			quoteText.textContent = res.data.sentence
			quoteAuthor.textContent = res.data.character.name
			console.log(res.data )
			console.log(quotes)
			console.log(author)
		})

}


getQuotes()





// newQuoteButton.addEventListener('click', showRandomQuotes);
// newQuoteButton.addEventListener('click', colorChanger);




// const showRandomQuotes = () => {
	// 	const number = Math.floor(Math.random() * (quotes.length - 1));
	// 	console.log(number);
	// 	quoteText.textContent = quotes[number];
	
	// };
	
	// const colorChange = () => {
		// const r = Math.floor(Math.random() * 255)
		// const g = Math.floor(Math.random() * 255)
		// const b = Math.floor(Math.random() * 255)
		// colorChanger.style.background = `rgb(${r},${g},${b})`
		// }
		
		// const colorTextChange = () => {
			// const r = Math.floor(Math.random() * 255)
			// const g = Math.floor(Math.random() * 255)
			// const b = Math.floor(Math.random() * 255)
			// colorTextChanger.style.color= `rgb(${r},${g},${b})`
			// }


			// const colorTextChange = () => {
				// const r = Math.floor(Math.random() * 255)
				// const g = Math.floor(Math.random() * 255)
				// const b = Math.floor(Math.random() * 255)
				// colorTextChanger.style.color = `rgb(${r},${g},${b})`
				// } POPRAWIĆ NIE DZIAŁA