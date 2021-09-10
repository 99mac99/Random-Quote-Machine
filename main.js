const newQuoteButton = document.querySelector('.button');
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const colorTextChanger = document.querySelector('.button')
const colorChanger = document.querySelector('.button')


const quotes = [
	'Genius is one percent inspiration and ninety-nine percent perspiration.',
	'A house divided against itself cannot stand.',
	'Difficulties increase the nearer we get to the goal.',
	'Fate is in your hands and no one elses',
	'Be the chief but never the lord.',
	'Nothing happens unless first we dream.',
	'Well begun is half done.',
	'Life is a learning experience, only if you learn.',

]

const authors = [
	'Thomas Edison',
	'Yogi Berra',
	'Abraham Lincoln',
	'Johann Wolfgang von Goethe',
	'Byron Pulsifer',
	'Lao Tzu',
	'Carl Sandburg',
	'Aristotle',
	'Yogi Berra',
];

const showRandomQuotes = () => {
	const number = Math.floor(Math.random() * (quotes.length - 1));
	console.log(number);
	quoteText.textContent = quotes[number];

};

const colorChange = () => {
const r = Math.floor(Math.random() * 255)
const g = Math.floor(Math.random() * 255)
const b = Math.floor(Math.random() * 255)
colorChanger.style.background = `rgb(${r},${g},${b})`
}

const colorTextChange = () => {
const r = Math.floor(Math.random() * 255)
const g = Math.floor(Math.random() * 255)
const b = Math.floor(Math.random() * 255)
colorTextChanger.style.color= `rgb(${r},${g},${b})`
}





// const colorTextChange = () => {
// const r = Math.floor(Math.random() * 255)
// const g = Math.floor(Math.random() * 255)
// const b = Math.floor(Math.random() * 255)
// colorTextChanger.style.color = `rgb(${r},${g},${b})`
// } POPRAWIĆ NIE DZIAŁA


newQuoteButton.addEventListener('click', showRandomQuotes);
newQuoteButton.addEventListener('click', colorChanger);



