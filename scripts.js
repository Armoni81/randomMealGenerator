
// const mainTextId = document.getElementById('secondaryText')
// fetch( 'https://www.themealdb.com/api/json/v1/1/random.php')
// .then((response)=>  response.json() )
// .then((data)=> {
// 	let meal = data.meals[0].strMeal;
// 	let yTLink = data.meals[0].strYoutube;
// 	let splitLink = yTLink.split(".com/");
// 	let uniqueHashYT =splitLink[1].split("=")[1]
// 	let finalLink = splitLink[0] + '.com/embed/' + uniqueHashYT
// 	const video = document.getElementById('ytVideo')
// 	video.src = finalLink
// 	document.getElementById('secondaryText').innerHTML= 'hi'
// 	document.getElementById('youTube').innerHTML =  'How to make your' + " " +meal
	
//  
function displayRandomFood() {
	const mainTextId = document.getElementById('secondaryText')
	fetch( 'https://www.themealdb.com/api/json/v1/1/random.php')
	.then((response)=>  response.json() )
	.then((data)=> {
		console.log(data)
		let meal = data.meals[0].strMeal;
		let yTLink = data.meals[0].strYoutube;
		let splitLink = yTLink.split(".com/");
		let uniqueHashYT =splitLink[1].split("=")[1]
		let finalLink = splitLink[0] + '.com/embed/' + uniqueHashYT
		const video = document.getElementById('ytVideo')
		video.src = finalLink
		document.getElementById('secondaryText').innerHTML= 'hi'
		document.getElementById('youTube').innerHTML =  'How to make your' + " " +meal
	 const mainTextId = document.getElementById('secondaryText').innerHTML = meal;
	}
	)}