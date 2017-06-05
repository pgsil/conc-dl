// ==UserScript==
// @name         Download Focus Concursos
// @namespace    https://github.com/pgsil/conc-dl/
// @version      0.1
// @description  Adds buttons to download videos from Focus Concursos (if you have paid access) so you don't have to stream them
// @author       You
// @match        https://www.focusconcursos.com.br/focus-online/cliente/*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('.d-block .form-group').append('<a class="btn btn-sm btn-warning btn-danger botao-do-download" download>Download</a>');
    setInterval(function(){
        $('.botao-do-download').attr("href", $('#player-js_html5_api').attr("src"));
    }, 500);
})();
