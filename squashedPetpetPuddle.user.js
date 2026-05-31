// ==UserScript==
// @name         Squashed Petpet Puddle
// @version      2026-03-12
// @description  displays petpet options in a grid instead of one long row
// @author       madge
// @match        https://www.neopets.com/pool/puddle.phtml
// @icon         https://images.neopets.com/community/hub/calendar/events/ixi.png
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
  td.content table tr {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
  }

  td.content table td {
    width: 120px;
  }
`);