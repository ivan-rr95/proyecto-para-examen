<template>
    <div>
        <h1>Login</h1>
        <h3>Introduce tus datos</h3>
        <componente-login @check-user="compruebaUsuario"/>
    </div>
</template>

<script>
import ComponenteLogin from '@/components/ComponenteLogin.vue'
    export default {
        components: { ComponenteLogin },
        methods:{
            //metodo para logear usuario POST
            async compruebaUsuario(usuario) {
                try {
                
                console.log('hola')
                
                const response = await fetch('https://examen-parte-1.herokuapp.com/api/login', {
                    method: 'POST',
                    body: JSON.stringify(usuario),
                    headers: { 'Content-type': 'application/json; charset=UTF-8' },
                });
                    //recibimos la respuesta objeto con await en formato json
                    const usuarioComprobado = await response.json();
                    console.log(usuarioComprobado)
                    //lo pasamos a texto para poder guardarlo en localstorage (setItem)
                    localStorage.setItem("token", JSON.stringify(usuarioComprobado.token));
                   

                    console.log(JSON.parse(localStorage.getItem("token")))  

                    console.log(localStorage)
     
                    // console.log(username)
                    console.log(localStorage)
                    alert('Te has logeado correctamente. Bienvenido ' + usuarioComprobado.user)

                } catch (error) {
                console.error(error);
                }
            }
        }
        
           
        
    }
</script>

<style lang="scss" scoped>

</style>