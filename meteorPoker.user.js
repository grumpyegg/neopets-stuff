// ==UserScript==
// @name         Lazy Meteor
// @version      2025-09-27
// @description  always poke the meteor
// @author       grumpyegg
// @match        https://www.neopets.com/moon/meteor.phtml*
// @icon         https://images.neopets.com/community/hub/calendar/events/ixi.png
// ==/UserScript==

const selectEl = document.querySelector('select[name="pickstep"]');

if(selectEl) {
    selectEl.value = "1";
}
