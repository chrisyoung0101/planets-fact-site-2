// menu-btn

// Code for hiding / showing the menu however we really don't need this functionality
const menuBtn = document.querySelector('.menu-btn');
const menuBtnShow = document.querySelector('.show');
const menu = document.querySelector('nav ul');
const sectionContent = document.querySelector('.content');
const body = document.querySelector('body');
const infotangle = document.querySelector('.infotangle');

menuBtn.addEventListener('click', () => {
  // getting the matrix value of translateX to toggle the menu

  const style = window.getComputedStyle(menu);
  //this is a 2d matrix
  //https://zellwk.com/blog/css-translate-values-in-javascript/
  const matrix = style.transform || style.webkitTransform || style.mozTransform;

  //split up the matrix into an array?
  const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');

  console.log(matrixValues.length);

  //   4 = translateX value
  //   5 = translateY value
  const x = matrixValues[4];

  // console.log(theCSSprop);

  if (x > 0) {
    menu.style.transform = 'translateX(0)';
    menuBtn.style.opacity = '24.87%';
    sectionContent.style.display = 'none';
    //stop scroll mobile - what about tablet & desktop?
    body.style.overflow = 'hidden';
    infotangle.style.display = 'none';
  } else {
    menu.style.transform = 'translateX(100%)';
    menuBtn.style.opacity = 1;
    sectionContent.style.display = 'flex';
    // only add scroll bar when necessary
    body.style.overflow = 'auto';
    infotangle.style.display = 'block';
  }
});

// ************* MOBILE **************
//below js : most likely this could be simpler but...

//.myelement is being added to the overview button by default
//when another button is clicked this default is removed and that button now has the :after bottom border

const overview = document.querySelector('.overview');
const structure = document.querySelector('.structure');
const surface = document.querySelector('.surface');

//default
overview.classList.add('myelement');

const clicked = false;
structure.addEventListener('click', (clicked) => {
  clicked = true;
  if (clicked) {
    structure.classList.add('myelement');
    overview.classList.remove('myelement');
    surface.classList.remove('myelement');
  }
});

surface.addEventListener('click', (clicked) => {
  clicked = true;
  if (clicked) {
    surface.classList.add('myelement');
    overview.classList.remove('myelement');
    structure.classList.remove('myelement');
  }
});

overview.addEventListener('click', (clicked) => {
  clicked = true;
  if (clicked) {
    overview.classList.add('myelement');
    surface.classList.remove('myelement');
    structure.classList.remove('myelement');
  }
});

var structureIsClicked = false;
var surfaceIsClicked = false;
function clickHandler(event) {
  structureIsClicked = true;
  surfaceIsClicked = true;
  if (structureIsClicked || surfaceIsClicked) {
    overview.classList.remove('myelement');
  }
}

// ************* TABLE & DESKTOP **************

function mercuryLoad() {
  console.log('mercury loaded');
  const sideBtn1Mercury = document.querySelector('.side-btn-1.mercury-color');
  const sideBtn2Mercury = document.querySelector('.side-btn-2.mercury-color');
  const sideBtn3Mercury = document.querySelector('.side-btn-3.mercury-color');

  //disable hover - note : this disables js events on this element.  click events
  //will actually fall through to the next element (whatever that means).
  // sideBtn1.style.pointerEvents = 'none';

  //thoughts :
  //if btn with unique class is clicked change the background color accordingly

  //default
  sideBtn1Mercury.style.pointerEvents = 'none';
  sideBtn1Mercury.classList.add('mercury-color');
  sideBtn2Mercury.classList.remove('mercury-color');
  sideBtn3Mercury.classList.remove('mercury-color');

  const clickedSideMercury = false;

  sideBtn1Mercury.addEventListener('click', (clickedSideMercury) => {
    console.log('hi mercury');
    clickedSideMercury = true;
    if (clickedSideMercury) {
      sideBtn1Mercury.classList.add('mercury-color');
      sideBtn1Mercury.style.pointerEvents = 'none';
      sideBtn2Mercury.classList.remove('mercury-color');
      sideBtn3Mercury.classList.remove('mercury-color');
    }
  });

  sideBtn2Mercury.addEventListener('click', (clickedSideMercury) => {
    clickedSideMercury = true;
    if (clickedSideMercury) {
      sideBtn1Mercury.classList.remove('mercury-color');
      sideBtn1Mercury.style.pointerEvents = 'initial';
      sideBtn2Mercury.classList.add('mercury-color');
      sideBtn3Mercury.classList.remove('mercury-color');
    }
  });

  sideBtn3Mercury.addEventListener('click', (clickedSideMercury) => {
    clickedSideMercury = true;
    if (clickedSideMercury) {
      sideBtn1Mercury.classList.remove('mercury-color');
      sideBtn1Mercury.style.pointerEvents = 'initial';
      sideBtn2Mercury.classList.remove('mercury-color');
      sideBtn3Mercury.classList.add('mercury-color');
    }
  });
}

