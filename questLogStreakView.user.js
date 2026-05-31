// ==UserScript==
// @name         Quest Log Streak View
// @version      2025-09-27
// @description  displays quest log daily (bonus) progress and streak progress together
// @author       grumpyegg
// @match        https://www.neopets.com/questlog/
// @icon         https://images.neopets.com/community/hub/calendar/events/ixi.png
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
  #QuestLogStreakRewards, #QuestLogBonusRewards {
    display: block;
  }

  .ql-bonus-label, .ql-desc, .ql-progress-amt {
    display: none !important;
  }

  .questlog-bonus-rewards {
    padding-bottom: 30px !important;
    width: 100% !important;
  }
`);

// extra stuff
GM_addStyle(`
  .questlog-timer {
    margin: 0 0 auto auto !important;
  }

  .questlog-neopass-link {
    display: none;
  }
`);

