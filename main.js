const url = 'https://api.exchangeratesapi.io/latest?base='

const convResults = document.querySelector('#converterResults')
const convButton = document.querySelector('#convert')
const convFrom = document.querySelector('#fromBase')
const convTo = document.querySelector('#toBase')

// boxes to store the data needed 
let currTo
let currFrom
let rates
console.log({ rates })


function createCurrencyOption (currency) {
    const optionEl = document.createElement('option')
    optionEl.id = currency
    optionEl.innerText = currency
    return optionEl
}

for (let currency of currencies) {
    for (let select of [convFrom, convTo]) {
        select.appendChild(createCurrencyOption(currency))
    }
}

convFrom.addEventListener('change', function (event) {
    console.log("from: ", event.target.value)
    currencyFrom = event.target.value
    convResults.innerHTML = ''
    fetch(`${url + event.target.value}`)
        .then(res => res.json())
        .then(data => {
        rates = data
        console.log( { rates })
        })
    })

    function convert (target, amount) {
        let exchangeRate = rates.rates[target]
        console.log('Exchange rate is ', exchangeRate)
        return (amount * exchangeRate).toFixed(2)
    }

    convButton.addEventListener('click', function (e) {
        let targetCurrency = document.querySelector('#toBase').value
        let amount = parseInt(document.querySelector('#currency-amount').value)
        let result = convert(targetCurrency, amount)
        converterResults.innerText = `${amount} ${currencyFrom} is ${result} ${targetCurrency}`
        })












// // Event Listener
// converter.addEventListener("click", )

// fetch(url)
//     .then (response => response.json())
//     .then (data => {
//         console.log(data)
//         const currencyBase = data.rates
//         console.log(currencyBase)
//         converterResults.innerHTML = `<p> ${currencyBase} </p>`


//     })









































