'use strict'
immediately invoked
function() {
    document.querySelector('#team .caption').addEventListener('click',
        function() { console.log(this); }, true);
    document.querySelector('#team .caption p').addEventListener('click',
        function() { console.log(this); }, true);


    for (var i = 0; i < 5; i++) {
        var btn = document.createElement('button');
        btn.appendChild(document.createTextNode('Button ' + i));
        btn.addEventListener('click', (function(i) {
            return function() {
                console.log(i);
            }
        })(i));

        document.body.appendChild(btn);
    }
}
