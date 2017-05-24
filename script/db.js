request.onsuccess = function(e) {
    console.log('Base de datos cargada correctamente');
    db = request.result;

};

request.onupgradeneeded = function(e) {
    console.log('db upgraded');
    var db = event.target.result;
    var objectStore = db.createObjectStore("people", {
        keyPath: 'id',
        autoIncrement: true
    });
    objectStore.createIndex('by_name', 'name', {
        unique: false
    });
    objectStore.createIndex('by_email', 'dni', {
        unique: true
    });
};

function saveElements(json) {
    var people = json;
    var transaction = db.transaction("people", "readwrite");
    transaction.oncomplete = function(event) {
        alert("All done!");
    };
    transaction.onerror = function(event) {
        // handle errors!
    };
    var peopleObjectStore = transaction.objectStore("people");
    for (var i in people) {
        var addResponse = peopleObjectStore.add(people[i]);
        addResponse.onsuccess = (function(i) {
            return function() {
                console.log('added', i);
            }
        })(i);
    }
}
