new Vue ({
    el: '#productos',

    data:  {
        
            productos: [
                {
                sucursal: "Santa Ana 1",
                categoria: "Bordados",
                nombre: "Camisas",
                descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus repellat, facilis temporibus vitae ad iste voluptates corporis error architecto aut officia perspiciatis, rerum perferendis aspernatur ut minima eius! Nihil."
                },

                {
                sucursal: "Santa Ana 1",
                categoria: "Impresión Láser",
                nombre: "Banners",
                descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus repellat, facilis temporibus vitae ad iste voluptates corporis error architecto aut officia perspiciatis, rerum perferendis aspernatur ut minima eius! Nihil."
                },

                {
                sucursal: "SantaAna1",
                categoria: "Impresión Digital",
                nombre: "Afiche",
                descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus repellat, facilis temporibus vitae ad iste voluptates corporis error architecto aut officia perspiciatis, rerum perferendis aspernatur ut minima eius! Nihil."
                },

                {
                sucursal: "Santa Ana 2",
                categoria: "Servicios de Instalación",
                nombre: "Instalación de Rotulos",
                descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus repellat, facilis temporibus vitae ad iste voluptates corporis error architecto aut officia perspiciatis, rerum perferendis aspernatur ut minima eius! Nihil."
                },

                {
                sucursal: "Santa Ana 2",
                categoria: "Serigrafía",
                nombre: "Tazas",
                descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus repellat, facilis temporibus vitae ad iste voluptates corporis error architecto aut officia perspiciatis, rerum perferendis aspernatur ut minima eius! Nihil."
                },

                {
                sucursal: "Santa Ana 2",
                categoria: "Serigrafía",
                nombre: "Camisas",
                descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus repellat, facilis temporibus vitae ad iste voluptates corporis error architecto aut officia perspiciatis, rerum perferendis aspernatur ut minima eius! Nihil."
                },

                {
                sucursal: "San Salvador",
                categoria: "Serigrafía",
                nombre: "Pachones",
                descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus repellat, facilis temporibus vitae ad iste voluptates corporis error architecto aut officia perspiciatis, rerum perferendis aspernatur ut minima eius! Nihil."
                },

                {
                sucursal: "San Salvador",
                categoria: "Confección",
                nombre: "Camisas",
                descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus repellat, facilis temporibus vitae ad iste voluptates corporis error architecto aut officia perspiciatis, rerum perferendis aspernatur ut minima eius! Nihil."
                }
            ],
            seleccion: "",
            buscar: "",
            seleccionarSucursal: 'todas',
            seleccionarCategoria: 'todas'
        
    },

    methods: {
        // abrirCategoria(nombre) {
        //     this.seleccionarSucursal = nombre;
        // },
        abrirSelec(id_producto) {
            this.seleccion = id_producto;
        }
    },

    computed: {
        filtrarProductos() {
            return this.filtrarCategoria.filter((producto) => {
                return producto.nombre.toLowerCase().match(this.buscar.toLowerCase());
            })
        },

        filtrarSucursal() {
            var sucursal = this.seleccionarSucursal;

            if (sucursal.toLowerCase() === "todas") {
                return this.productos;
            } else {
                return this.productos.filter(function(producto){
                    return producto.sucursal === sucursal;
                })
            }
        },

        filtrarCategoria() {
            var categoria = this.seleccionarCategoria;

            if(categoria.toLowerCase() === "todas") {
                return this.productos;
            } else {
                return this.productos.filter(function(producto){
                    return producto.categoria === categoria;
                })
            }
        }
    }

    // mounted() {
    //     axios.get("http://192.168.22.115/pm/api/categoria")
    //     .then(res => {
    //         this.productos = res.data;
    //         console.log(res.data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }
});