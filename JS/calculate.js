var weaponNames = [["ak74",3,"C"],["ak47",5,"C"],["ppsz",2,"C"],["thompson",2.5,"C"],["g3",2,"C"],
["glauberyt",1,"C"],["rpk",4,"C"],["rak",2,"C"],["pkm",1.5,"C"],["cz97",3,"P"],["taurus96",2,"P"],
["waltherp1",1,"P"],["xdm9",1,"P"],["ruger44magnum",1,"P"],["colt1911",1,"P"],["smith44long",6,"P"]];
var ammoAmmount = []; 
var sum = 0;
var pistolsCost = 0;
var pistolShots = 0;
var carabinesCost = 0;
var carabinesShots = 0;
createAmmoAmmountDict();


function createAmmoAmmountDict() {
    for (var i = 0; i<weaponNames.length; i++){
        var weapon = {name:weaponNames[i][0], cost:weaponNames[i][1], category:weaponNames[i][2], shots:0, allShotsCost:0};
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
                sum += weapon.cost;
                addCateroryCost(weapon);
            }
            else{
                if (weapon.shots > 0) {
                    weapon.shots--;
                    weapon.allShotsCost -= weapon.cost;
                    sum -= weapon.cost;
                    subtractCateroryCost(weapon);
                }
            } 
            numberOfWeaponShots = weapon.shots;
            allShotsCost = weapon.allShotsCost;
        }   
        displayCurrentNumberAndCost(numberOfWeaponShots,allShotsCost,weaponName);
    });


function addCateroryCost(weapon) {
    if (weapon.category == "P") {
        pistolsCost += weapon.cost;
        pistolShots += 1;
    } else {
        carabinesCost += weapon.cost;
        carabinesShots += 1;
    }
}


function subtractCateroryCost(weapon) {
    if (weapon.category == "P") {
        pistolsCost -= weapon.cost;
        pistolShots -= 1;
    } else {
        carabinesCost -= weapon.cost;
        carabinesShots +=1;
    }
}


function displayCurrentNumberAndCost(numberOfWeaponShots,allShotsCost,weaponName) {
    var word;
    var weaponShotsBoxID = weaponName + "ShotsNumber";
    var weaponCostBoxID = weaponName + "Cost";

    if (numberOfWeaponShots === 1) {word = " shot";}
    else {word = " shots";}

    document.getElementById(weaponShotsBoxID).innerHTML = numberOfWeaponShots + word;
    document.getElementById(weaponCostBoxID).innerHTML = allShotsCost + "$";
    document.getElementById("sum").innerHTML = "total: " + sum + " $";
    document.getElementById("summary").innerHTML = sum + " $";
    document.getElementById("pistolsShots").innerHTML = pistolShots + " shots";
    document.getElementById("pistolsCost").innerHTML = pistolsCost + " $";
    document.getElementById("carabinesShots").innerHTML = carabinesShots + " shots";
    document.getElementById("carabinesCost").innerHTML = carabinesCost + " $";
}
}



