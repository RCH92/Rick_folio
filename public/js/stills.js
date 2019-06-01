

$(document).ready(function () {
    $(document).foundation();
    
    $('#orbit-modal').attr('style', "width: auto; border: none; background: none; padding: 0; height: 85vh;");
    checkSize();
    getJson();
    navActive();
    // slickInitiate();
    
})


function checkSize() {
    if ($(window).width() <=555){
        $('#orbit-modal').attr('style', "width: auto; border: none; background: none; padding: 0px; height: 85vh; max-width: 100vw");
    } else {
        $('#orbit-modal').attr('style', "width: auto; border: none; background: none; padding: 0px; height: 85vh; max-width: 85vw;");
    }
}

function navActive() {
    $('#nav-stills').attr("data-link", "active");
    $('#nav-home').data("link", "inactive");
    $('#nav-about').data("link", "inactive");
    $('#nav-motion').data("link", "inactive");
    $('#social-bar').attr("style", "color: black");
    $('.line').attr("style", "background: black");
}
var stillsData;
function getJson() {
    var dataURL = "/json";
    $.getJSON(dataURL, {
        format: "json"
    }).done(function (data) {
        stillsData = data;
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
                thumbImg.push(thumbData);
                fullImg.push(orbitData);
            }
            if (filterUnique == true) {
                filters.push(filter);
            }
        }
    });
    makeFilter(filters);
}

function makeFilter(data) {
    data.forEach(element => {
        let newFilter = $(`<div class="filter-option" data-${element}><h3>${element}</h3></div>`);
        $('#filter-options').append(newFilter);
    })
}
var initialIndex = 0;
function RefreshListeners(){
    $('#photos').off();
    $('#photos').on("click", ".still", function(){
        let slideNumber = $(this).data("index");
        initialIndex = slideNumber;
        $('#orbit-modal').foundation('open');
        
        $('.slick-orbit').slick("slickGoTo", slideNumber, true);
    }) 
}
function makePhotos(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].img_small && data[i].img_large) {

            var newStillDiv = $(`<div>`);
            var newSlideDiv = $('<div>');
            var newStillImg = $('<img>');
            var newSlideImg = $('<img>');
            
            

            newStillDiv.addClass('still');
            newStillDiv.attr("data-index", count);

            newStillImg.attr('src', '/public/' + data[i].img_small);
            newStillImg.addClass("still-img");
            newStillImg.attr('id', `still${i}`);
            newStillDiv.append(newStillImg);
           
            $('#photos').append(newStillDiv);

            newSlideImg.attr('src', '/public/' + data[i].img_large);
            newSlideDiv.append(newSlideImg);
            $('#slick-orbit').append(newSlideDiv);

            count++;
            
        }
    }
    RefreshListeners();
}
function changeSlide(direction){
    $('.slick-orbit').slick(direction);
}
var initialize = true;
 

$('#modal-close').on("click", function(){
    $('#orbit-modal').foundation('close');
    
})
$('.orbit-button').on('click', function(){
    let clickDirection = $(this).data("slide-direction");
    changeSlide(clickDirection);
    
})
var loaded = false;
function slickInitiate(){
    $('.slick-orbit').slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        adaptiveHeight: true,
        centerMode: false,
        initialSlide: initialIndex,
        arrows: false,
        autoplay: false
        // lazyLoad: "progressive"
    })
    
    loaded = true;
}

$(window).resize(function(){
    loaded = false;
    $('#orbit-modal').foundation('close');
    $('.slick-orbit').slick('unslick');
    
    checkSize();
    
})

$(window).on('open.zf.reveal', function(){
    if(!loaded){
        slickInitiate();
        $('.slick-orbit').slick('refresh');
    }
});