// ==UserScript==
// @name         Gormball MVP
// @version      2025-09-15
// @description  if gormball has one fan, i'm that one
// @author       grumpyegg
// @match        https://www.neopets.com/space/gormball.phtml
// @match        https://www.neopets.com/space/gormball2.phtml
// @icon         https://images.neopets.com/community/hub/calendar/events/ixi.png
// @grant        GM_addStyle
// @downloadURL  https://github.com/grumpyegg/neopets-stuff/raw/refs/heads/main/gormballMVP.user.js
// @updateURL    https://github.com/grumpyegg/neopets-stuff/raw/refs/heads/main/gormballMVP.user.js
// ==/UserScript==

(() => {
    // add a player's exact name to always select them to back! i.e myFavoritePlayer = "Farvin III"
    const myFavoritePlayer = "INSERT PLAYER NAME HERE";

    const playerMap = {
        "Thyassa": {option: "1", moveImg: "https://images.neopets.com/new_shopkeepers/t_1008.gif"},
        "Brian": {option: "2", moveImg: "https://images.neopets.com/new_shopkeepers/t_1735.gif"},
        "Gargarox": {option: "3", moveImg: "https://images.neopets.com/new_shopkeepers/t_1005.gif"},
        "Farvin III": {option: "4", moveImg: "https://images.neopets.com/new_shopkeepers/t_1736.gif"},
        "Ember": {option: "5", moveImg: "https://images.neopets.com/new_shopkeepers/t_1012.gif"},
        "Zargrold": {option: "6", moveImg: "https://images.neopets.com/new_shopkeepers/t_1010.gif"},
        "Ursula": {option: "7", moveImg: "https://images.neopets.com/new_shopkeepers/t_1738.gif"},
        "Kevin": {option: "8", moveImg: "https://images.neopets.com/new_shopkeepers/t_1009.gif"}
    };

    const path = window.location.pathname;

    function favoritePlayer(table) {
        // select player
        const selectEl = document.getElementById('playerDD');
        const player = playerMap[myFavoritePlayer];
        if(selectEl && player) {
            selectEl.value = player.option;
        }

        // highlight bio
        const tds = table.querySelectorAll('td');
        for(const td of tds) {
            if(td.textContent.includes(myFavoritePlayer)) {
                td.style.backgroundColor = '#fcf797';
            }
        }
    }

    function replaceBioImages(table) {
        // paste in your own 80x80 images if you want!
        const bioImgMap = {
            "//images.neopets.com/games/gormball/head_1.gif": "//images.neopets.com/items/plu_chia_thyassa.gif",
            "//images.neopets.com/games/gormball/head_2.gif": "//images.neopets.com/items/plu_scorchio_brian.gif",
            "//images.neopets.com/games/gormball/head_3.gif": "//images.neopets.com/items/plu_garagrox.gif",
            "//images.neopets.com/games/gormball/head_4.gif": "//images.neopets.com/items/plu_farvin_iii.gif",
            "//images.neopets.com/games/gormball/head_5.gif": "//images.neopets.com/items/plu_faerie_ember.gif",
            "//images.neopets.com/games/gormball/head_6.gif": "//images.neopets.com/items/plu_grundo_zargrold.gif",
            "//images.neopets.com/games/gormball/head_7.gif": "//images.neopets.com/items/plu_ursula.gif",
            "//images.neopets.com/games/gormball/head_8.gif": "//images.neopets.com/items/plu_kevin.gif"
        };

        const imgs = document.querySelectorAll('img');
        imgs.forEach(img => {
            const imgSrc = img.getAttribute('src');
            if(bioImgMap[imgSrc]) {
                img.src = bioImgMap[imgSrc];
            }
        });
    }

    function replaceFlash(noFlash) {
        noFlash.style.display = 'none';
        const imageEl = document.createElement('img');
        imageEl.src = 'https://i.imgur.com/kXB1XZg.png';
        imageEl.classList.add('gormball-home-img');
        noFlash.parentNode.insertBefore(imageEl, noFlash.nextSibling);

        GM_addStyle(`
          .gormball-home-img { width: 400px; height: auto; margin: auto; }
          .flashRIP__2020 { background-color: transparent !important; }
        `);
    }

    function addExtras() {
        // neopedia link
        const divs = document.querySelectorAll('div[align="center"]');
        for (const div of divs) {
            if(div.textContent.includes('back to the Space Station')) {
                const linkEl = document.createElement('div');
                linkEl.innerHTML = `
                   <p style="text-align:center;">
                     Click <a href="/neopedia.phtml?neopedia_id=5" target="_blank"><b>here</b></a> to read about the Annual Gormball Championship! (September 23)
                   </p>`;
                div.parentNode.insertBefore(linkEl, div);
                break;
            }
        }

        // get extra hyped :3
        for (const bold of document.querySelectorAll('b')) {
            if (bold.textContent.includes('YEAH!')) {
                bold.textContent = 'YEEEEEAAAAAAHHHHHH!';
                break;
            }
        }
    }

    function displayScore() {
        for (const b of document.querySelectorAll('b')) {
            if(b.innerHTML.includes('Gorm<br>Pts')) {
                b.innerHTML = b.innerHTML.replace(/<br\s*\/?>/i, ' ');

                const ptsText = b.textContent.match(/Pts\s*:\s*(\d+)/);
                if(ptsText) {
                    const pts = parseInt(ptsText[1], 10);
                    const winningScore = pts * 4;

                    const scoreEl = document.createElement('div');
                    scoreEl.textContent = `Win Score: ${winningScore}`;
                    scoreEl.classList.add('gormball-score');
                    b.parentNode.appendChild(scoreEl);
                }
                break;
            }
        }
        GM_addStyle('.gormball-score { font-weight: bold; padding-bottom: 10px; }');
    }

    function displayMoveImages() {
        let move = "";
        const tds = document.querySelectorAll('td');

        for (const td of tds) {
            const b = td.querySelector('b');
            if(b) {
                const text = b.textContent;
                if(playerMap[text]) {
                    move = text; // your move
                }

                if (text.toLowerCase().includes('move')) {
                    for(const name in playerMap) {
                        if(text.includes(`${name}'s`)) {
                            move = name;
                            break;
                        }
                    }

                    // add an image of the player who has the ball
                    const image = playerMap[move]?.moveImg;
                    if(image) {
                        const imageEl = document.createElement('img');
                        imageEl.src = image;
                        imageEl.classList.add('gormball-move-img');
                        td.classList.add('gormball-move-td');
                        b.parentNode.insertBefore(imageEl, b);
                    }

                    break;
                }
            }
        }
    }

    if(path === '/space/gormball.phtml') {
        const table = document.querySelector('table[style*="border:1px solid black"]');
        const noFlash = document.querySelector('.flashRIP-content__2020');

        if(table) {
            if(playerMap[myFavoritePlayer]) {
                favoritePlayer(table);
            }
            replaceBioImages(table);
        }

        if(noFlash) {
            replaceFlash(noFlash);
        }

        addExtras();
    }

    if(path === '/space/gormball2.phtml') {
        displayScore();
        displayMoveImages();

        GM_addStyle(`
          .gormball-score { font-weight: bold; padding-bottom: 10px; }
          .gormball-move-img { display: flex; width: 100px; height: auto; padding: 5px; }
          .gormball-move-td { padding-top: 10px; padding-bottom: 10px; }
        `);
    }
})();
