<template>
    <div id="formulario-registro">
        <h3>Introduce tus datos</h3>
        <form @submit.prevent="enviarFormulario">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nombre</label>
                <input type="email" v-model="registro.nombre" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" v-model="registro.user" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" v-model="registro.pass" class="form-control" id="exampleInputPassword1">
                <div id="emailHelp" class="form-text">No desveles jamas tu contraseña a nadie</div>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Adelante!</label>
            </div>
            <button type="submit"  class="btn btn-primary">Entra</button>
        </form>
       

    </div>
</template>

<script>
    export default {
        name: 'formulario-registro',
          data() {
            return {
            registro: {
                nombre:'',
                user: '',
                pass: '',
            },
            }
        },
        methods:{
            enviarFormulario() {
                this.$emit('add-registro', this.registro);
            }
        } 
    }
</script>

<style lang="scss" scoped>

</style>