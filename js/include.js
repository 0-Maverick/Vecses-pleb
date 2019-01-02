// Script by 0-Maverick
// Created on 2019-Dec-30
// Changes:
// 2019-Dec-30: Dynamically load a page to a Div

// Dynamically load a page to a Div.
// Source: https://teamtreehouse.com/community/loading-external-html-into-a-div-using-jquery

function load_announcement(ann_page) {
    // alert("load_announcement: " + ann_page);

    includeDiv.load(ann_page);

    $("html, body").animate({
        scrollTop: $(scrollDiv).offset().top});
}

var scrollDiv = $("#nav_curr");
var includeDiv = $("#ann_loc");
var includeFolder = 'announcements/';

$(window).on('hashchange', function() {
    var href = location.hash.slice(1) +".html";

    // alert("Hashchange alert: " + href);

    load_announcement(includeFolder + href);
    // includeDiv.load(includeFolder + href);


    // $("html, body").animate({
    //     scrollTop: $(includeDiv).offset().top});
});

$(window).on('load', function() {
    var href = location.hash.slice(1) +".html";
    // alert("Load alert: " + href);

    load_announcement(includeFolder + href);
});
