// ==UserScript==
// @name         Books Read Search and Sort
// @version      2026-01-13
// @description  adds a search bar to Books Read list and an option to sort alphabetically
// @author       madge
// @match        *://*.neopets.com/books_read.phtml*
// @match        *://*.neopets.com/moon/books_read.phtml*
// @icon         https://images.neopets.com/community/hub/calendar/events/ixi.png
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    // booktastic doesn't provide the titles, so no searching or sorting those :-(
    if(location.pathname.includes('moon')) {
        const params = new URLSearchParams(location.search);
        const name = params.get('pet_name');
        const petContainer = document.querySelector('center');

        // link back to regular books read
        const regBooks = document.createElement('p');
        regBooks.style.marginTop = '0px';
        const encodedPetName = encodeURIComponent(name);
        regBooks.innerHTML =
            `If you want to see the other books your pet has read, you can view the list <a href="https://www.neopets.com/books_read.phtml?pet_name=${encodedPetName}">here</a>.`;
        petContainer.parentNode.insertBefore(regBooks, petContainer);
        return;
    }

    const table = document.querySelector('td.content table');
    if (!table) return;

    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const headerRow = rows[0];
    const bookRows = rows.slice(1);
    const releaseOrder = [...bookRows];

    function sortByTitle() {
        const titleOrder = [...bookRows].sort((a, b) => {
            const titleA = a.cells[1].textContent.split(':')[0].trim().toLowerCase();
            const titleB = b.cells[1].textContent.split(':')[0].trim().toLowerCase();
            return titleA.localeCompare(titleB);
        });
        buildTable(titleOrder);
    }

    function sortByRelease() {
        buildTable(releaseOrder);
    }

    function buildTable(rows) {
        const parent = tbody.parentNode;
        parent.removeChild(tbody);
        tbody.innerHTML = '';
        tbody.appendChild(headerRow);
        rows.forEach(r => tbody.appendChild(r));
        parent.appendChild(tbody);
    }

    // add sort buttons
    const sortControls = document.createElement('div');
    sortControls.style.margin = '10px 0';
    sortControls.style.textAlign = 'center';

    sortControls.innerHTML = `
      <label>
        <input type="radio" name="sortBooks" value="releaseOrder" checked>
        Sort by ID (Default)
      </label>
        &nbsp;&nbsp;
      <label>
       <input type="radio" name="sortBooks" value="titleOrder">
          Sort by Title (A-Z)
        </label>
    `;

    table.parentNode.insertBefore(sortControls, table);

    sortControls.addEventListener('change', (e) => {
      e.target.value === 'titleOrder' ? sortByTitle() : sortByRelease();
    });

    // add search bar
    const searchBar = document.createElement('div');
    searchBar.style.textAlign = 'center';
    searchBar.style.margin = '10px 0';
    searchBar.innerHTML = `
      <input type="text"
        id="bookSearch"
        placeholder="Search for title..."
        maxLength="50"
        style="padding:4px 6px; width:250px;"
       >`;
    table.parentNode.insertBefore(searchBar, table);

    const searchInput = document.getElementById('bookSearch');
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.trim().toLowerCase();
      bookRows.forEach(row => {
        const title = row.cells[1].textContent.split(':')[0].trim().toLowerCase();
        row.style.display = title.includes(searchTerm) ? '' : 'none';
      });
    });
})();

GM_addStyle(`
  td.content img[src*="pets.neopets.com"] {
    width:100px;
    height: auto;
    margin-bottom: 10px;
  }

  img[src$="trophy_books_read_1.gif"], img[src$="trophy_booktastic_books_1.gif"] {
    display: none;
  }

  td.content hr {
   display: none;
  }

  td.content div[style*="width:504px"],
  td.content div[style*="width:500px"] {
    width: 700px !important;
    border: none !important;
  }

  td.content table {
    width: 700px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }

  td.content table td {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
  }

  td.content table tbody td img {
    width: 65px;
    height: auto;
  }

  td.content table td font {
    display: none;
  }

  td.content table tr:not(:first-child) td:nth-child(2) {
    font-weight: bold;
  }
   td.content table tr:not(:first-child) td:nth-child(2) i {
    font-weight: normal;
  }
`);