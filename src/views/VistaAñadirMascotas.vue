<template>
    <div>
        <h1>Bienvenido a añadir mascota!</h1>
        <h4>Desde aquí podrás añadir a tu mascota a la aplicación</h4>
        <formulario-mascota @add-pet="postMascota"/>
    </div>
</template>

<script>
import FormularioMascota from '@/components/ComponenteAñadirMascotas.vue'
const vls = JSON.parse(localStorage.getItem("token"))

    export default {
        components: {FormularioMascota },
        methods:{
            // **** POST ****//
            async postMascota(mascota) {
                try {
                const response = await fetch('https://examen-parte-1.herokuapp.com/api/mascotas', {
                    method: 'POST',
                    body: JSON.stringify(mascota),
                    headers:{
                        'Content-type': 'application/json; charset=UTF-8',
                        'Authorization' : `Bearer ${vls}`
                    }     
                });
                
                const mascotaCreada = await response.json();
                console.log(mascotaCreada)
                
                
                } catch (error) {
                console.error(error);
                }
            }

            
        }
        
        
    }
</script>

<style lang="scss" scoped>

</style>