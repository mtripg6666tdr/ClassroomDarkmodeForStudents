// ==UserScript==
// @name         Classroom Darkmode For Students
// @namespace    https://scrpg.tyanoyu.net
// @version      0.3
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
                "div[role=\"button\"]",
                "div[role=\"alertdialog\"]",
                "input",
                ".hgjBDc",
                "div[contenteditable=\"true\"]",
                "div[role=\"listbox\"]",
                "div[role=\"option\"]",
                "div[role=\"presentation\"]",
                ".FwR7Pc",
                ".DShyMc-AaTFfe .UISY8d-Ysl7Fe:hover, .DShyMc-AaTFfe.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-AaTFfe .MymH0d:hover .UISY8d-Ysl7Fe",
                ".DShyMc-MTA0NDE2OTU0Njg3 .UISY8d-Ysl7Fe:hover, .DShyMc-MTA0NDE2OTU0Njg3.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTA0NDE2OTU0Njg3 .MymH0d:hover .UISY8d-Ysl7Fe",
                ".tYQn5c",
                ".I7OXgf",
                ".D3oBEe .qTs5Xc",
                ".FwR7Pc",
                ".vnnr5e .CIy9F",
                ".vnnr5e .I9OJHe",
                ".IzVHde",
                ".DC55n td",
                ".i9xfbb>.PkgjBf",
                ".uqpvt",
                ".gb_E",
                ".gb_4a.gb_5a",
                ".gb_5a",
                ".gb_rb.gb_rb",
                ".gb_vb.gb_vb",
                ".gb_Cb.gb_Cb, .gb_Db.gb_Db",
                ".gb_k .gb_ib",
                ".JdGGFd, .lbWVCe"
            ].join(",")).css( "background-color", "rgba(40,40,40,1)");

            if(window.jQuery("nav > div.QRiHXd > div.FXKA9c > div > h1 > div > span").text()!=="Classroom Darkmode"){
                window.jQuery("nav > div.QRiHXd > div.FXKA9c > div > h1 > div > span").text("Classroom Darkmode");
            }

            if(document.getElementsByClassName('cdfs').length===0){
                let style = document.createElement('style');
                style.textContent = [
                    ".DShyMc-NDQ3Mjc0MTQ4MDVa .eumXzf:after{border-color: white !important}",
                    ".UISY8d-Ysl7Fe:hover, .MymH0d:hover .UISY8d-Ysl7Fe, .MymH0d:hover .UISY8d-Ysl7Fe{background-color:rgba(60,60,60,1) !important}",
                    ".P3W0Dd-Ysl7Fe:focus, .maXJsd:focus .P3W0Dd-Ysl7Fe, .maXJsd:focus .P3W0Dd-Ysl7Fe{background-color:rgba(60,60,60,1) !important}",
                    ".tfGBod.tfGBod:not(.xp2dJ), .tfGBod.xp2dJ .jWCzBe, .tfGBod.xp2dJ .iobNdf{background-color:rgba(60,60,60,1) !important}",
                    ".OlXwxf.OlXwxf:hover, .OlXwxf:hover+.OlXwxf{border-top:0.0625rem solid #e0e0e0}",
                    "aside.asCVDb.BiaLW[role=\"complementary\"]{background-color:rgba(60,60,60,1) !important}",
                    ".u73Apc{border-bottom:0px}"
                ].join('');
                style.className = "cdfs";
                document.getElementsByTagName('body')[0].appendChild(style);
            }

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
    ["click", "pointerdown", "pointermove"].forEach(ev => document.addEventListener(ev, fn));
    // Your code here...
})();
