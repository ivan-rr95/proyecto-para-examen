<template>
  <div class="hello">
    <h1>Bienvenido a tu primera app de Animalitos</h1>
    <div id="boton">
    <button>
        <router-link to="/form-registro">Registro</router-link>
    </button>
    <button>
        <router-link to="/form-login">Login</router-link>
    </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#boton{
  display: flex;
  justify-content:center
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
