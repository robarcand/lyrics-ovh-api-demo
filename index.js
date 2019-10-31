'use strict';

const base_URL = `https://api.lyrics.ovh/v1/`;

let lyrics = '';


function getSongLyrics(artistQuery, songQuery) {
    
    const url = base_URL + artistQuery + '/' + songQuery;

    console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(responseJson => lyrics = responseJson)
    .then(responseJson => console.log(lyrics))
    .catch(error => alert('Something went wrong.'))
}

function renderSongLyrics(artistQuery, songQuery, lyrics) {
    $('.api-content').replaceWith(`
    <h2>${songQuery} by ${artistQuery}</h2>
    <p>${lyrics}</p>
    `)
}

function watchForm(event) {

    $('form').submit(event => {
    event.preventDefault();

    const artist = $('.artistQuery').val();
    const song = $('.songQuery').val();

    getSongLyrics(artist, song);
    renderSongLyrics(artist, song, lyrics);
})
}

$(watchForm);