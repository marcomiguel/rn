const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=9b6de4f2108fbcb4114bf9711248e5ba&format=json';

function getArtists(){
    return fetch(URL)
        .then(response => response.json())
        .then(data => data.topartists.artist)
        .then(artists => artists.map(artist => {
            return {
                id: artist.mbid,
                name: artist.name,
                image: artist.image[3]['#text'],
                likes: 200,
                comments: 140
            }
        }))
}

export { getArtists };

// Application name	rn
// API key	9b6de4f2108fbcb4114bf9711248e5ba
// Shared secret	d8c36703b5a94182320045e2fd2fc481
// Registered to	tresemece