var gold;
var name;
var char;
const USER_NAME = "userName";
const GOLD = "gold";
const CHARACTER = char;
var dataChanged;

function $(a) {
    return document.getElementById(a);
}

function HiddenChest() {
    var value = RandomInt(0,10);
 $("divOut").innerHTML="You found a chest with " + value + " Gold";
    IncreaseGold(value);
    SaveResults();
}

function RandomInt(low, high) {
    if(low <= high) {
        return Math.floor(Math.random()*(high-low+1)) + low;
    }
}

function IncreaseGold(val){
    gold += val;
    dataChanged = true;
    document.getElementById("divGold").innerHTML = gold;
}

function DecreaseGold(val){
    gold -= val;
    dataChanged = true;
    document.getElementById("divGold").innerHTML = gold;
}

function RegisterLocal(){
    name = document.getElementById("txtName").value;

    if (name == ""){
        document.getElementById("divError").innerHTML = "*Please enter a name!";
        return;
    } else {
        document.getElementById("divError").innerHTML = "";
    }

    localStorage.setItem(USER_NAME, name);
    window.location.href = "index.html";
}

function SaveResults(){

    if (dataChanged == true){
        localStorage.setItem(GOLD, gold);
        alert("Your gold has been added");
        dataChanged = false;
    }
}

function PageLoad(){

    if (localStorage.getItem(USER_NAME) != null){
        name = localStorage.getItem(USER_NAME);
        document.getElementById("txtName").innerHTML = name;
    } else{
        alert("You have not registered! You will be redirected to the registration page.");
        window.location.href = "register.html";
    }

    if (localStorage.getItem(GOLD) != null){
        gold = parseFloat(localStorage.getItem(gold));
    } else {
        gold = 0;
    }

    document.getElementById("divGold").innerHTML = gold;
}

function DeleteInformation(){
    localStorage.clear();
    dataChanged = false;
    alert("The user has been deleted. You will be redirected to the registration page.");
    window.location.href = "register.html";
}
function Go() {
    SaveCharacter();
    ChangeLocation();
}
function SaveCharacter() {
    
}
function ChangeLocation() {
    
}