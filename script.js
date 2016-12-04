var gold;
var name;
var char;
var hp;
var lantern;
const USER_NAME = "userName";
const GOLD = "gold";
const CHARACTER = "char";
const HP = "hp";
const LANTERN = "lantern";
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

    if (localStorage.getItem(HP) != null){
        hp = parseFloat(localStorage.getItem(HP));
    }else {hp = 10}
    document.getElementById("divHp").innerHTML = hp;

    if (localStorage.getItem(LANTERN) != null){
        hp = parseFloat(localStorage.getItem(LANTERN));
    }else {lantern = false}
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
        $("divExplore").innerHTML = "you find 5 gold";
        IncreaseGold(5);
        SaveGold();
    }
    if ($("chkOpenChest").checked == true){
        $("divOpenChest").innerHTML = "Obviously there is no treasure in here, that would be too easy. You lose 2 HP arbitrarily";
        DecreaseHp(2);
        SaveHp();
    }
    if ($("chkSearchCorpse").checked == true){
        $("divSearchCorpse").innerHTML = "You found rigamortis, -2HP";
        DecreaseHp(2);
        SaveHp();
    }
    if ($("chkTalkAnimal").checked == true){
        $("divTalkAnimal").innerHTML = "The squirrel goes crazy and attacks, you lose 2hp";
        DecreaseHp(2);
        SaveHp();
    }
    if ($("chkClimbTree").checked == true){
        $("divClimbTree").innerHTML = "You find a bird's nest in the tree with some gold";
        IncreaseGold(RandomInt(0,10));
        SaveGold();
    }
}
function Town() {
    if ($("chkPunch").checked == true){
        $("divPunch").innerHTML = "He got knocked the F out, you take his gold";
        IncreaseGold(RandomInt(0,10));
        SaveGold();
    }
    if ($("chkShops").checked == true){
        $("divShops").innerHTML = "A lantern catches your eye, it costs 20 gold.";
        $("btnBuy").style.display = "inherit";
    }
    if ($("chkSwim").checked == true){
        $("divSwim").innerHTML = "You found 2 gold while swimming.";
        IncreaseGold(2);
        SaveGold();
    }
    if ($("chkTalk").checked == true){
        $("divTalk").innerHTML = "The maiden tells you of a cave nearby, but you will need something to light the way";
    }
}
function Buy() {
    if (gold >= 20) {
        DecreaseGold(20);
        SaveGold();
        lantern = true;
        localStorage.setItem(LANTERN, lantern);
    }else {
        alert("You don't have enough gold.")
    }
}
function Enter() {
    if (lantern == true){
        window.location.href = "LitCave.html";
    }else {
        window.location.href = "InCave.html";
    }
}
function Fall() {
    $("divFall").innerHTML = "You stumble into the cave and trip over a massive ledge, falling to your death"
    DeleteInformation();
}
function Fight() {

}
function Run() {

}