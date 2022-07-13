<template>
    <div>
        <h1>Registro</h1>
        <componente-registro @add-registro="crearUsuario" :registro="registro"/>
    </div>
</template>

<script>
import ComponenteRegistro from '@/components/ComponenteRegistro.vue'

    export default {
        components: { ComponenteRegistro },
        methods: {
                 async crearUsuario(registro) {
                    try {
                    console.log(registro)
                    const response = await fetch('https://examen-parte-1.herokuapp.com/api/registro', {
                        method: 'POST',
                        body: JSON.stringify(registro),
                        headers: { 'Content-type': 'application/json; charset=UTF-8' },
                    });
                    
                    const registroCreado = await response.json();
                    console.log(registroCreado)
                    
                    
                    } catch (error) {
                    console.error(error);
                    }
                }
            },
    }
</script>

<style lang="scss" scoped>

</style>