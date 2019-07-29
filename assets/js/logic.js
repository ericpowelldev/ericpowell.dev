$(window).on('load', function () {
    currentPage.name = 'profile';
    currentPage.index = window.history.length;
    hideHTML();
    $(".navBtn#nProfile").addClass("navBtnActive");
    $(".navBtn#nWork").removeClass("navBtnActive");
    $(".navBtn#nContact").removeClass("navBtnActive");
    $("#profile").show();
    $("#cover").hide();
});

let currentPage = {
    name: 'profile',
    index: 0,
};

window.onpopstate = function (event) {
    currentPage.name = event.state.name;
    currentPage.index = event.state.index;
    console.log(history.state);
    console.log(window.history.length);
    showHTML(currentPage.name);
};

function createHistory() {
    let dataName = $(this).attr("data-name");
    if (currentPage.name !== dataName) {
        currentPage.name = dataName;
        history.pushState(currentPage, "", "index.html");
        currentPage.index = window.history.length;
        console.log(history.state);
        console.log(window.history.length);
        showHTML(currentPage.name);
    }
    else console.log('State already loaded...');
}

function hideHTML() {
    $("#profile").hide();
    $("#work").hide();
    $("#contact").hide();
    scroll(0, 0);
}
function showHTML(page) {
    hideHTML();
    if (page === 'profile') {
        $(".navBtn#nProfile").addClass("navBtnActive");
        $(".navBtn#nWork").removeClass("navBtnActive");
        $(".navBtn#nContact").removeClass("navBtnActive");
        $("#profile").show();
    }
    else if (page === 'work') {
        $(".navBtn#nProfile").removeClass("navBtnActive");
        $(".navBtn#nWork").addClass("navBtnActive");
        $(".navBtn#nContact").removeClass("navBtnActive");
        $("#work").show();
    }
    else if (page === 'contact') {
        $(".navBtn#nProfile").removeClass("navBtnActive");
        $(".navBtn#nWork").removeClass("navBtnActive");
        $(".navBtn#nContact").addClass("navBtnActive");
        $("#contact").show();
    }
    else console.log('ERROR: Page does not exist!')
}

$(document).on("click", "#nProfile", createHistory);
$(document).on("click", "#nWork", createHistory);
$(document).on("click", "#nContact", createHistory);