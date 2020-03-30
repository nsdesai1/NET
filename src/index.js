const apiKey = "TbI0bhoRcpG2zR58H2rjhcEFVABpzegCMacgeIAa";
// const apodUrl = "https://api.nasa.gov/planetary/apod"

$(document).ready(function() {
    const mymap = L.map('mapid').setView([0, 0], 2)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
    }).addTo(mymap);

    const allCats = []
    // var eventColor = {id: null, color: null}
    let markerColor

    $.ajax({
        type: 'GET',
        url: 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories?api_key=TbI0bhoRcpG2zR58H2rjhcEFVABpzegCMacgeIAa',
        dataType: 'json'
    }).done(function (data) {
        data.categories.forEach(function (category) {
        switch (category.id) {
            case 6:
            allCats.push({id: category.id, title: category.title, color: '#348899'})
            break
            case 7:
            allCats.push({id: category.id, title: category.title, color: '#962D3E'})
            break
            case 16:
            allCats.push({id: category.id, title: category.title, color: '#261722'})
            break
            case 9:
            allCats.push({id: category.id, title: category.title, color: '#76A68F'})
            break
            case 14:
            allCats.push({id: category.id, title: category.title, color: '#325943'})
            break
            case 19:
            allCats.push({id: category.id, title: category.title, color: '#D99C52'})
            break
            case 15:
            allCats.push({id: category.id, title: category.title, color: '#979C9C'})
            break
            case 10:
            allCats.push({id: category.id, title: category.title, color: '#E54661'})
            break
            case 17:
            allCats.push({id: category.id, title: category.title, color: '#553285'})
            break
            case 18:
            allCats.push({id: category.id, title: category.title, color: '#998A2F'})
            break
            case 12:
            allCats.push({id: category.id, title: category.title, color: '#35478C'})
            break
            case 13:
            allCats.push({id: category.id, title: category.title, color: '#002D40'})
            break
            case 8:
            allCats.push({id: category.id, title: category.title, color: '#FF7F66'})
            break
        }
        console.log(allCats)
    })
        allCats.forEach(function (cat) {
        $('#list').append('<li>' + '<div style="background-color:' + cat.color + '; width: 105px; height: 35px;">' + cat.title + '</div>' + '</li>')
        })
    })

    $.ajax({
        type: 'GET',
        url: 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?api_key=TbI0bhoRcpG2zR58H2rjhcEFVABpzegCMacgeIAa',
        dataType: 'json'
      }).done(function (data) {
        data.events.forEach(function (event) {
          allCats.forEach(function (category) {
            if (event.categories[0].id === category.id) {
              markerColor = category.color
              console.log(markerColor)
            }
          })
          const geometry = event.geometries
          if (geometry[0].type === 'Point') {
            var circle = L.geoJson(geometry, {
              pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                  radius: 15,
                  color: markerColor,
                  weight: 1,
                  opacity: 1,
                  fillOpacity: 0.4,
                  fillColor: markerColor
                })
              }
            }).addTo(mymap)
          } else {
            var circle = L.geoJson(geometry, {
              style: {
                'color': markerColor,
                'weight': 2,
                'opacity': 1,
                fillOpacity: 0.5
              }
            }).addTo(mymap)
          }
          const date = new Date(geometry[0].date).toDateString()
          circle.bindPopup(event.title + '<br>' + date)
          circle.addEventListener('click', function (e) {
            e = e || window.event
            $('#title').empty()
            $('#date').empty()
            $('#description').empty()
            $('#source').empty()
    
            $('#title').append(event.title)
            $('#date').append('CATEGORY: ' + event.categories[0].title + ' | ' + date)
            $('#description').append(event.description)
            $('#source').append('<a href="' + event.sources[0].url + '">[Source]</a>')
          })
        })
      })
})


// const canvas = document.querySelector('canvas');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// console.log(canvas);