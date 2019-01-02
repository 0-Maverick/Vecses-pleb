// Script by 0-Maverick
// Created on 2019-Dec-30
// Changes:
// 2019-Dec-30: Dynamically load a page to a Div

// Dynamically load a page to a Div.
// Source: https://teamtreehouse.com/community/loading-external-html-into-a-div-using-jquery
var includeDiv = $("#ann_loc");
var includeFolder = 'announcements/';
$(window).on('hashchange', function() {
    var href = location.hash.slice(1) +".html";
    includeDiv.load(includeFolder + href);

    $("html, body").animate({
        scrollTop: $(includeDiv).offset().top});
});
