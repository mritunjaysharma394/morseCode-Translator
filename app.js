var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#inputTxt");
var outputTxt = document.querySelector("#outputTxt");
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var choiceURL = "";

var e2mURL = "https://api.funtranslations.com/translate/morse.json";
var m2eURL = "http://api.funtranslations.com/translate/morse2english.json";


opt1.addEventListener('change', function () {
    if (this.checked) {
        console.log("option 1");
        choiceURL = e2mURL;
        console.log(choiceURL);

    }
});

function getTranslateURL(input) {
    return choiceURL + "?text=" + input;
}

opt2.addEventListener('change', function () {
    if (this.checked) {
        console.log("option 2");
        choiceURL = m2eURL;
        console.log(choiceURL);

    }
});

function errorHandler(error) {
    console.log("error occurred", error);
    alert("Something went wrong with server! Please try again later");
}

function clickHandler() {

    var input = inputTxt.value;

    fetch(getTranslateURL(input))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputTxt.innerText = translatedText;
        }).catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);