// VENUS COlOR FOR SIDE BTNS

function venusLoad() {
  console.log('venus loaded');

  const sideBtn1Venus = document.querySelector('.side-btn-1.venus-color');
  const sideBtn2Venus = document.querySelector('.side-btn-2.venus-color');
  const sideBtn3Venus = document.querySelector('.side-btn-3.venus-color');
  //default
  sideBtn1Venus.style.pointerEvents = 'none';
  sideBtn1Venus.classList.add('venus-color');
  sideBtn2Venus.classList.remove('venus-color');
  sideBtn3Venus.classList.remove('venus-color');

  //onmousedown remove background color or disable focus color
  sideBtn3Venus.addEventListener('onmousedown', () => {
    console.log('this is venus btn 3');
    sideBtn3Venus.style.backgroundColor = 'red';
    sideBtn3Venus.blur();
  });
  const clickedSideVenus = false;

  sideBtn1Venus.addEventListener('click', (clickedSideVenus) => {
    //console.log('hi mercury');
    clickedSideVenus = true;
    if (clickedSideVenus) {
      sideBtn1Venus.classList.add('venus-color');
      sideBtn1Venus.style.pointerEvents = 'none';
      sideBtn2Venus.classList.remove('venus-color');
      sideBtn2Venus.style.pointerEvents = 'initial';
      sideBtn3Venus.classList.add('venus-color');
      // sideBtn2Venus.style.backgroundColor = 'none';
      sideBtn3Venus.classList.remove('venus-color');
      sideBtn2Venus.blur();
    }
  });

  sideBtn2Venus.addEventListener('click', (clickedSideVenus) => {
    clickedSideVenus = true;
    if (clickedSideVenus) {
      sideBtn1Venus.classList.remove('venus-color');
      sideBtn1Venus.style.pointerEvents = 'initial';
      sideBtn2Venus.style.pointerEvents = 'none';
      sideBtn2Venus.blur();
      sideBtn2Venus.classList.add('venus-color');
      sideBtn3Venus.classList.remove('venus-color');
      sideBtn3Venus.style.pointerEvents = 'initial';
    }
  });

  sideBtn3Venus.addEventListener('click', (clickedSideVenus) => {
    clickedSideVenus = true;
    if (clickedSideVenus) {
      sideBtn1Venus.classList.remove('venus-color');
      sideBtn3Venus.style.pointerEvents = 'none';
      sideBtn2Venus.classList.remove('venus-color');
      sideBtn2Venus.style.pointerEvents = 'initial';
      sideBtn3Venus.classList.add('venus-color');
      sideBtn3Venus.blur();
    }
  });
}

//earth

