<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container" id="separacion">
        <a class="navbar-brand" href="#">Animalitos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex  justify-content-between" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll " style="--bs-scroll-height: 100px;">
            <li class="mx-3 nav-item">
              <router-link to="/form-registro">Registro</router-link>
            </li>
            <li class="mx-3 nav-item">
              <router-link to="/form-login">Login</router-link>
            </li>
            <li class="mx-3 nav-item dropdown">
              <router-link to="/form-mascotas">Mascotas</router-link>
            </li>
            <li class="mx-3 nav-item">
              <router-link to="/form-usuarios">Usuarios</router-link>
            </li>
            <li class="mx-3 nav-item">
              <router-link to="/form-añadir-mascotas">Añade tu mascota</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
