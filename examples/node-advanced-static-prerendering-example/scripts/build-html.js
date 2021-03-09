require('dotenv').config()

const ejs = require('ejs');
const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path')
const fetch = require('node-fetch');
const revManifest = require('../dist/rev-manifest')

generateHomepage()
generateMoviesPage()
generateDetailPages()

function generateDetailPages() {
  fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.MOVIEDB_TOKEN}`)
    .then(async response => {
      const movieData = await response.json()

      movieData.results.forEach(movie => {
        Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.MOVIEDB_TOKEN}`).then(response => response.json()),
          fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.MOVIEDB_TOKEN}`).then(response => response.json())
        ])
          .then(([details, videos]) => {
            const data = {
              title: details.original_title,
              movieData: {
                ...details,
                videos: videos.results
              },
              revManifest
            }

            const html = renderTemplate('./views/detail.ejs', data)
            writeFile(`./dist/movies/${movie.id}`, 'index.html', html)
          })
      })
    })
}


function generateMoviesPage() {
  fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.MOVIEDB_TOKEN}`)
    .then(async response => {
      const movieData = await response.json()
      const data = {
        title: 'Movies',
        movieData,
        revManifest
      }

      const html = renderTemplate('./views/overview.ejs', data)
      writeFile('./dist/movies', 'index.html', html)
    })
}

function generateHomepage() {
  const data = {
    title: 'Home',
    revManifest
  }

  const html = renderTemplate('./views/home.ejs', data)
  writeFile('./dist', 'index.html', html)
}


function renderTemplate(templatePath, data) {
  const template = fs.readFileSync(templatePath, 'utf8').toString();
  return ejs.render(template, data, { views: [path.join(__dirname, '../', 'views')] })
}

function writeFile(fileDirectory, filename, fileContents) {
  return fsPromises.mkdir(fileDirectory, { recursive: true }).then(() => {
    return fsPromises.writeFile(path.join(fileDirectory, filename), fileContents)
  })
}
