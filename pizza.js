var pizza = {
    tipoCorteza: ["estilo Chicago", "lanzada a mano"],
    tipoSalsa: ["tradicional", "marinara", "ajo"],
    queso: ["mozzarella", "feta", "cheddar"],
    salsas: ["pepperoni", "salchicha", "champiñones", "aceitunas", "cebollas", "choclo"]
}

function pizzaOven(tipoCorteza, tipoSalsa, queso, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.queso = queso;
    pizza.salsas = salsas;
    return pizza;
}

var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);
var pizza2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);
var pizza3 = pizzaOven("estilo Chicago", "ajo", ["cheddar"], ["choclo", "salchicha"]);
console.log(pizza3);
var pizza4 = pizzaOven("lanzada a mano" , "marinara" , ["feta"], ["champiñones", "cebollas", "choclo", "pepperoni"]);
console.log(pizza4);