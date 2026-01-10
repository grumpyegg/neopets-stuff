// ==UserScript==
// @name         Stamp Album Page Flipper
// @version      2026-01-10
// @description  browse stamp albums with next/previous page buttons and organized page links
// @author       grumpyegg
// @match        *://*.neopets.com/stamps.phtml*
// @icon         https://images.neopets.com/community/hub/calendar/events/ixi.png
// @downloadURL  https://github.com/grumpyegg/neopets-stuff/raw/refs/heads/main/stampAlbumPageFlipper.user.js
// @updateURL    https://github.com/grumpyegg/neopets-stuff/raw/refs/heads/main/stampAlbumPageFlipper.user.js
// @grant        GM_addStyle
// ==/UserScript==

(() => {
    const url = new URL(location.href);
    let currentPage = parseInt(url.searchParams.get("page_id") || "0", 10);
    let lastPage = 49; // Charms III

    const pageTitleEl = document.querySelector('table tbody tr:first-child td[colspan] > b');
    const pageLinksEl = document.querySelector('div[style="width: 635px;"]');

    const shortNamesMap = {
        "Meridell vs. Darigan" : "Meridell vs. Dari",
        "Space Station Coins" : "Space Coins",
        "Treasures of the Deep" : "Treasures",
        "Coins Part Deux Revenge of Coin" : "Coins Part Deux"
    };

    const ARROW_IMG = "https://images.neopets.com/altador/altadorcup/2022/nc/arrow_gold.png";

    function pagesGrid() {
        const bs = pageLinksEl.querySelectorAll('b');
        const header = Array.from(bs).find(b => b.textContent.includes("Stamp Album"));

        if(!header) return;

        const linkContainer = header.parentElement.nextElementSibling;
        if(!linkContainer) return;

        let pageLinks = Array.from(linkContainer.querySelectorAll('a'))
            .filter(link => link.textContent !== "Front Page")
            .map(link => {
                const shortName = shortNamesMap[link.textContent];
                if(shortName) {
                    link.textContent = shortName;
                }
                const linkUrl = new URL(link.href, location.origin);
                const linkPage = parseInt(linkUrl.searchParams.get("page_id") || "0", 10);

                if(linkPage === currentPage) {
                    link.classList.add("current");
                }
                return link;
            }
        );

        // create grid of page links
        const grid = document.createElement('div');
        grid.className = 'page-grid';
        pageLinks.forEach(link => grid.appendChild(link));
        linkContainer.replaceWith(grid);

        lastPage = pageLinks.length;
    }

    function navArrows() {
        if(pageTitleEl) {
            const title = pageTitleEl.textContent.trim();
            const match = title.match(/^-?\s*(.*?)\s*-?$/);
            pageTitleEl.textContent = match ? match[1] : title;
            pageTitleEl.style.fontSize = "14px";

            // previous page button
            if(currentPage > 0) {
                const prevPageUrl = new URL(location.href);
                prevPageUrl.searchParams.set("page_id", currentPage - 1);

                const prevBtn = document.createElement("a");
                prevBtn.href = prevPageUrl.toString();

                const prevArrow = document.createElement("img");
                prevArrow.src = ARROW_IMG;
                prevArrow.className = "arrow";
                prevArrow.style.marginRight = "16px";
                prevBtn.appendChild(prevArrow);
                pageTitleEl.before(prevBtn);
            }

            // next page button
            if(currentPage < lastPage) {
                const nextPageUrl = new URL(location.href);
                nextPageUrl.searchParams.set("page_id", currentPage + 1);

                const nextBtn = document.createElement("a");
                nextBtn.href = nextPageUrl.toString();

                const nextArrow = document.createElement("img");
                nextArrow.src = ARROW_IMG;
                nextArrow.className = "arrow";
                nextArrow.style.transform = "scaleX(-1)";
                nextArrow.style.marginLeft = "16px";
                nextBtn.appendChild(nextArrow);
                pageTitleEl.after(nextBtn);
            }
        }
    }

    if(pageLinksEl) {
        pagesGrid();
    }
    if(pageTitleEl) {
        navArrows();
    }

    GM_addStyle(`
        .page-grid {
            column-width: 120px;
            column-gap: 2px;
            margin-bottom: 10px;
        }
        .page-grid a {
            display: block;
            font-size: 11px;
            break-inside: avoid;
        }
        .page-grid a.current {
          background-color: #fae955;
          font-weight: bold;
          color: #000000;
          display: inline;
        }
        .arrow {
            height: 28px;
            vertical-align: middle;
        }
    `);

})();
