'use strict';

(function() {

    window.service.photo.getPhotos({
        //limit:document.getElementById('movies')
        limit: $('#movies').data('newPosts')
    }).then(function(responses) {
        console.log(responses);
        var html = responses.reduce(function(total, response, index, list) {
            console.log(arguments);
            return total + '<article><img src=" draggable="true"' + response.url + '" alt="' +
                response.title + '"><h3>' + response.title + '</h3><p>lorem lorem</p></article>';
        }, '');
        $('#movies div').append(html);
        moviesDragInit();
    }).catch(function() {
        console.log(arguments);
    });

})();
