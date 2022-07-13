<template>
    <div id="tabla-mascotas">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="mascota in mascotas" :key="mascota.id">
                <th scope="row">1</th>
                <td>{{mascota.nombre}}</td>
                <td>{{mascota.descripcion}}</td>
                <td>@</td>
                <td>
                    <button class="btn btn-danger ml-2" @click="$emit('eliminar-mascota', mascota)">🗑️ Borrar</button>
                </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td></td>
                <td></td>
                <td>@</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="2"></td>
                <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'tabla-mascotas',
         methods: {
            enviarFormulario() {
                this.$emit('add-pet', this.mascotas);
            },
        },
        props:{
            mascotas: Array
        },
    }
    
</script>

<style lang="scss" scoped>

</style>