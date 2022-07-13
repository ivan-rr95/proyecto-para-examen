<template>
  <div id="formulario-mascota">
    <form @submit.prevent="enviarFormulario">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label><b>Nombre</b></label>
              <input  v-model="mascotas.nombre" type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label><b>Descripción</b></label>
              <input v-model="mascotas.descripcion" type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <button class="btn btn-success">Añade tu mascota </button>
            </div>
            <div class="foto">
                <img src="" alt="">
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'formulario-mascota',
    data() {
      return {
        mascotas: {
          nombre: 'GATOLOCO',
          descripcion: 'gatito blanco',
          foto: '',
        },
      }
    },
    methods: {
    enviarFormulario() {
      this.$emit('add-pet', this.mascotas);
    },
  },
    
  }
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }
  button{
    margin-top:2rem;
  }
</style>