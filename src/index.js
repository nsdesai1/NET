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
        url: 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories?api_key=e0xaFTehVbUGmZjo2H94BthXsxaR8YYemqp9imxM',
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
})


// const canvas = document.querySelector('canvas');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// console.log(canvas);