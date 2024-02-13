// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    changeCert('A');

    // check for buttons exist
    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // optionally update when fields update
    // tbd
    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameTag = document.getElementById('nameTag');
        // console.log(eventData);
        nameTag.innerText = eventData.target.value;
    });
    document.getElementById('prov').addEventListener('change', function (eventData) {
        let provider = document.getElementById('provider');
        // console.log(eventData);
        provider.innerText = eventData.target.value;
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        // let nameTag = document.getElementById('nameTag');
        // console.log(eventData);
        let info = document.getElementById('info');
        info.innerText = eventData.target.value;
        changeCert(eventData.target.value);
    });

    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); //stop page reload when form is submitted
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        //update certificate information when form is submitted:
        let nameTag = document.getElementById('nameTag');
        let info = document.getElementById('info');
        nameTag.innerText = formData.name;
        // info.innerText = formData.type;

      });
    // Log readiness to console
    console.log("Ready");

    // let info = document.getElementById('info');
    // info.classList.add('test');
    
    
    
    // certificate.classList.add('number1');
    
    function changeCert(value){
        let achievement = document.getElementById("achievement");
        let nameTag = document.getElementById("nameTag");
        let topBG = document.getElementById("topBG");
        let topVL = document.getElementById("topVL");
        let topAL = document.getElementById("topAL");
        let topLAL = document.getElementById("topLAL");
        let topHL = document.getElementById("topHL");
        let topLBG = document.getElementById("topLBG");
        let topLHL = document.getElementById("topLHL");
        let botRAL = document.getElementById("botRAL");
        let botHL = document.getElementById("botHL");
        let botThree = document.getElementById("botThree");
        let topLightPoly = document.getElementById("topLightPoly");
        let botRLightPoly = document.getElementById("botRLightPoly");
        let topDarkPoly = document.getElementById("topDarkPoly");
        let botTHL = document.getElementById("botTHL");
        let tBRPoly = document.getElementById("tBRPoly");
        let botOne = document.getElementById("botOne");
        let botTwo = document.getElementById("botTwo");
        achievement.classList = '';
        nameTag.classList = '';
        topLBG.classList = '';
        topLHL.classList = '';
        topLAL.classList = '';
        topHL.classList = '';
        topBG.classList = '';
        topVL.classList = '';
        topAL.classList = '';
        // topLHL.classList = '';
        botRAL.classList = '';
        botHL.classList = '';
        botThree.classList = '';
        topLightPoly.classList = '';
        botRLightPoly.classList = '';
        topDarkPoly.classList = '';
        botTHL.classList = '';
        tBRPoly.classList = '';
        botOne.classList = '';
        botTwo.classList = '';
        // clear classes on each function call
        switch(value){
            case 'A':
                achievement.classList.add('gold-GoldL');
                nameTag.classList.add('gold-GoldL');
                topHL.classList.add('gold-GoldL');
                topBG.classList.add('gold-GoldD');
                topLBG.classList.add('gold-GoldD');
                topVL.classList.add('gold-GoldL');
                topAL.classList.add('gold-GoldL');
                topLAL.classList.add('gold-GoldL');
                topLHL.classList.add('gold-GoldL');
                botRAL.classList.add('gold-GoldL');
                botHL.classList.add('gold-GoldL');
                botThree.classList.add('gold-GoldL');
                topLightPoly.classList.add('greyL');
                botRLightPoly.classList.add('greyL');
                topDarkPoly.classList.add('greyD');
                botTHL.classList.add('greyD');
                tBRPoly.classList.add('gold-GreyM');
                botOne.classList.add('gold-PurpD');
                botTwo.classList.add('gold-PurpL');
            break;
            case 'B':
                achievement.classList.add('greyL');
                nameTag.classList.add('greyL');
                topHL.classList.add('greyL');
                topBG.classList.add('blue-Pink');
                topLBG.classList.add('blue-Pink');
                topVL.classList.add('greyL');
                topAL.classList.add('greyL');
                topLAL.classList.add('greyL');
                topLHL.classList.add('greyL');
                botRAL.classList.add('greyL');
                botHL.classList.add('greyL');
                botThree.classList.add('blue-Pink');
                topLightPoly.classList.add('blue-AquaL');
                botRLightPoly.classList.add('blue-BlueL');
                topDarkPoly.classList.add('blue-AquaD');
                botTHL.classList.add('blue-BlueM');
                tBRPoly.classList.add('blue-BlueD');
                botOne.classList.add('greyD');
                botTwo.classList.add('greyL');
            break;
            case 'C':
                achievement.classList.add('greyL');
                nameTag.classList.add('greyL');
                topHL.classList.add('greyL');
                topBG.classList.add('green-LimeM');
                topLBG.classList.add('greyD');
                topVL.classList.add('greyL');
                topAL.classList.add('greyL');
                topLAL.classList.add('greyL');
                topLHL.classList.add('greyL');
                botRAL.classList.add('greyL');
                botHL.classList.add('greyL');
                botThree.classList.add('green-GreyLL');
                topLightPoly.classList.add('green-WhiteL');
                botRLightPoly.classList.add('green-LimeL');
                topDarkPoly.classList.add('green-WhiteD');
                botTHL.classList.add('green-LimeM');
                tBRPoly.classList.add('green-LimeD');
                botOne.classList.add('greyD');
                botTwo.classList.add('greyL');
            break;
        }
    }

    // Adding a button to print the certificate
    // setup print event listener
    // if ( document.getElementById('print') !== null) {
    //     let printElement = document.getElementById('print');
    //     printElement.addEventListener('click', function(e){
    //     window.print();
    //     console.log("invoke print");
    //     } );
    // } 
    // or in html -> onclick="window.print()"

    // Generating a date
    let theDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"numeric", day:"numeric"}) 
    // Makes a format like: "Friday, Jul 2, 2021"
    let date = document.getElementById('date');
    date.innerText = theDate;
});

/* Additional things to be aware of */






function processForm(form){
    
}