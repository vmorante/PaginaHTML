'use strict';


console.log('hello from file!');


var hello = {
    pepe: true,
    juan: 'ok'
};

console.log(hello);

// confirm('tu ordenador no es seguro!');


/**
 * This function does magic stuff
 * @param  {Number} Este es un tipo number
 * @param  {String}
 * @param  {Object}
 * @param  {Alumno}
 * @return {Mixed} returns a magic thing
 */
function pepe(arg1, arg2, arg3) {

}


/**
 * ksjdhkjashdljahsjdlahjs
 * asdkasgdkjahskjd
 * asdjkabsdkj
 */

console.log(1 == '1');
console.log(1.0 === 1);
console.log(0.1 + 0.2);
console.log((0.1 + 0.2) === 0.3);


var compra = ['leche', 'pan', 'galletas', 'cerveza', 'verduras', 'carne', 'arroz'];


function listarCompra() {
    compra.forEach(function(elementoCompra, index) {
        console.log(elementoCompra);
    });
}

function quitarGlutem() {
    if (compra && compra.length) {
        compra = compra.filter(function(elementoCompra, index) {
            return elementoCompra !== 'pan';
        });
    }
}

function quitarGlutem2(arg1, arg2, arg3) {
    var result = [];
    compra.forEach(function(elementoCompra) {
        if (elementoCompra !== 'pan') {
            result.push(elementoCompra);
        }
    });
    return result;
}

// quitarGlutem2.call(ctx, arg1, arg2, arg3)
// quitarGlutem2.apply(ctx, [arg1, arg2, arg3])

var noseque;

console.log('noseque', noseque, compra);

quitarGlutem();
console.log(compra);
console.log('\'hello');

var fecha = '2017/05/12';
var fechaNumbers = fecha.split('/').map(function(item) {
    return parseInt(item);
});

fecha.split('/').join('-');

console.log(fechaNumbers);


var cadena = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, maxime.';
console.log(cadena.slice(0, 7) + '...');
console.log(cadena.slice(5));
console.log(cadena.slice(-5));

console.log(parseInt('10'));
console.log(parseInt('10 cows'));
console.log(parseInt('cows 10'));
console.log(parseInt('09/2013'));


// if (variable1 === 0 && variable1 === undefined) {
//     if (!variable1) {

//     }
// }


function coma1() {
    return {
        val: true
    };
}

function coma2() {
    return;

    // NADA
    {
        val: true
    }
}

var compra2 = [{
    name: 'leche',
    price: 5
}, {
    name: 'pan',
    price: 8
}, {
    name: 'galletas',
    price: 9
}, {
    name: 'cerveza',
    price: 25
}, {
    name: 'verduras',
    price: 23
}, {
    name: 'carne',
    price: 1
}, {
    name: 'arroz',
    price: 6
}];

console.log(compra2);

compra2.sort(function(item1, item2) {
    return item1.price > item2.price;
});
// compra2.sort(function(item1, item2) {
//     return item1.name.toLowerCase() > item2.name.toLowerCase();
// });

console.log(compra2);

console.log(compra.shift());
compra.unshift('leche');



function Player(name, lastName, level) {
    this.name = name;
    this.lastName = lastName;
    this.level = level;
    this.play = function() {
        console.log('play!');
    }
}

var jordan = new Player('Michael', 'Jordan', 'pro');
var gasol = new Player('Paul', 'Gasol', 'pro');

// var jordan = Object.create(Player.prototype);
// jordan.name = 'Michael';
// jordan.lastName = 'Jordan';
// jordan.level = 'pro';

Player.prototype.partner = 'Nike';

jordan.partner = 'adidas';
jordan.play = function() {
    console.log('play!');
};

jordan.play();

console.log(jordan);
console.log(gasol);

var arrayFalsy = {
    0: true,
    1: false,
    2: true
};

arrayFalsy[0]

// fn.call(obj);

// var fn2 = fn.bind(obj);

// fn2();



var obj = {
    name: 'pepito',
    saludo: function() {
        var that = this;
        document.querySelector('button').addEventlistener('click', function() {
            var miVar = 3;
            console.log(that.name);
        });

    }
}

var b;
(function() {
    var a = b = 3;
});


// var compraListNodeVirtual = document.createElement('ul');
// compra.forEach(function(item) {
//     var a = document.createElement('li');
//     a.innerHTML = item;
//     compraListNodeVirtual.appendChild(a);
// });
// compraListNode.appendChild(compraListNodeVirtual);

