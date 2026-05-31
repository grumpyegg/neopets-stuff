// ==UserScript==
// @name         Lazy Cheeseroller
// @version      2026-01-10
// @description  always search for rotten cheese
// @author       grumpyegg
// @match        https://www.neopets.com/medieval/cheeseroller.phtml
// @icon         https://images.neopets.com/community/hub/calendar/events/ixi.png
// ==/UserScript==

const cheeseEl = document.querySelector('input[name="cheese_name"]');

if(cheeseEl) {
    cheeseEl.value = "Rotten";
}