function earthLoad() {
  console.log('earth loaded');

  const sideBtn1Earth = document.querySelector('.side-btn-1.earth-color');
  const sideBtn2Earth = document.querySelector('.side-btn-2.earth-color');
  const sideBtn3Earth = document.querySelector('.side-btn-3.earth-color');
  //default
  sideBtn1Earth.style.pointerEvents = 'none';
  sideBtn1Earth.classList.add('earth-color');
  sideBtn2Earth.classList.remove('earth-color');
  sideBtn3Earth.classList.remove('earth-color');

  //onmousedown remove background color or disable focus color
  sideBtn3Earth.addEventListener('onmousedown', () => {
    console.log('this is earth btn 3');
    sideBtn3Earth.style.backgroundColor = 'red';
    sideBtn3Earth.blur();
  });
  const clickedSideEarth = false;

  sideBtn1Earth.addEventListener('click', (clickedSideEarth) => {
    //console.log('hi mercury');
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.add('earth-color');
      sideBtn1Earth.style.pointerEvents = 'none';
      sideBtn2Earth.classList.remove('earth-color');
      sideBtn2Earth.style.pointerEvents = 'initial';
      sideBtn3Earth.classList.add('earth-color');
      // sideBtn2Venus.style.backgroundColor = 'none';
      sideBtn3Earth.classList.remove('earth-color');
      sideBtn2Earth.blur();
    }
  });

  sideBtn2Earth.addEventListener('click', (clickedSideEarth) => {
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.remove('earth-color');
      sideBtn1Earth.style.pointerEvents = 'initial';
      sideBtn2Earth.style.pointerEvents = 'none';
      sideBtn2Earth.blur();
      sideBtn2Earth.classList.add('earth-color');
      sideBtn3Earth.classList.remove('earth-color');
      sideBtn3Earth.style.pointerEvents = 'initial';
    }
  });

  sideBtn3Earth.addEventListener('click', (clickedSideEarth) => {
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.remove('earth-color');
      sideBtn3Earth.style.pointerEvents = 'none';
      sideBtn2Earth.classList.remove('earth-color');
      sideBtn2Earth.style.pointerEvents = 'initial';
      sideBtn3Earth.classList.add('earth-color');
      sideBtn3Earth.blur();
    }
  });
}

//mars

function marsLoad() {
  console.log('mars loaded');

  const sideBtn1Mars = document.querySelector('.side-btn-1.mars-color');
  const sideBtn2Mars = document.querySelector('.side-btn-2.mars-color');
  const sideBtn3Mars = document.querySelector('.side-btn-3.mars-color');
  //default
  sideBtn1Mars.style.pointerEvents = 'none';
  sideBtn1Mars.classList.add('mars-color');
  sideBtn2Mars.classList.remove('mars-color');
  sideBtn3Mars.classList.remove('mars-color');

  //onmousedown remove background color or disable focus color
  sideBtn3Mars.addEventListener('onmousedown', () => {
    console.log('this is mars btn 3');
    sideBtn3Mars.style.backgroundColor = 'red';
    sideBtn3Mars.blur();
  });
  const clickedSideEarth = false;

  sideBtn1Mars.addEventListener('click', (clickedSideMars) => {
    //console.log('hi mercury');
    clickedSideMars = true;
    if (clickedSideMars) {
      sideBtn1Mars.classList.add('mars-color');
      sideBtn1Mars.style.pointerEvents = 'none';
      sideBtn2Mars.classList.remove('mars-color');
      sideBtn2Mars.style.pointerEvents = 'initial';
      sideBtn3Mars.classList.add('mars-color');
      // sideBtn2Venus.style.backgroundColor = 'none';
      sideBtn3Mars.classList.remove('mars-color');
      sideBtn2Mars.blur();
    }
  });

  sideBtn2Mars.addEventListener('click', (clickedSideMars) => {
    clickedSideMars = true;
    if (clickedSideMars) {
      sideBtn1Mars.classList.remove('mars-color');
      sideBtn1Mars.style.pointerEvents = 'initial';
      sideBtn2Mars.style.pointerEvents = 'none';
      sideBtn2Mars.blur();
      sideBtn2Mars.classList.add('mars-color');
      sideBtn3Mars.classList.remove('mars-color');
      sideBtn3Mars.style.pointerEvents = 'initial';
    }
  });

  sideBtn3Mars.addEventListener('click', (clickedSideMars) => {
    clickedSideMars = true;
    if (clickedSideMars) {
      sideBtn1Mars.classList.remove('mars-color');
      sideBtn3Mars.style.pointerEvents = 'none';
      sideBtn2Mars.classList.remove('mars-color');
      sideBtn2Mars.style.pointerEvents = 'initial';
      sideBtn3Mars.classList.add('mars-color');
      sideBtn3Mars.blMars;
    }
  });
}

