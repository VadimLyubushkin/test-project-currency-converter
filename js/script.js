export function getStringTable(currencyList) {
    let currencyParameters = [];
    const keys = getKeysArray(currencyList);
    
    keys.forEach(currency => {
        let parameters = `<tr>
            <td>${currencyList[currency].CharCode}</td>
            <td>${currencyList[currency].Name}</td>
            <td>${currencyList[currency].Nominal}</td>
            <td>${currencyList[currency].Value}</td>
        </tr>`;

        currencyParameters.push(parameters);
    });
    return currencyParameters.join(' ');
};

export function getInformation(data) {
    let actualDate = data.Date.slice(0, 10);
    const result = `<tr>
        <th></th>
        <th>Курс по отношению к рублю (по курсу ЦБ РФ на ${actualDate})</th>
        <th></th>
        <th></th>
    </tr>`;
    return result;
};

export function getCurrencyList(currencyList) {
    let currencyValue = ['<option value="RUB">RUB - Российский рубль</option>'];
    const keys = getKeysArray(currencyList);

    keys.forEach(currency => {
        let value = `<option value="${currency}">${currency} - ${currencyList[currency].Name}</option>`;
        
        currencyValue.push(value);
    });
    return currencyValue.join(' ');
};

export function getCurrencyCalculation(currencyList, firstValue, firstSelect, secondSelect) {
    let result;
    const valueFirstCurrency = (currencyList[firstSelect]?.Value ?? 1) / (currencyList[firstSelect]?.Nominal ?? 1);
    const valueSecondCurrency = (currencyList[secondSelect]?.Value ?? 1) / (currencyList[secondSelect]?.Nominal ?? 1);
    
    result = (valueFirstCurrency / valueSecondCurrency) * firstValue;
    return result;
};

function getKeysArray(currencyList) {
    const keysArray = Object.keys(currencyList);
    return keysArray;
};