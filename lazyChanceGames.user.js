// ==UserScript==
// @name         Lazy Chance Games
// @version      2026-05-29
// @description  makes buttons in Dice-A-Roo, Double or Nothing, Kiss The Mortog, and Scorchy Slots bigger for faster clicking
// @author       madge
// @match        https://www.neopets.com/games/play_dicearoo.phtml
// @match        https://www.neopets.com/medieval/doubleornothing.phtml*
// @match        https://www.neopets.com/medieval/kissthemortog.phtml*
// @match        https://www.neopets.com/games/slots.phtml*
// @icon         https://images.neopets.com/community/hub/calendar/events/ixi.png
// @grant        GM_addStyle
// ==/UserScript==

// dice-a-roo
GM_addStyle(`
  input[type="submit"][value="Roll Again"] {
    height: 50px;
    margin: 5px;
  }
  input[type="submit"][value="Press Me"] {
    height: 50px;
    margin: 5px;
  }
`);

// double or nothing, kiss the mortog
GM_addStyle(`
  input[type="submit"][value="Continue"] {
    height: 50px;
    margin: 5px;
  }
  input[type="submit"][value="Try again..."] {
    height: 50px;
    margin: 5px;
  }
`);

// scorchy slots
GM_addStyle(`
  input[type="submit"][value="Play Again"] {
    height: 50px;
    margin: 5px;
  }
 `);