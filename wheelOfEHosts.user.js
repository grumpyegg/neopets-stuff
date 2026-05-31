// ==UserScript==
// @name         Wheel of Excitement Faerie Hosts
// @version      2026-01-13
// @description  WoE is hosted by Jhudora or another faerie of your choosing: Illusen, Fyora, Luxinia, Baelia, Naia, or Seshatia
// @author       grumpyegg
// @match        https://www.neopets.com/faerieland/wheel.phtml
// @icon         https://images.neopets.com/community/hub/calendar/events/ixi.png
// @grant        GM_addStyle
// ==/UserScript==

// choose your faerie host! enter their exact name in the quotes:
// Jhudora
// Illusen
// Fyora
// Luxinia
// Baelia
// Naia
// Seshatia
const myFaerie = 'Jhudora';

const IMAGES = { // thank you drsloth.com
    jhudoraDefault: 'https://images.neopets.com/faeriefestival/2024/np/characters/JhudoraHappyLeft.png',
    jhudoraGood: 'https://images.neopets.com/faeriefestival/2024/np/characters/JhudoraSmirkingLeft.png',
    jhudoraBad: 'https://images.neopets.com/faeriefestival/2024/np/characters/JhudoraAngryLeft.png',
    illusenDefault: 'https://images.neopets.com/faeriefestival/2024/np/characters/IllusenHappyLeft.png',
    illusenGood: 'https://images.neopets.com/faeriefestival/2024/np/characters/IllusenHappySingLeft_i9k2akmk7i.png',
    illusenBad: 'https://images.neopets.com/faeriefestival/2024/np/characters/IllusenAngryLeft.png',
    fyoraDefault: 'https://images.neopets.com/plots/tvw/story/dialogue/actors/fyora_serious_left_67c2ennhc5.png',
    fyoraGood: 'https://images.neopets.com/faeriefestival/2024/np/characters/FyoraHappyLeft.png',
    fyoraBad: 'https://images.neopets.com/winter/advent/2023/dialogue_r0c67gl903/actors/FyoraWorriedRight.png',
    luxiniaDefault: 'https://images.neopets.com/plots/tvw/story/dialogue/actors/luxinia_default_left_d478bf71ig.png',
    luxiniaGood: 'https://images.neopets.com/plots/tvw/story/dialogue/actors/luxinia_relieved_left_2cgc989m9f.png',
    luxiniaBad: 'https://images.neopets.com/plots/tvw/story/dialogue/actors/luxinia_upset_left_c7llg0j1g3.png',
    baeliaDefault: 'https://images.neopets.com/plots/tvw/story/dialogue/actors/baelia_slightsmile_left_3maemk4d65.png',
    baeliaGood: 'https://images.neopets.com/plots/tvw/story/dialogue/actors/baelia_confused_left_9ac442caeb.png',
    baeliaBad: 'https://images.neopets.com/plots/tvw/story/dialogue/actors/baelia_embarrassed_left_e3ccc1db2c.png',
    naiaDefault: 'https://images.neopets.com/plots/tvw/story/dialogue/actors/naia_happy_left_af6246l2jl.png',
    naiaGood: 'https://images.neopets.com/plots/tvw/story/dialogue/actors/naia_happy_left_af6246l2jl.png',
    naiaBad: 'https://images.neopets.com/plots/tvw/story/dialogue/actors/naia_worried_left_d4e8mjei21.png',
    seshatiaDefault: 'https://images.neopets.com/faeriefestival/2024/np/characters/SeshatiaHappyLeft_hggifb5c50.png',
    seshatiaGood: 'https://images.neopets.com/faeriefestival/2024/np/characters/SeshatiaHappyLeft_hggifb5c50.png',
    seshatiaBad: 'https://images.neopets.com/faeriefestival/2024/np/characters/SeshatiaWorriedLeft_e6f4ijjf1a.png'
}

switch (myFaerie.toLowerCase()) {
    case 'jhudora':
        GM_addStyle(`
          #wheelCharacter.wheelChar { background-image: url("${IMAGES.jhudoraDefault}"); }
          #wheelCharacter.wheelChar.wheelChar-good { background-image: url("${IMAGES.jhudoraGood}"); }
          #wheelCharacter.wheelChar.wheelChar-bad { background-image: url("${IMAGES.jhudoraBad}"); }
        `);
        break;
    case 'illusen':
        GM_addStyle(`
          #wheelCharacter { background-image: url("${IMAGES.illusenDefault}"); }
          #wheelCharacter.wheelChar.wheelChar-good { background-image: url("${IMAGES.illusenGood}"); }
          #wheelCharacter.wheelChar.wheelChar-bad { background-image: url("${IMAGES.illusenBad}"); }
        `);
        break;
    case 'fyora':
        GM_addStyle(`
          #wheelCharacter { background-image: url("${IMAGES.fyoraDefault}"); }
          #wheelCharacter.wheelChar.wheelChar-good { background-image: url("${IMAGES.fyoraGood}"); }
          #wheelCharacter.wheelChar.wheelChar-bad { background-image: url("${IMAGES.fyoraBad}"); }
        `);
        break;
    case 'luxinia':
        GM_addStyle(`
          #wheelCharacter { background-image: url("${IMAGES.luxiniaDefault}") ; }
          #wheelCharacter.wheelChar.wheelChar-good { background-image: url("${IMAGES.luxiniaGood}"); }
          #wheelCharacter.wheelChar.wheelChar-bad { background-image: url("${IMAGES.luxiniaBad}"); }
        `);
        break;
    case 'baelia':
        GM_addStyle(`
          #wheelCharacter { background-image: url("${IMAGES.baeliaDefault}") ; }
          #wheelCharacter.wheelChar.wheelChar-good { background-image: url("${IMAGES.baeliaGood}"); }
          #wheelCharacter.wheelChar.wheelChar-bad { background-image: url("${IMAGES.baeliaBad}"); }
        `);
        break;
    case 'naia':
        GM_addStyle(`
          #wheelCharacter { background-image: url("${IMAGES.naiaDefault}") ; }
          #wheelCharacter.wheelChar.wheelChar-good { background-image: url("${IMAGES.naiaGood}"); }
          #wheelCharacter.wheelChar.wheelChar-bad { background-image: url("${IMAGES.naiaBad}"); }
        `);
        break;
    case 'seshatia':
        GM_addStyle(`
          #wheelCharacter { background-image: url("${IMAGES.seshatiaDefault}") ; }
          #wheelCharacter.wheelChar.wheelChar-good { background-image: url("${IMAGES.seshatiaGood}"); }
          #wheelCharacter.wheelChar.wheelChar-bad { background-image: url("${IMAGES.seshatiaBad}"); }
        `);
        break;
}