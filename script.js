var gold;
var name;
var char;
var exp;
var hp;
const USER_NAME = "userName";
const GOLD = "gold";
const CHARACTER = "char";
const EXP = "exp";
const HP = "hp";
var dataChanged;

function $(a) {
    return document.getElementById(a);
}
function HiddenChest() {
    var value = RandomInt(0,10);
 $("divOut").innerHTML="You found a chest with " + value + " Gold";
    IncreaseGold(value);
    SaveGold();
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
function DecreaseHp(val){
    hp -= val;
    dataChanged = true;
    document.getElementById("divHp").innerHTML = hp;
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
function SaveGold(){

    if (dataChanged == true){
        localStorage.setItem(GOLD, gold);
        alert("Your gold has been added");
        dataChanged = false;
    }
}
function SaveHp(){

    if (dataChanged == true){
        localStorage.setItem(HP, hp);
        alert("Your hp has been updated");
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
        gold = parseFloat(localStorage.getItem(GOLD));
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
    if ($("radSoldier").checked == true){
        localStorage.setItem(CHARACTER, "Soldier");
    }else if ($("radMage").checked == true) {
        localStorage.setItem(CHARACTER, "Mage");
    }else {
        alert("No character selected. Soldier has been selected for you.");
        localStorage.setItem(CHARACTER, "Soldier");
    }
}
function ChangeLocation() {
    if ($("radForest").checked == true){
        window.location.href = "forest.html"
    }else if ($("radTown").checked == true) {
        window.location.href = "town.html"
    }else if ($("radCave").checked == true){
        window.location.href = "Cave.html"
    }else {
        alert("No location selected. Please select a location");
    }
}
function IsDead() {
    if (hp<1){
        DeleteInformation();
    }
}
function Field() {
    window.location.href = "index.html"
}
function Forest() {
    if ($("chkExplore").checked == true){
        $("divExplore").innerHTML = "";
    }
    if ($("chkOpenChest").checked == true){
        $("divOpenChest").innerHTML = "Obviously there is no treasure in here, that would be too easy. You lose 2 HP arbatraraly";
        DecreaseHp(2);
        SaveHp();
    }
    if ($("chkSearchCorpse").checked == true){
        $("divSearchCorpse").innerHTML = "You found rigamortis, -2HP";
    }
    if ($("chkTalkAnimal").checked == true){
        $("divTalkAnimal").innerHTML = "";
    }
    if ($("chkClimbTree").checked == true){
        $("divClimbTree").innerHTML = "";
    }
}