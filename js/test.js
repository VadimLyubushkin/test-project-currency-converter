fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
    .then(response => response.json())
    .then(data => {
        const currencyList = data.Valute;
        let currency = getStringTable(currencyList)
        //currencyTable.insertAdjacentHTML("beforeend", currency)
        console.log(currency)
});


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