// ==UserScript==
// @name         Link to Jellyneo Lab Ray Logger
// @version      2025-07-28
// @description  keep track of those zaps!
// @author       grumpyegg
// @match        https://www.neopets.com/process_lab2.phtml
// @icon         https://images.neopets.com/community/hub/calendar/events/ixi.png
// @downloadURL  https://github.com/grumpyegg/neopets-stuff/raw/refs/heads/main/labRayLoggerLink.user.js
// @updateURL    https://github.com/grumpyegg/neopets-stuff/raw/refs/heads/main/labRayLoggerLink.user.js
// ==/UserScript==

const center = document.querySelector('body > center');

if(center) {
    const link = document.createElement('a');
    link.href = 'https://www.jellyneo.net/?go=lab_ray_logger';
    link.target = "_blank";
    link.textContent = '🗲 Log This Zap on Jellyneo! 🗲';
    link.style.marginTop = '25px';
    center.appendChild(link);
}
