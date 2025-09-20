// ==UserScript==
// @name         Meteor Poker
// @version      2025-09-19
// @description  are you really that lazy? yeah. what about it
// @author       grumpyegg
// @match        https://www.neopets.com/moon/meteor.phtml*
// @icon         https://images.neopets.com/community/hub/calendar/events/ixi.png
// @downloadURL  https://github.com/grumpyegg/neopets-stuff/raw/refs/heads/main/meteorPoker.user.js
// @updateURL    https://github.com/grumpyegg/neopets-stuff/raw/refs/heads/main/meteorPoker.user.js
// ==/UserScript==

const selectEl = document.querySelector('select[name="pickstep"]');

if(selectEl) {
    selectEl.value = "1";
}
