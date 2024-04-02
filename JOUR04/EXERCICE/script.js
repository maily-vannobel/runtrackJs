


const tesst = fetch("expression.txt") // Méthode fetch(argument obligé URL)
.then(res =>{ return res.json()
}) 
.then(json => console.log(json))