$(window).on('load', function () {
    showProfile();
    $("#cover").hide();
});

function hideHTML() {
    $("#profile").hide();
    $("#work").hide();
    $("#contact").hide();
    scroll(0,0);
}
function showProfile() {
    hideHTML();
    $(".navBtn#nProfile").addClass("navBtnActive");
    $(".navBtn#nWork").removeClass("navBtnActive");
    $(".navBtn#nContact").removeClass("navBtnActive");
    $("#profile").show();
}
function showWork() {
    hideHTML();
    $(".navBtn#nProfile").removeClass("navBtnActive");
    $(".navBtn#nWork").addClass("navBtnActive");
    $(".navBtn#nContact").removeClass("navBtnActive");
    $("#work").show();
}
function showContact() {
    hideHTML();
    $(".navBtn#nProfile").removeClass("navBtnActive");
    $(".navBtn#nWork").removeClass("navBtnActive");
    $(".navBtn#nContact").addClass("navBtnActive");
    $("#contact").show();
}

$(document).on("click", "#nProfile", showProfile);
$(document).on("click", "#nWork", showWork);
$(document).on("click", "#nContact", showContact);