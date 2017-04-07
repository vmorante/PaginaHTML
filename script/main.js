console.log("hello")

var hello = {
    pepe: true,
    juan: 'ok'
}



console.log(hello)
    /**
     * @param  {[type]}
     * @param  {[type]}
     * @param  {[type]}
     * @return {[type]}
     */
function pepe(arg1, arg2, arg3) {

}
//alert("hola")
var compra = ['leche', 'pan']

function listaCompra() {
    compra.foreach(function(elementoCompra, index) {
        console.log(elementoCompra);

    });
}

function quitarGlutem() {
    compra = compra.filter(function(elementoCompra, index) {
        return elementoCompra !== 'pan'
    });

}

function quitarGlutem2() {
    var result = [];
    compra.foreach(function(elementoCompra) {
        if (elementoCompra != 'pan') {
            result.push(elementoCompra);
        }
    });
    return result;
}

quitarGlutem()
console.log(compra);

var fecha = "2017/05/12";
var fechaNumbers = fecha.split('').map(function(item) {
    return parseInt(item);

});

console.log(fechaNumbers)

var cadena = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis mollitia, ad optio."
console.log(cadena.slice(0, 5))
console.log(cadena.slice(5))
console.log(cadena.slice(-5))


function player(name, lastname, level) {
    this.name = name;
    this.lastname = lastname;
    this.level = level;
    this.play = function() {
        console.log('play!');
    }
}

var player = new player('Michael', 'Jordan', 'pro');

player.play();


var obj = {
    nombre: 'pepito',
    saludo: function() {
        return 'Hola, ' + this.nombre + '!';
    }
};

obj.nombre;
obj.saludo;
obj['saludo']();
var fn = obj["saludo"];



(function() {
    var a = b = 3;
})();

console.log(typeof a !== 'undefined')
console.log(typeof b !== 'undefined')


var compraListNodeVirtual = document.createElement('ul');
compra.forEach(function(item) {
    var a = document.createElement('li');
    a.innerHTML = item;
    compraListNodeVirtual.appendChild(a);
});
compraListNode.appendChild(compraListNodeVirtual);

// kebap-case-style
// lowerCamelCase
// UpperCamelCase
var array = document.querySelectorAll('.nav a');
var newArray = Array.prototype.slice.call(array, 0);
newArray.map(function(item) {
    item.style.color = 'red';
});

function argumentsArray() {
    console.log(arguments);
}

argumentsArray(1, 2, 4, 'string');
