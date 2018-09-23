var weaponNames = [["ak74",3],["ak47",5],["ppsz",2],["thompson",2.5],["g3",2],["glauberyt",1],["rpk",4],["rak",2],["pkm",1.5]];
var ammoAmmount = []; 
var sum;
createAmmoAmmountDict();


function createAmmoAmmountDict() {
    for (var i = 0; i<weaponNames.length; i++){
        var weapon = {name: weaponNames[i][0], cost: weaponNames[i][1], shots: 0, allShotsCost:0};
        ammoAmmount.push(weapon);
    }
}

function changeShotsNumber(weaponName, action) {
    
    var numberOfWeaponShots;
    var allShotsCost;

    ammoAmmount.forEach(weapon => {
        if (weapon.name == weaponName) {

            if (action == "add") {
                weapon.shots ++;
                weapon.allShotsCost += weapon.cost;
            }
            else{
                if (weapon.shots > 0) {
                    weapon.shots--;
                    weapon.allShotsCost -= weapon.cost;
                }
            } 
            numberOfWeaponShots = weapon.shots;
            allShotsCost = weapon.allShotsCost;
        }   
        displayCurrentNumberAndCost(numberOfWeaponShots,allShotsCost,weaponName);
    });


    

function displayCurrentNumberAndCost(numberOfWeaponShots,allShotsCost,weaponName) {
    var word;
    var weaponShotsBoxID = weaponName + "ShotsNumber";
    var weaponCostBoxID = weaponName + "Cost";

    if (numberOfWeaponShots === 1) {
        word = " shot";
    } else {
        word = " shots";
    }
    document.getElementById(weaponShotsBoxID).innerHTML = numberOfWeaponShots + word;
    document.getElementById(weaponCostBoxID).innerHTML = allShotsCost + "$";
}
}


function calculate() {
    sum = 0;
    ammoAmmount.forEach(weapon => {
        sum += weapon.allShotsCost;
    });
    document.getElementById("sum").innerHTML = sum;
}


