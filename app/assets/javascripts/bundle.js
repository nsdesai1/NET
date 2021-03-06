/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var apiKey = "TbI0bhoRcpG2zR58H2rjhcEFVABpzegCMacgeIAa"; // const apodUrl = "https://api.nasa.gov/planetary/apod"

$(document).ready(function () {
  var mymap = L.map('mapid').setView([0, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
  }).addTo(mymap);
  var allCats = []; // var eventColor = {id: null, color: null}

  var markerColor;
  $.ajax({
    type: 'GET',
    url: 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories?api_key=TbI0bhoRcpG2zR58H2rjhcEFVABpzegCMacgeIAa',
    dataType: 'json'
  }).done(function (data) {
    data.categories.forEach(function (category) {
      switch (category.id) {
        case 6:
          allCats.push({
            id: category.id,
            title: category.title,
            color: '#348899'
          });
          break;

        case 7:
          allCats.push({
            id: category.id,
            title: category.title,
            color: '#962D3E'
          });
          break;

        case 16:
          allCats.push({
            id: category.id,
            title: category.title,
            color: '#261722'
          });
          break;

        case 9:
          allCats.push({
            id: category.id,
            title: category.title,
            color: '#76A68F'
          });
          break;

        case 14:
          allCats.push({
            id: category.id,
            title: category.title,
            color: '#325943'
          });
          break;

        case 19:
          allCats.push({
            id: category.id,
            title: category.title,
            color: '#D99C52'
          });
          break;

        case 15:
          allCats.push({
            id: category.id,
            title: category.title,
            color: '#979C9C'
          });
          break;

        case 10:
          allCats.push({
            id: category.id,
            title: category.title,
            color: '#E54661'
          });
          break;

        case 17:
          allCats.push({
            id: category.id,
            title: category.title,
            color: '#553285'
          });
          break;

        case 18:
          allCats.push({
            id: category.id,
            title: category.title,
            color: '#998A2F'
          });
          break;

        case 12:
          allCats.push({
            id: category.id,
            title: category.title,
            color: '#35478C'
          });
          break;

        case 13:
          allCats.push({
            id: category.id,
            title: category.title,
            color: '#002D40'
          });
          break;

        case 8:
          allCats.push({
            id: category.id,
            title: category.title,
            color: '#FF7F66'
          });
          break;
      }

      console.log(allCats);
    });
    allCats.forEach(function (cat) {
      $('#list').append('<li>' + '<div style="background-color:' + cat.color + '; width: 105px; height: 35px;">' + cat.title + '</div>' + '</li>');
    });
  });
  $.ajax({
    type: 'GET',
    url: 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?api_key=TbI0bhoRcpG2zR58H2rjhcEFVABpzegCMacgeIAa',
    dataType: 'json'
  }).done(function (data) {
    data.events.forEach(function (event) {
      allCats.forEach(function (category) {
        if (event.categories[0].id === category.id) {
          markerColor = category.color;
          console.log(markerColor);
        }
      });
      var geometry = event.geometries;

      if (geometry[0].type === 'Point') {
        var circle = L.geoJson(geometry, {
          pointToLayer: function pointToLayer(feature, latlng) {
            return L.circleMarker(latlng, {
              radius: 15,
              color: markerColor,
              weight: 1,
              opacity: 1,
              fillOpacity: 0.4,
              fillColor: markerColor
            });
          }
        }).addTo(mymap);
      } else {
        var circle = L.geoJson(geometry, {
          style: {
            'color': markerColor,
            'weight': 2,
            'opacity': 1,
            fillOpacity: 0.5
          }
        }).addTo(mymap);
      }

      var date = new Date(geometry[0].date).toDateString();
      circle.bindPopup(event.title + '<br>' + date);
      circle.addEventListener('click', function (e) {
        e = e || window.event;
        $('#title').empty();
        $('#date').empty();
        $('#description').empty();
        $('#source').empty();
        $('#title').append(event.title);
        $('#date').append('CATEGORY: ' + event.categories[0].title + ' | ' + date);
        $('#description').append(event.description);
        $('#source').append('<a href="' + event.sources[0].url + '">[Source]</a>');
      });
    });
  });
}); // const canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// console.log(canvas);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map