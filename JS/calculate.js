var weaponNames = [["ak74",3],["ak47",5],["ppsz",2],["thompson",2.5],["g3",2]];
var ammoAmmount = []; 
var sum;
createAmmoAmmountDict();


function createAmmoAmmountDict() {
    for (var i = 0; i<weaponNames.length; i++){
        var weapon = {name: weaponNames[i][0], cost: weaponNames[i][1], shots: 0};
        ammoAmmount.push(weapon);
    }
}

function changeShotsNumber(weaponName, action) {
    var elementID = weaponName + "ShotsNumber";
    var numberOfWeaponShots;

    ammoAmmount.forEach(weapon => {
        if (weapon.name == weaponName) {

            if (action == "add") {
                weapon.shots ++;
            }
            else{
                if (weapon.shots > 0) {
                    weapon.shots--;
                }
            } 
            numberOfWeaponShots = weapon.shots;
        }   
    });
    document.getElementById(elementID).innerHTML = numberOfWeaponShots;
}


function calculate() {
    sum = 0;
    ammoAmmount.forEach(weapon => {
        sum += weapon.shots * weapon.cost;
    });
    document.getElementById("sum").innerHTML = sum;
}