//jupiter
//note : keeping all sideBtn1Earth, etc naming here as we are just replacing that button with the color we want.
//note : we did not do this for venus, earth, or mars but doing it for remaining here down.

function jupiterLoad() {
  console.log('jupiter loaded');

  const sideBtn1Earth = document.querySelector('.side-btn-1.jupiter-color');
  const sideBtn2Earth = document.querySelector('.side-btn-2.jupiter-color');
  const sideBtn3Earth = document.querySelector('.side-btn-3.jupiter-color');
  //default
  sideBtn1Earth.style.pointerEvents = 'none';
  sideBtn1Earth.classList.add('jupiter-color');
  sideBtn2Earth.classList.remove('jupiter-color');
  sideBtn3Earth.classList.remove('jupiter-color');

  //onmousedown remove background color or disable focus color
  sideBtn3Earth.addEventListener('onmousedown', () => {
    console.log('this is jupiter btn 3');
    sideBtn3Earth.style.backgroundColor = 'red';
    sideBtn3Earth.blur();
  });
  const clickedSideEarth = false;

  sideBtn1Earth.addEventListener('click', (clickedSideEarth) => {
    //console.log('hi mercury');
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.add('jupiter-color');
      sideBtn1Earth.style.pointerEvents = 'none';
      sideBtn2Earth.classList.remove('jupiter-color');
      sideBtn2Earth.style.pointerEvents = 'initial';
      sideBtn3Earth.classList.add('jupiter-color');
      // sideBtn2Venus.style.backgroundColor = 'none';
      sideBtn3Earth.classList.remove('jupiter-color');
      sideBtn2Earth.blur();
    }
  });

  sideBtn2Earth.addEventListener('click', (clickedSideEarth) => {
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.remove('jupiter-color');
      sideBtn1Earth.style.pointerEvents = 'initial';
      sideBtn2Earth.style.pointerEvents = 'none';
      sideBtn2Earth.blur();
      sideBtn2Earth.classList.add('jupiter-color');
      sideBtn3Earth.classList.remove('jupiter-color');
      sideBtn3Earth.style.pointerEvents = 'initial';
    }
  });

  sideBtn3Earth.addEventListener('click', (clickedSideEarth) => {
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.remove('jupiter-color');
      sideBtn3Earth.style.pointerEvents = 'none';
      sideBtn2Earth.classList.remove('jupiter-color');
      sideBtn2Earth.style.pointerEvents = 'initial';
      sideBtn3Earth.classList.add('jupiter-color');
      sideBtn3Earth.blur();
    }
  });
}

//saturn

