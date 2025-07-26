document.addEventListener('DOMContentLoaded', () => {
  const artistaData = [
    { name: 'Henrique & Juliano', image: './public/img/artista-henrique-juliano.jpg' },
    { name: 'Jorge & Mateus', image: './public/img/artista-jorge-mateus.jpg' },
    { name: 'Zé Neto & Cristiano', image: './public/img/artista-ze-neto.jpg' },
    { name: 'Gusttavo Lima', image: './public/img/artista-gustavo-limma.jpg' },
    { name: 'Luan Santana', image: './public/img/artista-luan-santana.jpg' },
    { name: 'Matheus & Kauan', image: './public/img/artista-mateus-kauan.jpg' },
  ];

  const albumsData = [
    { name: 'White Noise (Sleep & Relaxatiob Sounds)', artist: 'Sleepy Jonh' , image: './public/img/album-white-noise.jpg' },
    { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano' , image: './public/img/album-ceu-explica.jpg' },
    { name: 'Nada como um dia após o outro', artist: 'Racionais' , image: './public/img/album-vida-loka.jpg' },
    { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish' , image: './public/img/album-hit-me.jpg' },
    { name: 'CAJU', artist: 'Liniker' , image: './public/img/album-caju.jpg' },
    { name: 'Escândalo Íntimo', artist: 'Luisa Sonza' , image: './public/img/album-escandalo.jpg' },
  ];

  const artistGrid = document.querySelector('.artists_grid')
  const albumsGrid = document.querySelector('.albums_grid')

  artistaData.forEach( artist => {
    const artistCard = document.createElement('div')
    artistCard.classList.add('artist_card')

    artistCard.innerHTML = `
      <img src="${artist.image}" alt="imagem do ${artist.name}">
      <div>
        <h3>${artist.name}</h3>   
        <p>artista</p>
      </div>
    `

    artistGrid.appendChild(artistCard)
  })

  albumsData.forEach( album => {
    const albumCard = document.createElement('div')
    albumCard.classList.add('albums_card')

    albumCard.innerHTML = `
      <img src="${album.image}" alt="imagem do ${album.name}">
      <div>
        <h3>${album.name}</h3>
        <p>${album.artist}</p>
      </div>
    `

    albumsGrid.appendChild(albumCard)
  })

})


