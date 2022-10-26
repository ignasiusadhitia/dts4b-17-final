<!-- PROJECT LOGO -->
<br />
<div align="center">  
  <div>
    <a href="https://github.com/ignasiusadhitia/dts4b-17-final">    
      <img src="media/movie_trailer.png" alt="movie_trailer_image">
    </a>
  </div>
  
  <h3 align="center">Movie Trailer App</h3>

  <p align="center">
    DTS REA4 <a href="https://reactjs.org/">React.js</a> Developer Course Final Project.
    <br />
    <a href="https://github.com/ignasiusadhitia/dts4b-17-final"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://jolly-pithivier-6ddf90.netlify.app">View Live Demo</a>
    ·
    <a href="https://github.com/ignasiusadhitia/dts4b-17-final/issues">Report Bug</a>
    ·
    <a href="https://github.com/ignasiusadhitia/dts4b-17-final/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#demo-video">Demo Video</a></li>
    <li><a href="#project-files-structure">Project Files Structure</a></li>  
    <li><a href="#project-links">Project Links</a></li>
    <li><a href="#contact">Contact</a></li>    
    <li><a href="#acknowledgments">Acknowledgments</a></li> 
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Monsters Rolodex ][product-screenshot]](https://example.com)

The project is a final project of DTS REA4 <a href="https://reactjs.org/">React.js</a> Developer Course.

Movie Trailer is a movie website with search functionality. There are 10 monsters with their name, image, and email address. It consummes users API from [JSONPlaceholder - Free Fake Rest API](https://jsonplaceholder.typicode.com/) and monsters image from [RoboHash](https://robohash.org/).

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This Monsters Rolodex project was built with [React.js](https://reactjs.org/).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Please make sure you have the latest version of [Node Package Manager (NPM)](https://www.npmjs.com/) on your system.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_This is how to run the project on your local environment._

1. Clone the repo
   ```sh
   git clone https://github.com/ignasiusadhitia/dts4b-17-final.git
   ```
2. Open the repo directory
   ```sh
   cd dts4b-17-final
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run the project
   ```js
   npm start
   ```
5. Your browser will open automatically or you can open it manually and enter this address:
   ```js
   http://localhost:3000/
   ```
   
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- DEMO VIDEO -->
## Demo Video

<video src="https://user-images.githubusercontent.com/81973176/149464395-15fee452-efd5-4482-929b-0ffe70080550.mp4" data-canonical-src="https://user-images.githubusercontent.com/81973176/149464395-15fee452-efd5-4482-929b-0ffe70080550.mp4" controls="controls" muted="muted">
</video>

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- PROJECT FILES STRUCTURE -->
## Project Files Structure

```js
src/
┣ apis/
┃ ┗ tmdbApi.js
┣ app/
┃ ┗ store.js
┣ components/
┃ ┣ Footer.js
┃ ┣ GenresCategories.js
┃ ┣ HeroCarousel.js
┃ ┣ MovieCard.js
┃ ┣ MoviesCarousel.js
┃ ┣ MoviesList.js
┃ ┣ Navbar.js
┃ ┣ RequireAuth.js
┃ ┣ Search.js
┃ ┗ UserLog.js
┣ config/
┃ ┗ firebase.js
┣ containers/
┃ ┣ Login.js
┃ ┣ MainPage.js
┃ ┣ MoviePage.js
┃ ┣ MoviesPage.js
┃ ┣ NotFound.js
┃ ┗ Register.js
┣ features/
┃ ┗ currentGenreOrCategory.js
┣ themes/
┃ ┗ theme.js
┣ App.js
┣ index.js
┗ reportWebVitals.js

```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- PROJECT LINKS -->
## Project Links

Project Link: [https://github.com/ignasiusadhitia/dts4b-17-final](https://github.com/ignasiusadhitia/dts4b-17-final)

Project Live Demo: [https://jolly-pithivier-6ddf90.netlify.app](https://jolly-pithivier-6ddf90.netlify.app)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Ignasius Yuda Adhitia - [Github](https://github.com/ignasiusadhitia/) - [Gitlab](https://gitlab.com/ignasiusadhitia/) - [LinkedIn](https://www.linkedin.com/in/ignasiusadhitia/) - [Email](hi@ignasiusadhitia.com) - [Website](www.ignasiusadhitia.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)](https://www.udemy.com/course/complete-react-developer-zero-to-mastery)
* [JSONPlaceholder - Free Fake Rest API](https://jsonplaceholder.typicode.com/)
* [RoboHash](https://robohash.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: media/screenshot.png

