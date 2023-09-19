let requestBodyEl = document.getElementById('requestBody');
let sendPostRequestBtnEl = document.getElementById('sendPostRequestBtn');
let loadingEl = document.getElementById('loading');
let requestStatusEl = document.getElementById('requestStatus');
let httpResponseEl = document.getElementById('httpResponse');

function sendPostHTTPRequest() {
    let requestUrl = 'https://gorest.co.in/public-api/users';
    let requestBody = requestBodyEl.value;
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            Accept: 'application/json',
            Authorization: 'Bearer '
        }
    }
}