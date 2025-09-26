// ==UserScript==
// @name         Watch Ad Buttons-Be-Gone
// @version      2025-09-19
// @description  hides options for extra ads around the site
// @author       madge
// @match        *://www.neopets.com/*
// @icon         https://images.neopets.com/community/hub/calendar/events/ixi.png
// @grant        GM_addStyle
// @downloadURL  https://github.com/grumpyegg/neopets-stuff/raw/refs/heads/main/watchAdButtonsBeGone.user.js
// @updateURL    https://github.com/grumpyegg/neopets-stuff/raw/refs/heads/main/watchAdButtonsBeGone.user.js
// ==/UserScript==

let styles = "";

// watch daily ad button (homepage)
styles += `.navsub-AdRewards-icon__2020 { display: none !important; } `;

// watch ad for extra spin (wheels)
styles += `#watchAdContainer { display: none; } `;

// watch ad for extra play (faerie caverns, TVW - lost in the dark)
styles += `#watchAdsIconCaverns #watchAdsIconLitd { display: none; } `;

// watch ad for extra prizes (battledome, TVW - attack on altador)
styles += `#SkipButton, #NoAdsNow, #adsTxt { display: none; } `;

// watch ad to skip time (TVW - hospital)
styles += `#SkipButton3, #SkipButton4, #SkipButton6, #SkipButton7, #SkipButton8, #SkipButton11, #SkipButton16,
           #NoAdsNow3, #NoAdsNow4, #NoAdsNow6, #NoAdsNow7, #NoAdsNow8, #NoAdsNow11, #NoAdsNow16 { display: none; } `;

// streak saver ads (trudy's, quest log)
styles += `.missed-day-button-container, .questlog-missed-day { display: none; } `;

// premium perk ads (shop wizard, games room, lab rays, gallery, neolodge, scratchcards)
styles += `.premium-promo { display: none !important; } `;

// time saver fortune cookie ad (grave danger)
styles += `#gdFortuneCookie { display: none } `;

// landelbrots void attractor ad (TVW - maps)
styles += `#VCPromo { display: none; }`;


GM_addStyle(styles);


