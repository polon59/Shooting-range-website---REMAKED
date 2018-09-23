var weaponNames = [["ak74",3,"C"],["ak47",5,"C"],["ppsz",2,"C"],["thompson",2.5,"C"],["g3",2,"C"],
["glauberyt",1,"C"],["rpk",4,"C"],["rak",2,"C"],["pkm",1.5,"C"],["cz97",3,"P"],["taurus96",2,"P"],
["waltherp1",1,"P"],["xdm9",1,"P"],["ruger44magnum",1,"P"],["colt1911",1,"P"],["smith44long",6,"P"]];
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


