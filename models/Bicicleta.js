let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.allBicis = [];

Bicicleta.add = function (bici) {
    this.allBicis.push(bici);
}

Bicicleta.removeById = function(id) {
    const idNum = Number(id);
    Bicicleta.allBicis = Bicicleta.allBicis.filter(bici => bici.id !== idNum);
};

Bicicleta.update = function(biciActualizada) {
    const idNum = Number(biciActualizada.id);
    for (let i = 0; i < Bicicleta.allBicis.length; i++) {
        if (Bicicleta.allBicis[i].id === idNum) {
            Bicicleta.allBicis[i].color = biciActualizada.color;
            Bicicleta.allBicis[i].modelo = biciActualizada.modelo;
            Bicicleta.allBicis[i].ubicacion = biciActualizada.ubicacion;
            return true; 
        }
    }
    return false; 
};

let a = new Bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);
let b = new Bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);
Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;