// ==UserScript==
// @name         Classroom Darkmode For Students
// @namespace    https://scrpg.tyanoyu.net
// @version      0.1
// @description  Have your eyes safe also in Google Classroom.
// @author       mtripg6666tdr
// @match        https://classroom.google.com/*
// @match        https://ogs.google.com/u/0/widget/app*
// @match        https://drive.google.com/picker*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    const fn = function(){
        if(location.href.indexOf("classroom.google.com">=0)){
            window.jQuery([
                "body",
                ".Aopndd",
                ".d4Fe0d",
                ".ETRkCe",
                "body nav",
                "iframe",
                "div[role=\"menu\"]",
                "div[role=\"alertdialog\"]",
                "input",
            ].join(",")).css("background-color", "rgba(40,40,40,1)");
            window.jQuery("*").css("color", "white");
            if(location.href.indexOf("https://classroom.google.com")<0){
                window.jQuery("*").css("background-color","rgba(40,40,40,1)");
            }
        }
    };
    fn();
    let observer = new MutationObserver(()=>{
        fn();
    });
    observer.observe(document.getElementsByTagName("body")[0], {
        childList: true,
        attributes: false,
        subtree: true
    });
    // Your code here...
})();