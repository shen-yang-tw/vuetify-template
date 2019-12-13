//Show
function show(el) {
  var target = document.querySelector(el);
  // target.style.display = "block";
  target.style.setProperty("display", "block", "important");
}

//Hide
function hide(el) {
  var target = document.querySelector(el);
  // target.style.display = "none";
  target.style.setProperty("display", "none", "important");
}

//Add Class to all
function AddClass(el, className) {
  var _el = document.querySelectorAll(el);
  for (var i = 0; i < _el.length; i++) {
    _el[i].classList.add(className);
  }
}

//Remove Class to all
function RemoveClass(el, className) {
  var _el = document.querySelectorAll(el);
  for (var i = 0; i < _el.length; i++) {
    _el[i].classList.remove(className);
  }
}

//Remove & Add Class to all
function RemoveAddClass(el, classRemove, classAdd) {
  var _el = document.querySelectorAll(el);
  for (var i = 0; i < _el.length; i++) {
    _el[i].classList.remove(classRemove);
    _el[i].classList.add(classAdd);
  }
}

//Toggle Class to all
function toggleClasses(el, className) {
  var _el = document.querySelectorAll(el);
  for (var i = 0; i < _el.length; i++) {
    _el[i].classList.toggle(className);
  }
}

//Remove all by selector
function removeAll(sel) {
  var target = document.querySelectorAll(sel);
  for (var i = 0; i < target.length; i++) {
    target[i].parentNode.removeChild(target[i]);
  }
}

//Toggle Show/Hide by attribute - onclick="toggleAllShow(findChildren(this, '.sort')); return false;"
function toggleAllShow(allChildren) {
  //if (elID.getAttribute("aria-hidden") == "true"))
  console.log(allChildren.length);
  for (var i = 0; i < allChildren.length; i++) {
    if (allChildren[i].hasAttribute("hidden")) {
      allChildren[i].removeAttribute("hidden");
    } else {
      allChildren[i].setAttribute("hidden", true);
    }
  }
}

//toggle all class by array - onclick="toggleAllClass(findChildren(findParent(this, 'LI'), '.detail'), 'hidden'); return false;"
//return false - avoid the page jumping straight to the top"
function toggleAllClass(allChildren, cls) {
  for (var i = 0; i < allChildren.length; i++) {
    allChildren[i].classList.toggle(cls);
  }
  // return false; //not working
}
//toggle two classes - onmouseover="removeAddClasses(findChildren(findParent(this, 'LI'), 'p'), 'uk-text-truncate', 'flex-wrap')" onmouseout="removeAddClasses(findChildren(findParent(this, 'LI'), 'p'), 'flex-wrap', 'uk-text-truncate')"
function removeAddClasses(allChildren, classRemove, classAdd) {
  for (var i = 0; i < allChildren.length; i++) {
    allChildren[i].classList.remove(classRemove);
    allChildren[i].classList.add(classAdd);
  }
}
function findParent(thisElement, parentTagName) {
  while ((thisElement = thisElement.parentElement) && (thisElement.tagName != parentTagName));
  //Searching loop only stop while parent is founded
  return thisElement; //if searching no one will return null
}
function findChildren(parentEL, sl) {
  return parentEL.querySelectorAll(sl);
}

//go to top
function gotoTop(sl, classFadeName) {
  if (document.querySelector(sl)!=null) {
    var el = document.querySelector(sl);
    // el.style.opacity = "0";
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      el.classList.add(classFadeName);
    } else {
      el.classList.remove(classFadeName);
    }
  }
}

//get this year - <p onload="thisYear(this)"></p>
function thisYear(thisSelector) {
  if (document.querySelector(thisSelector)!=null) {
    var d = new Date();
    var y = d.getFullYear();
    document.querySelector(thisSelector).innerHTML = y;
  }
}

//onmouseover="viewHeight('[uk-dropdown]', 'nav.bg_primary')"
function viewHeight(sel, upperSelector) {
  if (document.querySelector(sel)!=null && document.querySelector(upperSelector)!=null) {
    var topHeight = document.querySelector(upperSelector).getBoundingClientRect().top + document.querySelector(upperSelector).getBoundingClientRect().height;
    var target = document.querySelectorAll(sel);
    for (var i = 0; i < target.length; i++) {
      target[i].style.maxHeight = window.innerHeight - topHeight + "px";
    }
  }
}

//viewHeightMiddle(".uk-slideshow-items", "header", ".bg_bar") - uk-slideshow height, working with CSS {min-height: auto !important};
//Subtracts the height of preceding and following element
function viewHeightMiddle(sel, upperSelector, lowerSelector) {
  if (document.querySelector(sel)!=null && document.querySelector(upperSelector)!=null && document.querySelector(lowerSelector)!=null) {
    var topHeight = document.querySelector(upperSelector).clientTop + document.querySelector(upperSelector).clientHeight;
    var lowerHeight = document.querySelector(lowerSelector).clientHeight;
    document.querySelector(sel).style.height = window.innerHeight - topHeight - lowerHeight + "px"; //CANNOT use "px !important"
  }
}

