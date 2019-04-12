$(document).ready(function(){
    getJson();
})

function getJson(){
    var dataURL = "http://localhost:5000/json";
    $.getJSON(dataURL, {
        format: "json"
    }).done(function(data) {
        var stillsData = data;
        console.log("working...");
        makePhotos(stillsData);
        });
}

function makePhotos(data){
    for(let i = 0; i < data.length; i++){
        var newStillDiv = $(`<div>`);
        newStillDiv.attr('id', `still${i}`);
        newStillDiv.addClass('still');
        var newStillImg = $('<img>');
        newStillImg.attr('src', 'http://localhost:5000/public/' + data[i].img);
        newStillImg.addClass("still-img");
        newStillImg.attr('id', `still${i}`);
        newStillDiv.append(newStillImg);

        // newStill.attr('style', 'background-image: url(http://localhost:5000/public/' + data[i].img + ')');
        $('#photos').append(newStillDiv);
    }
}