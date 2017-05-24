'use strict';

(function() {

    window.service.photo.getPhotos({
        //limit:document.getElementById('movies')
        limit: $('#movies').data('newPosts')
    }).then(function(responses) {
        console.log(responses);
        var html = responses.reduce(function(total, response, index, list) {
            console.log(arguments);
            return total + '<article class="col-xs-12 col-md-6 col-lg-3"><img src=" ' + response.url + '" alt="' +
                response.title + '"><h3>' + response.title + '</h3><p>lorem lorem</p></article>';
        }, '');
        $('#movies div').append(html);
        moviesDragInit();
    }).catch(function() {
        console.log(arguments);
    });

})();
