/**
 * This is the URL or "endpoint" of an API that will return a bunch of star wars vehicles.
 */
let API_URL = 'https://swapi.dev/api/vehicles/';
let PREV_API_URL;

const startApp = function () {
    /**
     * Buttons have a disabled attribute. You can set it to ensure that your button doesn't get clicked 
     * again. In this case it makes sense to not allow this button to be clicked again considering we have 
     * "started" the app.
     */
    document.getElementById('startBtn').disabled = true;
    loadVehicles();
};

const next = function () {
    loadVehicles();
};

const prev = function () {
    /**
     * remember, loadVehicles() is going to request whatever the API_URL is set as. But we don't want
     * to request that URL, we want to request the previous URL. So we swap the values beforehand.
     */
    API_URL = PREV_API_URL;
    loadVehicles();
};

const loadVehicles = function () {
    fetch(API_URL).then((responseObject) => {

        console.log('Response From Server', responseObject);
    
        responseObject.json().then((responseObjectAsJson) => {

            console.log('Response From Server Converted To JSON', responseObjectAsJson);

            const vehicles = responseObjectAsJson.results;

            let html = '';
            for (let i = 0; i < vehicles.length; i++) {

           

                html += `
                    <tr>
                        <td>${vehicles[i].name}</td>
                        <td>${vehicles[i].model}</td>
                        <td>${vehicles[i].manufacturer}</td>
                        <td>${vehicles[i].vehicle_class}</td>
                        <td>${vehicles[i].max_atmosphering_speed}</td>
                        <td>${vehicles[i].passengers}</td>
                    </tr>
                `;

            }
            document.getElementById('vehiclesTBody').innerHTML = html;
           
            document.getElementById('starWarsTable').style.display = 'table';

      

        });
    });


};
