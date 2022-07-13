<template>
    <div>
        <h1>Usuarios</h1>
        <componente-usuarios :usuarios="usuarios" @eliminar-usuario="borrarUsuario"/>
    </div>
</template>

<script>
import ComponenteUsuarios from '@/components/ComponenteUsuarios.vue';
    export default {
        name: 'VistaUsuarios',
        components: {
            ComponenteUsuarios
                
        },
        data(){
            return{
                usuarios: [],
                usuario: {
                    nombre: '',
                    user: '',
                    roles:''
                },
                vls : ''

            } 
        },
        methods:{
            //leer usuarios
            async leerUsuarios() {
                try {
                    this.vls = JSON.parse(localStorage.getItem("token"))

                    console.log(this.vls)
                    
                    const response = await fetch(
                        'https://examen-parte-1.herokuapp.com/api/usuarios',
                        {
                            method:'GET',
                            headers:{
                                'Content-type': 'application/json; charset=UTF-8',
                                'Authorization' : `Bearer ${this.vls}`
                            }
                     }
                    )
                    this.usuarios = await response.json()
                    console.log(this.usuario.roles)
                
                
                
                
                } catch (error) {
                console.error(error);
                
                }
            },
            // *****ELIMINAR USUARIO*******/
            async borrarUsuario(usuario) {
                try {
                    await fetch(`https://examen-parte-1.herokuapp.com/api/usuarios/${usuario._id}`, {
                    method: "DELETE",
                    headers:{
                        'Content-type': 'application/json; charset=UTF-8',
                        'Authorization' : `Bearer ${this.vls}`
                    }

                  
                });
                console.log(usuario._id)
                this.usuarios = this.usuarios.filter(u => u._id !== usuario._id);
                
                } catch (error) {
                
                console.log(error)
                }
            },
        },
        
        mounted () {
            console.log('todo ok')
            this.leerUsuarios();
        },
    }

    
        // methods: {
        //     async leerUsuarios() {
        //         // Método para obtener la lista de mascotas
        //         try {
        //             const response = await fetch('http://localhost:8000/api/usuarios');
        //             this.usuarios = await response.json();
        //         } catch (error) {
        //             console.error(error);
        //         }
               
        //     },
        // }
        // methods: {
        //     async leerMascotas() {
        //         // Método para obtener la lista de mascotas
        //         try {
        //             const response = await fetch('localhost:8000/api/mascotas');
        //             this.mascotas = await response.json();
        //         } catch (error) {
        //             console.error(error);
        //         }
        //     },
            // async modificarMascotasId() {
            //     // Método para actualizar una mascota
            //     try {
            //         const response = await fetch(`localhost:8000/api/mascotas/${mascotas.id}`, {
            //         method: 'PUT',
            //         body: JSON.stringify(mascotas),
            //         headers: { 'Content-type': 'application/json; charset=UTF-8' },
            //         });
                    
            //         const mascotaActualizada = await response.json();
            //         this.usuarios = this.usuarios.map(u => (u.id === usuario.id ? mascotaActualizada : u));
            //     } catch (error) {
            //         console.error(error);
            //     }
            // },
        //     async borrarMascotasId() {
        //         // Método para borrar una mascota
        //     },
        // } 
    // }
</script>
    


<style lang="scss" scoped>

</style>