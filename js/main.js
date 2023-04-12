import { getStringTable, getCurrencyList, getCurrencyCalculation, getInformation } from "./script.js"

//Table
const currencyTable = document.querySelector('#currency_table tbody');
const actualDate = document.querySelector('#currency_table thead');

//Select values
const selectFirstCurrency = document.querySelector('#js-first-currency');
const selectSecondCurrency = document.querySelector('#js-second-currency');

//Input/Output values
const inputFirstCurrency = document.querySelector('#js-input-first-value');
const inputSecondCurrency = document.querySelector('#js-input-second-value');

//Сurrency switch button
const buttonReverseValues = document.querySelector('#js-button-reverse-values');

fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
    .then(response => response.json())
    .then(data => {
        const currencyList = data.Valute;
        console.log(currencyList);
        const currency = getStringTable(currencyList);
        const currencySelection = getCurrencyList(currencyList);
        const information = getInformation(data);

        currencyTable.insertAdjacentHTML("beforeend", currency);
        actualDate.insertAdjacentHTML("beforeend", information);
        selectFirstCurrency.insertAdjacentHTML("beforeend", currencySelection);
        selectSecondCurrency.insertAdjacentHTML("beforeend", currencySelection);

        inputFirstCurrency.value = 1;
        inputSecondCurrency.value = getCalculation();
        
        function getCalculation() {
            const firstValue = Number.parseInt(inputFirstCurrency.value, 10) || "";
            const firstSelect = selectFirstCurrency.value;
            const secondSelect = selectSecondCurrency.value;

            return getCurrencyCalculation(currencyList, firstValue, firstSelect, secondSelect);
        }

        inputFirstCurrency.addEventListener('keyup', () => {
            inputSecondCurrency.value = getCalculation().toFixed(5);
        })

        selectFirstCurrency.addEventListener('change', () => {
            inputSecondCurrency.value = getCalculation().toFixed(5);
        });
        
        selectSecondCurrency.addEventListener('change', () => {
            inputSecondCurrency.value = getCalculation().toFixed(5);
        });

        buttonReverseValues.addEventListener('click', () => {
            const firstValueSelect = selectFirstCurrency.value;
            const secondValueSelect = selectSecondCurrency.value;

            selectFirstCurrency.value = secondValueSelect;
            selectSecondCurrency.value = firstValueSelect;
            //inputFirstCurrency.value = 1;

            inputSecondCurrency.value = getCalculation().toFixed(5);
        });
    });












/*
function getStringTable(currencyList) {
    let currencyParameters = [];
    const keys = Object.keys(currencyList);
    
    keys.forEach(currency => {
        let parameters = `<tr>
            <td>${currencyList[currency].CharCode}</td>
            <td>${currencyList[currency].Name}</td>
            <td>${currencyList[currency].Value}</td>
        </tr>`;
        
        currencyParameters.push(parameters);
    });

    return currencyParameters.join(' ');
};


-------------------------------------------------

<option value="USD">USD</option>


-------------------------------------------------

selectFirstCurrency.addEventListener('change', () => {
    console.log(selectFirstCurrency.value);

            
});

selectSecondCurrency.addEventListener('change', () => {
    console.log(selectSecondCurrency.value);


});

-------------------------------------------------

inputFirstCurrency.addEventListener('keydown', () => {
    const firstCurrency = selectFirstCurrency.value;
    const secondCurrency = selectSecondCurrency.value;
    console.log(firstCurrency)
    console.log(secondCurrency)
    console.log(selectFirstCurrency.value);
    console.log(selectSecondCurrency.value);

            //inputSecondCurrency.value = getCurrencyCalculation(currencyList, firstCurrency, secondCurrency);
})

-------------------------------------------------

console.log(firstValue)
console.log(firstSelect)
console.log(secondSelect)

*/