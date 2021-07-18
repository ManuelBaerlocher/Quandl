
const API_KEY = 'Dorz7s8iTV_bJSyNymZQ';

async function loadCourse() {
    let url = 'https://www.quandl.com/api/v3/datasets/BITFINEX/BTCUSD?start_date=2021-07-17&end_date=2021-07-17&api_key=Dorz7s8iTV_bJSyNymZQ';
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log(responseAsJson);

    let midlcourse = Math.round(responseAsJson['dataset']['data'][0][4]);
    /*midlcourse = midlcourse['data'];*/
    midlcourse = midlcourse.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    console.log(midlcourse);




    document.getElementById('course').innerHTML = midlcourse;
}