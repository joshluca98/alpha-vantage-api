symbol = document.getElementById('symbol');
open = document.getElementById('open');
high = document.getElementById('high');
low = document.getElementById('low');
price = document.getElementById('price');
volume = document.getElementById('volume');
change = document.getElementById('change');
changePercent = document.getElementById('change-percent');

async function fetchData(url){
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
       return (`Cannot fetch data! ${error}`);
    }
}

async function updateDOM() {
    apiUrl = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo'
    data = await fetchData(apiUrl)

    let dateData = data["Global Quote"]["07. latest trading day"];
    let symbolData = data["Global Quote"]["01. symbol"];
    let openData = data["Global Quote"]["02. open"];
    let highData = data["Global Quote"]["03. high"];
    let lowData = data["Global Quote"]["04. low"];
    let priceData = data["Global Quote"]["05. price"];
    let volumeData = data["Global Quote"]["06. volume"];
    let changeData = data["Global Quote"]["09. change"];
    let changePercentData = data["Global Quote"]["10. change percent"];

    date.innerHTML = `Last Updated: ${dateData}`;
    symbol.innerHTML = symbolData;
    open.innerHTML = `$${openData}`;
    high.innerHTML = `$${highData}`;
    low.innerHTML = `$${lowData}`;
    price.innerHTML = `$${priceData}`;
    volume.innerHTML = volumeData;
    change.innerHTML = `$${changeData}`;
    changePercent.innerHTML = changePercentData;
}

updateDOM();

