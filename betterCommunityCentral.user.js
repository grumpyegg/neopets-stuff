// ==UserScript==
// @name         Better Community Central
// @version      2025-09-13
// @description  i made this because those buttons were too dang big
// @author       grumpyegg
// @match        https://www.neopets.com/community/*
// @icon         https://images.neopets.com/community/hub/calendar/events/ixi.png
// @grant        GM_addStyle
// @downloadURL  https://github.com/grumpyegg/neopets-stuff/raw/refs/heads/main/betterCommunityCentral.user.js
// @updateURL    https://github.com/grumpyegg/neopets-stuff/raw/refs/heads/main/betterCommunityCentral.user.js
// ==/UserScript==

const puzzle = document.querySelector('div.question.sf');
const newsContainer = document.querySelector('.news-feeds');

if (puzzle) {
    const answer = document.createElement('a');
    answer.href = 'https://www.jellyneo.net/?go=dailypuzzle';
    answer.target = '_blank';
    answer.textContent = 'Tell me the answer!';
    answer.classList.add('answer-link');
    puzzle.parentNode.insertBefore(answer, puzzle.nextSibling);
}

if (newsContainer) {
    const socialButtons = document.createElement('div');
    socialButtons.classList.add('button-wrapper');

    const facebook = document.createElement('a');
    facebook.href = 'https://www.facebook.com/Neopets/';
    facebook.target = '_blank';
    facebook.textContent = 'Neopets Facebook';
    facebook.classList.add('button-default__2020', 'button-yellow__2020', 'btn-single__2020');
    socialButtons.appendChild(facebook);

    const twitter = document.createElement('a');
    twitter.href = 'https://x.com/Neopets';
    twitter.target = '_blank';
    twitter.textContent = 'Neopets Twitter';
    twitter.classList.add('button-default__2020', 'button-yellow__2020', 'btn-single__2020');
    socialButtons.appendChild(twitter);

    newsContainer.appendChild(socialButtons);
}

GM_addStyle(`
  .community-pages__2020 { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
  .answer-link { display : block; margin: 10px auto; text-align: center; }
  .news-feeds { display: block !important; }
  .new-features { max-height: 100% !important; }
  .twitter-feed { display: none; }
  .facebook-feed { display: none; }
  .button-wrapper { text-align: center; margin-top: 20px;}
  .button-wrapper a.button-yellow__2020 { display: inline-block; margin: 10px !important; }
`);

