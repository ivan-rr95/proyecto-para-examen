<template>
    <div id="tabla-usuarios">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">User</th>
                <th scope="col">Roles</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios" :key="usuario.id">
                <th scope="row"></th>
                <td>{{usuario.nombre}}</td>
                <td>{{usuario.user}}</td>
                <td>{{usuario.roles}}</td>
                <td>
                    <button class="btn btn-danger ml-2" @click="$emit('eliminar-usuario', usuario)">🗑️ Borrar</button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'tabla-usuarios',
        props:{
            usuarios: Array
        },
    }
    
</script>

<style lang="scss" scoped>

</style>