let firstResp, secondResp;
const get = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("get", url, true);   // the connection opens
        xhr.onload = () => { //the request was fulfilled
            try { 
                if (xhr.status === 200) { // if the request is successful, the status 200 OK
                    resolve(xhr.response);
                }
                else { // if it`s not 200, it means to display the error status and text 
                    reject(new Error(`${xhr.status} + ${xhr.statusText}`));
                }
            } catch(error) {
                reject(error);
            }
        }                    
        xhr.send();  // request is sent to the specified url
    });
}

get('https://run.mocky.io/v3/c195a80d-0ca0-4f5e-99c5-0e98d1b6e70c')
    .then(response => { //wait while come back the first response
        firstResp = JSON.parse(response);
        return get('https://run.mocky.io/v3/c0cf685a-b5d3-4216-b802-e8c68610b14f')
    })
    .then(response => {//wait while come back the second response
        secondResp = JSON.parse(response);
        console.log(`Both response have resolved`)
    });