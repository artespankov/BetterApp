// write a function to retrieve blob of json
// execute ajax request
// use the 'fetch' function - part of the standard library in ES2015


const url = 'https://dummyjson.com/products';

// ES 2015 syntax
function fetchProducts(){
    fetch(url)
        .then(res => res.json())
        .then(json => console.log(json))
}

// ES 2017 syntax
async function fetchProducts() {
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
}

await fetchProducts();