function saturnLoad() {
  console.log('saturn loaded');

  const sideBtn1Earth = document.querySelector('.side-btn-1.saturn-color');
  const sideBtn2Earth = document.querySelector('.side-btn-2.saturn-color');
  const sideBtn3Earth = document.querySelector('.side-btn-3.saturn-color');
  //default
  sideBtn1Earth.style.pointerEvents = 'none';
  sideBtn1Earth.classList.add('saturn-color');
  sideBtn2Earth.classList.remove('saturn-color');
  sideBtn3Earth.classList.remove('saturn-color');

  //onmousedown remove background color or disable focus color
  sideBtn3Earth.addEventListener('onmousedown', () => {
    console.log('this is saturn btn 3');
    sideBtn3Earth.style.backgroundColor = 'red';
    sideBtn3Earth.blur();
  });
  const clickedSideEarth = false;

  sideBtn1Earth.addEventListener('click', (clickedSideEarth) => {
    //console.log('hi mercury');
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.add('saturn-color');
      sideBtn1Earth.style.pointerEvents = 'none';
      sideBtn2Earth.classList.remove('saturn-color');
      sideBtn2Earth.style.pointerEvents = 'initial';
      sideBtn3Earth.classList.add('saturn-color');
      // sideBtn2Venus.style.backgroundColor = 'none';
      sideBtn3Earth.classList.remove('saturn-color');
      sideBtn2Earth.blur();
    }
  });

  sideBtn2Earth.addEventListener('click', (clickedSideEarth) => {
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.remove('saturn-color');
      sideBtn1Earth.style.pointerEvents = 'initial';
      sideBtn2Earth.style.pointerEvents = 'none';
      sideBtn2Earth.blur();
      sideBtn2Earth.classList.add('saturn-color');
      sideBtn3Earth.classList.remove('saturn-color');
      sideBtn3Earth.style.pointerEvents = 'initial';
    }
  });

  sideBtn3Earth.addEventListener('click', (clickedSideEarth) => {
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.remove('saturn-color');
      sideBtn3Earth.style.pointerEvents = 'none';
      sideBtn2Earth.classList.remove('saturn-color');
      sideBtn2Earth.style.pointerEvents = 'initial';
      sideBtn3Earth.classList.add('saturn-color');
      sideBtn3Earth.blur();
    }
  });
}

//uranus

function uranusLoad() {
  console.log('uranus loaded');

  const sideBtn1Earth = document.querySelector('.side-btn-1.uranus-color');
  const sideBtn2Earth = document.querySelector('.side-btn-2.uranus-color');
  const sideBtn3Earth = document.querySelector('.side-btn-3.uranus-color');
  //default
  sideBtn1Earth.style.pointerEvents = 'none';
  sideBtn1Earth.classList.add('uranus-color');
  sideBtn2Earth.classList.remove('uranus-color');
  sideBtn3Earth.classList.remove('uranus-color');

  //onmousedown remove background color or disable focus color
  sideBtn3Earth.addEventListener('onmousedown', () => {
    console.log('this is uranus btn 3');
    sideBtn3Earth.style.backgroundColor = 'red';
    sideBtn3Earth.blur();
  });
  const clickedSideEarth = false;

  sideBtn1Earth.addEventListener('click', (clickedSideEarth) => {
    //console.log('hi mercury');
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.add('uranus-color');
      sideBtn1Earth.style.pointerEvents = 'none';
      sideBtn2Earth.classList.remove('uranus-color');
      sideBtn2Earth.style.pointerEvents = 'initial';
      sideBtn3Earth.classList.add('uranus-color');
      // sideBtn2Venus.style.backgroundColor = 'none';
      sideBtn3Earth.classList.remove('uranus-color');
      sideBtn2Earth.blur();
    }
  });

  sideBtn2Earth.addEventListener('click', (clickedSideEarth) => {
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.remove('uranus-color');
      sideBtn1Earth.style.pointerEvents = 'initial';
      sideBtn2Earth.style.pointerEvents = 'none';
      sideBtn2Earth.blur();
      sideBtn2Earth.classList.add('uranus-color');
      sideBtn3Earth.classList.remove('uranus-color');
      sideBtn3Earth.style.pointerEvents = 'initial';
    }
  });

  sideBtn3Earth.addEventListener('click', (clickedSideEarth) => {
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.remove('uranus-color');
      sideBtn3Earth.style.pointerEvents = 'none';
      sideBtn2Earth.classList.remove('uranus-color');
      sideBtn2Earth.style.pointerEvents = 'initial';
      sideBtn3Earth.classList.add('uranus-color');
      sideBtn3Earth.blur();
    }
  });
}

//neptune