//------------- font resize ------------------------------------------------//
function fontResize(classFontM, classFontL, classButtonFont, classButtonFontS, classButtonFontM, classButtonFontL, classActive) {
  if (document.querySelector("." + classButtonFontS).classList.contains(classActive)) {
    // document.querySelector("html").classList.remove(classFontM, classFontL); //IE not working
    document.querySelector("html").classList.remove(classFontM);
    document.querySelector("html").classList.remove(classFontL);
  }
  if (document.querySelector("." + classButtonFontM).classList.contains(classActive)) {
    document.querySelector("html").classList.remove(classFontL);
    document.querySelector("html").classList.add(classFontM);
  }
  if (document.querySelector("." + classButtonFontL).classList.contains(classActive)) {
    document.querySelector("html").classList.remove(classFontM);
    document.querySelector("html").classList.add(classFontL);
  }
  var btnFont = document.querySelectorAll("." + classButtonFont);
  for (var i = 0; i < btnFont.length; i++) {
    btnFont[i].onclick = function() {
      RemoveClass("." + classButtonFont, classActive); //Outer function
      this.classList.add(classActive); //Error: Cannot use 'btnFont[i]' to replace 'this'
      if (this.classList.contains(classButtonFontS)) { //Error: Cannot use 'buttonFontS' (it's a selector not the class name)
        // document.querySelector("html").classList.remove(classFontM, classFontL); //IE not working
        document.querySelector("html").classList.remove(classFontM);
        document.querySelector("html").classList.remove(classFontL);
      }
      if (this.classList.contains(classButtonFontM)) {
        document.querySelector("html").classList.remove(classFontL);
        document.querySelector("html").classList.add(classFontM);
      }
      if (this.classList.contains(classButtonFontL)) {
        document.querySelector("html").classList.remove(classFontM);
        document.querySelector("html").classList.add(classFontL);
      }
    };
  }
}

//------------- End font resize ------------------------------------------------//


//------------- Form ------------------------------------------------//


//select onchange Event - <select onchange="showOption(this,1,'#div1'); showOption(this,2,'#div2')">
function showOption(thisSelect, index, sl) {
  var showEl = document.querySelectorAll(sl);
  var i;
  if (thisSelect.selectedIndex == index) {
    for (i = 0; i < showEl.length; i++) {
      showEl[i].style.setProperty("display", "block", "important");
    }
  } else {
    for (i = 0; i < showEl.length; i++) {
      showEl[i].style.setProperty("display", "none", "important");
    }
  }
}

//------------- End Form ------------------------------------------------//

//------------- Execute funcition when document ready - For modern browsers, and IE9+ ---------------------------------------//
if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  ready();
} else {
  document.addEventListener("DOMContentLoaded", ready);
}

function ready() {
  // if (document.querySelector(".text_size") != null) {
  //   fontResize("text-m", "text-l", "text_size", "text_size-s", "text_size-m", "text_size-l", "active");
  // }
  // removeAll("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, .ifEmpty:empty");
  // thisYear(".year");
}
//------------- End Execute funcition when document ready - For modern browsers, and IE9+ -------------------------------------//

if (document.querySelector(".text_size") != null) {
  window.fontResize("text-m", "text-l", "text_size", "text_size-s", "text_size-m", "text_size-l", "active");
}
window.removeAll("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, .ifEmpty:empty");
window.thisYear(".year");

// window.addEventListener("resize", function () {viewHeight});
// window.addEventListener("scroll", function () {gotoTop("#gototop", "opacity-100")});
window.onload = function() {gotoTop("#gototop", "opacity-100")};
window.onscroll = function() {gotoTop("#gototop", "opacity-100")};

if (document.querySelector(".logo_cht, logo_eng") != null) {
  window.fitText(document.querySelector(".logo_cht"), 2.2, {
    minFontSize: '10px',
    maxFontSize: '20px'
  });
  window.fitText(document.querySelector(".logo_eng"), 3, {
    minFontSize: '7px',
    maxFontSize: '16px'
  });
}

//uk-slideshow height, working with CSS  .uk-slideshow-items {min-height: auto !important}
window.onload = function() {viewHeightMiddle("#slideshow .uk-slideshow-items", "header", "#slideshow+:first-of-type")};
window.onresize = function() {viewHeightMiddle("#slideshow .uk-slideshow-items", "header", "#slideshow+:first-of-type")};

// var w = window.outerWidth;
// if (w <= 959) {
// }

//--------------- end pure js ----------------------------------------------------------//


