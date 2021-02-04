const url = 'https://api.exchangeratesapi.io/latest'
const base = document.querySelector('.base')

fetch(url)
    .then (response => response.json())
    .then (data => {
        console.log(data)
        const currencyBase = data[0].rates
        // console.log(currencyBase)
        base.innerHTML = `<p> ${currencyBase} </p>`


    })