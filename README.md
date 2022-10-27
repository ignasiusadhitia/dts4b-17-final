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
    DTS REA4 Course Final Project.
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

[![Movie Trailer][product-screenshot]](https://jolly-pithivier-6ddf90.netlify.app)

The project is a final project of DTS REA4 Course.

Movie Trailer is a movie trailer database website with search functionality. It consummes movies API from [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api) and using authentication service from [Firebase](https://firebase.google.com/).

<p align="right">(<a href="#top">back to top</a>)</p>


### App Features

* Login
* Logout
* Register
* Landing page
* Dashboard page
* Movie trailer page
* Search movie trailer
* Switch between movie genres or categories

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

This Movie Trailer App project was built with:
* [react 18.2.0](https://reactjs.org/)
* [react-dom 18.2.0](https://reactjs.org/)
* [react-redux 8.0.4](https://react-redux.js.org/)
* [@reduxjs/toolkit 1.8.6 (RTK Query)](https://redux-toolkit.js.org/)
* [react-router-dom 6.4.2](https://reactrouter.com/en/main)
* [Firebase 9.12.1](https://firebase.google.com/)
* [react-firebase-hooks 5.0.3](https://github.com/csfrequency/react-firebase-hooks)
* [@mui/material 5.10.10](https://mui.com/)
* [@mui/icons-material 5.10.9](https://mui.com/)
* [@emotion/react 11.10.4](https://mui.com/)
* [@emotion/styled 11.10.4](https://mui.com/)
* [@egjs/react-flicking 4.10.1](https://naver.github.io/egjs-flicking/)
* [@egjs/flicking-plugins 4.4.0](https://naver.github.io/egjs-flicking/)


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


https://user-images.githubusercontent.com/81973176/198189978-10dbfed5-b740-4709-9bad-7959f715f111.mp4



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

* [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]:https://user-images.githubusercontent.com/81973176/198183052-a51a21ee-8e84-4bf1-afd4-77484b7dd289.png


