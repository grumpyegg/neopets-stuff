// ==UserScript==
// @name         Quest Log Streak View
// @version      2026-10-27
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

  .ql-bonus-label, .ql-desc, .ql-progress, .ql-streak-divider, .ql-streak.premium.preview, .ql-streak-cta {
    display: none !important;
  }

  #QuestLogBonusRewards .ql-bonus-progress {
    width: 80% !important;
  }
  .questlog-bonus-rewards {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
  }
`);

// extra stuff
GM_addStyle(`
  .questlog-neopass-link {
    display: none;
  }
`);