function neptuneLoad() {
  console.log('neptune loaded');

  const sideBtn1Earth = document.querySelector('.side-btn-1.neptune-color');
  const sideBtn2Earth = document.querySelector('.side-btn-2.neptune-color');
  const sideBtn3Earth = document.querySelector('.side-btn-3.neptune-color');
  //default
  sideBtn1Earth.style.pointerEvents = 'none';
  sideBtn1Earth.classList.add('neptune-color');
  sideBtn2Earth.classList.remove('neptune-color');
  sideBtn3Earth.classList.remove('neptune-color');

  //onmousedown remove background color or disable focus color
  sideBtn3Earth.addEventListener('onmousedown', () => {
    console.log('this is neptune btn 3');
    sideBtn3Earth.style.backgroundColor = 'red';
    sideBtn3Earth.blur();
  });
  const clickedSideEarth = false;

  sideBtn1Earth.addEventListener('click', (clickedSideEarth) => {
    //console.log('hi mercury');
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.add('neptune-color');
      sideBtn1Earth.style.pointerEvents = 'none';
      sideBtn2Earth.classList.remove('neptune-color');
      sideBtn2Earth.style.pointerEvents = 'initial';
      sideBtn3Earth.classList.add('neptune-color');
      // sideBtn2Venus.style.backgroundColor = 'none';
      sideBtn3Earth.classList.remove('neptune-color');
      sideBtn2Earth.blur();
    }
  });

  sideBtn2Earth.addEventListener('click', (clickedSideEarth) => {
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.remove('neptune-color');
      sideBtn1Earth.style.pointerEvents = 'initial';
      sideBtn2Earth.style.pointerEvents = 'none';
      sideBtn2Earth.blur();
      sideBtn2Earth.classList.add('neptune-color');
      sideBtn3Earth.classList.remove('neptune-color');
      sideBtn3Earth.style.pointerEvents = 'initial';
    }
  });

  sideBtn3Earth.addEventListener('click', (clickedSideEarth) => {
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.remove('neptune-color');
      sideBtn3Earth.style.pointerEvents = 'none';
      sideBtn2Earth.classList.remove('neptune-color');
      sideBtn2Earth.style.pointerEvents = 'initial';
      sideBtn3Earth.classList.add('neptune-color');
      sideBtn3Earth.blur();
    }
  });
}

//earth

function earthLoad() {
  console.log('earth loaded');

  const sideBtn1Earth = document.querySelector('.side-btn-1.earth-color');
  const sideBtn2Earth = document.querySelector('.side-btn-2.earth-color');
  const sideBtn3Earth = document.querySelector('.side-btn-3.earth-color');
  //default
  sideBtn1Earth.style.pointerEvents = 'none';
  sideBtn1Earth.classList.add('earth-color');
  sideBtn2Earth.classList.remove('earth-color');
  sideBtn3Earth.classList.remove('earth-color');

  //onmousedown remove background color or disable focus color
  sideBtn3Earth.addEventListener('onmousedown', () => {
    console.log('this is earth btn 3');
    sideBtn3Earth.style.backgroundColor = 'red';
    sideBtn3Earth.blur();
  });
  const clickedSideEarth = false;

  sideBtn1Earth.addEventListener('click', (clickedSideEarth) => {
    //console.log('hi mercury');
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.add('earth-color');
      sideBtn1Earth.style.pointerEvents = 'none';
      sideBtn2Earth.classList.remove('earth-color');
      sideBtn2Earth.style.pointerEvents = 'initial';
      sideBtn3Earth.classList.add('earth-color');
      // sideBtn2Venus.style.backgroundColor = 'none';
      sideBtn3Earth.classList.remove('earth-color');
      sideBtn2Earth.blur();
    }
  });

  sideBtn2Earth.addEventListener('click', (clickedSideEarth) => {
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.remove('earth-color');
      sideBtn1Earth.style.pointerEvents = 'initial';
      sideBtn2Earth.style.pointerEvents = 'none';
      sideBtn2Earth.blur();
      sideBtn2Earth.classList.add('earth-color');
      sideBtn3Earth.classList.remove('earth-color');
      sideBtn3Earth.style.pointerEvents = 'initial';
    }
  });

  sideBtn3Earth.addEventListener('click', (clickedSideEarth) => {
    clickedSideEarth = true;
    if (clickedSideEarth) {
      sideBtn1Earth.classList.remove('earth-color');
      sideBtn3Earth.style.pointerEvents = 'none';
      sideBtn2Earth.classList.remove('earth-color');
      sideBtn2Earth.style.pointerEvents = 'initial';
      sideBtn3Earth.classList.add('earth-color');
      sideBtn3Earth.blur();
    }
  });
}

