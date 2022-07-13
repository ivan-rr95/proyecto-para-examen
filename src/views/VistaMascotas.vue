<template>
    <div>
        <h1>Mascotas</h1>
        <componente-mascotas @eliminar-mascota="borrarMascotasId" :mascotas="mascotas"/>
    </div>
</template>

<script>
import ComponenteMascotas from '@/components/ComponenteMascotas.vue';
    export default {
        name: 'VistaMascotas',
        components: {
            ComponenteMascotas
                
        },
        data() {
            return {
                mascotas: [],
                mascota: {
                    nombre: '',
                    descripcion: '',
                    foto: ''
                },
                vls : ''
            }
        },
        methods: {
            async leerMascotas() {
                // Método para obtener la lista de mascotas
                try {
                    const response = await fetch('https://examen-parte-1.herokuapp.com/api/mascotas', {});
                    this.mascotas = await response.json();
                } catch (error) {
                    console.error(error);
                }
            },
             async borrarMascotasId(mascota) {
                try {
                    await fetch(`https://examen-parte-1.herokuapp.com/api/mascotas/${mascota._id}`, {
                    method: "DELETE",
                    headers:{
                        'Content-type': 'application/json; charset=UTF-8',
                        'Authorization' : `Bearer ${this.vls}`
                    }

                  
                });
                console.log(mascota._id)
                this.mascotas = this.mascotas.filter(u => u._id !== mascota._id);
                
                } catch (error) {
                
                console.log(error)
                }
            }
        },
        mounted() {
                console.log('montado')
                this.leerMascotas();
            }
    }
</script>
    


<style lang="scss" scoped>

</style>