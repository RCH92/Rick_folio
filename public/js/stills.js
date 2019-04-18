$(document).ready(function () {
    getJson();
    navActive();
})
function navActive(){
    $('#nav-stills').attr("data-link", "active");
    $('#nav-home').attr("data-link", "inactive");
    $('#nav-about').attr("data-link", "inactive");
    $('#nav-motion').attr("data-link", "inactive");
    $('#social-bar').attr("style", "color: black");
    $('.line').attr("style", "background: black");
    console.log("working" + $('#nav-stills').data("link"))
}
function getJson() {
    console.log("starting...");
    var dataURL = "http://localhost:5000/json";
    $.getJSON(dataURL, {
        format: "json"
    }).done(function (data) {
        var stillsData = data;
        console.log("working...");
        console.log(stillsData);
        makePhotos(stillsData);
        sortData(stillsData);
    });
}    
var fullImg = [];
var thumbImg = [];
var filters = ["All"];
function sortData(data) {

    data.forEach(element => {
        if (element.img_small && element.img_large) {
            let orbitData = { "id": element.id, "img": element.img_large };
            let thumbData = { "id": element.id, "img": element.img_small };
            let filter = element.project;
            let unique = true;
            for (let i = 0; i < thumbImg.length; i++) {
                if (thumbImg[i].id == thumbData.id) {
                    unique = false;
                    break;
                }
            }
            let filterUnique = true;
            for (let i = 0; i < filters.length; i++) {
                if (filters[i] == filter) {
                    filterUnique = false;
                    break;
                }
            }

            if (unique == true) {
                console.log(unique);
                thumbImg.push(thumbData);
                fullImg.push(orbitData);
            }
            if(filterUnique == true){
                filters.push(filter);
            }
        }
    });
    console.log(fullImg);
    console.log(filters);
    makeFilter(filters);
}
    
function makeFilter(data){
    data.forEach(element => {
        let newFilter = $(`<div class="filter-option" data-${element}><h3>${element}</h3></div>`);
        $('#filter-options').append(newFilter);
    })
}
function makePhotos(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].img_small && data[i].img_large) {
            var newStillDiv = $(`<div>`);
            newStillDiv.attr('id', `still_${data[i].id}`);
            newStillDiv.addClass('still');
            var newStillImg = $('<img>');
            newStillImg.attr('src', 'http://localhost:5000/public/' + data[i].img_small);
            newStillImg.addClass("still-img");
            newStillImg.attr('id', `still${i}`);
            newStillDiv.append(newStillImg);

            // newStill.attr('style', 'background-image: url(http://localhost:5000/public/' + data[i].img + ')');
            $('#photos').append(newStillDiv);
        }
    }
}