// var items = [];
// compra.forEach(function(item) {
//     var a = document.createElement('li');
//     a.innerHTML = item;
//     items.push(a);
// });

// var html = a.reduce(function(item, total) {
// return total + item.toString();
// }, '');

// document.write(html);

// background-image => backgroundImage

// kebap-case-style
// lowerCamelCase
// UpperCamelCase


var array = document.querySelectorAll('.nav a');
var newArray = Array.prototype.slice.call(array, 0);
newArray.map(function(item) {
    item.style.color = 'red';
});

function argumentsArray(arg1, arg2, arg3) {
    console.log(arguments);
}

// setValue(arg1);
// setValue(arg1, arg2);
// setValue(arg1, arg2, arg3);

// argumentsArray(1, 2, 4, 'string');

var i = 0;

var timeout = setTimeout(function() {
    i++;
}, 2000);

var timeout2 = setTimeout(function() {
    i++;
}, 3000);

clearTimeout(timeout);

// for(var i = 0; i < 5; i++) {
//     (function(index) {
//         setTimeout(function() {
//             console.log(index);
//         }, i * 1000);
//     })(i)
// }


$('button').click(function(event) {
    console.log(event);
    $('nav a').css('color', 'green');
    $(this).css('color', 'red');
    $(event.target).css('color', 'red');
});

(function() {})();

$(document).ready(function() {});

$(document).ready(function() {

    $('.nav-item a').mouseover(function() {
        console.log($(this).attr('href'));
    });
});

$(document).scroll(function() {
    requestAnimationFrame(function() {
        $('header').css('top', window.superCalculus);
    });
});

(function() {
    var root = 'https://jsonplaceholder.typicode.com';

    // callback
    // $.ajax({
    //     dataType: 'json',
    //     url: root + '/posts/1',
    //     method: 'GET',
    //     success: function() {

    //     },
    //     error: function() {

    //     }
    // });

    // promesas
    var promise = $.ajax({
        dataType: 'json',
        url: root + '/posts/1',
        method: 'GET'
    });

    promise.then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });

    var promises = [];

    for (var i = 1; i < 11; i++) {
        var promise = $.ajax({
            dataType: 'json',
            url: root + '/posts/' + i,
            method: 'GET'
        });
        promises.push(promise);
    }

    Promise.all(promises).then(function(responses) {
        console.log(responses);
        var html = responses.reduce(function(total, response, index, list) {
            console.log(arguments);
            return total + '<li><h2>' + response.title + '</h2><p>' + response.body + '</p></li>';
        }, '');
        $('#about-us').append(html);
    }).catch(function() {
        console.log(arguments);
    });

    Promise.race(promises).then(function() {
        // first with finished
    }).catch(function() {
        // first with error
    });

    var promise1 = $.ajax({
        dataType: 'json',
        url: root + '/posts/1',
        method: 'GET'
    });

    var promise2 = $.ajax({
        dataType: 'json',
        url: root + '/posts/2',
        method: 'GET'
    });

    var promise3 = $.ajax({
        dataType: 'json',
        url: root + '/posts/3',
        method: 'GET'
    });

    promise2.catch(function() {
        // promise2 error
    });
    promise3.catch(function() {
        // promise3 error
    });

    function doStuff() {
        return promise1.then(function() {
            return promise2;
        }).then(function() {
            return promise3;
        }).then(function() {
            // your code
            return 43;
        }).catch(function() {
            // handle error
        });
    }

    var quickPromise = Promise.resolve(true);

    quickPromise.then(function(response) {
        return response ? 10 : 0;
    }).then(function(response) {
        return response > i ? {} : [];
    });

    function login(username, password, provider) {
        return loginProvider(username, password, provider).then(function(responseFB) {
            return loginOauth(responseFB);
        }).then(function(responseOauth) {
            return loginWithServer(responseOauth);
        }).then(function(response) {
            return setLoggedIn(response);
        }).then(function() {
            return getLoggedInUser();
        });
    }

    /**
     *
     */
    doStuff().then(function(response) {
        // 43
    });

    var createdPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            // do stuff, and reject if necessary
            resolve('magic');
        }, 5000);
    });

    createdPromise.then(function(response) {
        // 'magic'
    });

})();