//SHOW - HIDE CONTENT : show image, show text, show link

//mobile buttons

const mobileBtnOverview = document.querySelector('.overview-mobile-btn');
const mobileBtnStructure = document.querySelector('.structure-mobile-btn');
const mobileBtnGeology = document.querySelector('.geology-mobile-btn');

// mobileBtnOverview.style.background = 'red';

//tablet and desktop "side" buttons
const sideBtnOverview = document.querySelector('.side-btn-1');
const sideBtnStructure = document.querySelector('.side-btn-2');
const sideBtnGeology = document.querySelector('.side-btn-3');

//content text
const overviewContent = document.querySelector('.overview-text');
const structureContent = document.querySelector('.structure-text');
const geologyContent = document.querySelector('.geology-text');

//content img
const overviewImg = document.querySelector('.overview-img');
const structureImg = document.querySelector('.structure-img');
const geologyImg = document.querySelector('.geology-img');

//content wikipedia link
const overviewLink = document.querySelector('.overview-link');
const structureLink = document.querySelector('.structure-link');
const geologyLink = document.querySelector('.geology-link');

// MOBILE

// overview content
mobileBtnOverview.addEventListener('click', () => {
  overviewImg.style.display = 'inline-block';
  structureImg.style.display = 'none';
  geologyImg.style.display = 'none';

  overviewContent.style.display = 'block';
  structureContent.style.display = 'none';
  geologyContent.style.display = 'none';

  overviewLink.style.display = 'inline';
  structureLink.style.display = 'none';
  geologyLink.style.display = 'none';
});

//structure content
mobileBtnStructure.addEventListener('click', () => {
  overviewImg.style.display = 'none';
  structureImg.style.display = 'inline-block';
  geologyImg.style.display = 'none';

  overviewContent.style.display = 'none';
  structureContent.style.display = 'block';
  geologyContent.style.display = 'none';

  overviewLink.style.display = 'none';
  structureLink.style.display = 'inline';
  geologyLink.style.display = 'none';
});

//geology content
mobileBtnGeology.addEventListener('click', () => {
  overviewImg.style.display = 'inline-block';
  structureImg.style.display = 'none';
  geologyImg.style.display = 'inline-block';

  overviewContent.style.display = 'none';
  structureContent.style.display = 'none';
  geologyContent.style.display = 'block';

  overviewLink.style.display = 'none';
  structureLink.style.display = 'none';
  geologyLink.style.display = 'inline';
});

// show underline border color for each planet

// TABLET & DESKTOP

// overview content
sideBtnOverview.addEventListener('click', () => {
  overviewImg.style.display = 'inline-block';
  structureImg.style.display = 'none';
  geologyImg.style.display = 'none';

  overviewContent.style.display = 'block';
  structureContent.style.display = 'none';
  geologyContent.style.display = 'none';

  overviewLink.style.display = 'inline';
  structureLink.style.display = 'none';
  geologyLink.style.display = 'none';
});

//structure content
sideBtnStructure.addEventListener('click', () => {
  overviewImg.style.display = 'none';
  structureImg.style.display = 'inline-block';
  geologyImg.style.display = 'none';

  overviewContent.style.display = 'none';
  structureContent.style.display = 'block';
  geologyContent.style.display = 'none';

  overviewLink.style.display = 'none';
  structureLink.style.display = 'inline';
  geologyLink.style.display = 'none';
});

//geology content
sideBtnGeology.addEventListener('click', () => {
  overviewImg.style.display = 'inline-block';
  structureImg.style.display = 'none';
  geologyImg.style.display = 'inline-block';

  overviewContent.style.display = 'none';
  structureContent.style.display = 'none';
  geologyContent.style.display = 'block';

  overviewLink.style.display = 'none';
  structureLink.style.display = 'none';
  geologyLink.style.display = 'inline';
});
