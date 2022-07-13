<template>
    <div id="tabla-login">
        <form @submit.prevent="enviarFormulario">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" v-model="usuario.user" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" v-model="usuario.pass" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Adelante!</label>
            </div>
              <button @click="compruebaUsuario" type="submit" class="btn btn-primary">
                <!-- <router-link to="/form-mascotas">Entra</router-link> --> Entra
              </button>
        </form>
        
    </div>
</template>

<script>
export default {
        name: 'tabla-login',
        data() {
          return {
            usuario: {
              user: 'admin@gmail.com',
              pass: 'admin'
            }
          }
        },
        methods: {
          enviarFormulario() {
            this.$emit('check-user', this.usuario);
          },
        },
        // props:{
        //     mascotas: Array
        // },
    }
</script>




<style lang="scss" scoped>

</style>