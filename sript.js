const API_URL = "https://script.google.com/macros/s/AKfycbyGlhVAIBWgecXzlaTpyjPSpChbSaMVRfll0Bl4ivHk5Oe_OEtSpnAFeuUF8hAhg-JGmg/exec";window.onload = function() {

    const urlParams = new URLSearchParams(window.location.search);

    const batteryID = urlParams.get('id');



    if (batteryID) {

        document.getElementById('displayID').innerText = "Searching: " + batteryID;

        

        fetch(`${API_URL}?id=${batteryID}`)

            .then(response => response.json())

            .then(data => {

                if(data === "Not Found") {

                    showError(batteryID);

                } else {

                    updateUI(data, batteryID);

                }

            })

            .catch(error => console.error('Error:', error));

    }

};function updateUI(data, id) {

    document.getElementById('displayID').innerText = id;

    document.getElementById('voltage').innerText = data.voltage;

    document.getElementById('gravity').innerText = data.gravity;

    document.getElementById('integrity').innerText = data.integrity;

    document.getElementById('installDate').innerText = new Date(data.installDate).toLocaleDateString();

    document.getElementById('expiryDate').innerText = new Date(data.expiryDate).toLocaleDateString();

    document.getElementById('buyback').innerText = data.buyback;

    // ... update badge logic here ...

}