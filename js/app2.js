new Vue ({
    el: '#productos',

    data:  {
        
            productos: [
                {
                id_sucursal: "1",
                sucursal: "Santa Ana 1",
                idCategoria: "1",
                categoria: "Bordados",
                producto: "Camisas",
                descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus repellat, facilis temporibus vitae ad iste voluptates corporis error architecto aut officia perspiciatis, rerum perferendis aspernatur ut minima eius! Nihil.",
                imagen: "https://images.pexels.com/photos/1935946/pexels-photo-1935946.jpeg?cs=srgb&dl=beverage-cold-delicious-1935946.jpg&fm=jpg"
                },

                {
                id_sucursal: "1",
                sucursal: "Santa Ana 1",
                idCategoria: "2",
                categoria: "Impresión Láser",
                producto: "Banners",
                descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus repellat, facilis temporibus vitae ad iste voluptates corporis error architecto aut officia perspiciatis, rerum perferendis aspernatur ut minima eius! Nihil.",
                imagen: "https://images.pexels.com/photos/1831256/pexels-photo-1831256.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },

                {
                id_sucursal: "1",
                sucursal: "Santa Ana 1",
                idCategoria: "3",
                categoria: "Impresión Digital",
                producto: "Afiche",
                descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus repellat, facilis temporibus vitae ad iste voluptates corporis error architecto aut officia perspiciatis, rerum perferendis aspernatur ut minima eius! Nihil.",
                imagen: "https://images.pexels.com/photos/2588641/pexels-photo-2588641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },

                {
                id_sucursal: "2",
                sucursal: "Santa Ana 2",
                idCategoria: "4",
                categoria: "Servicios de Instalación",
                producto: "Instalación de Rotulos",
                descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus repellat, facilis temporibus vitae ad iste voluptates corporis error architecto aut officia perspiciatis, rerum perferendis aspernatur ut minima eius! Nihil.",
                imagen: "https://images.pexels.com/photos/2575830/pexels-photo-2575830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },

                {
                id_sucursal: "2",
                sucursal: "Santa Ana 2",
                idCategoria: "5",
                categoria: "Serigrafía",
                producto: "Tazas",
                descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus repellat, facilis temporibus vitae ad iste voluptates corporis error architecto aut officia perspiciatis, rerum perferendis aspernatur ut minima eius! Nihil.",
                imagen: "https://images.pexels.com/photos/2621990/pexels-photo-2621990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },

                {
                id_sucursal: "2",
                sucursal: "Santa Ana 2",
                idCategoria: "5",
                categoria: "Serigrafía",
                producto: "Camisas",
                descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus repellat, facilis temporibus vitae ad iste voluptates corporis error architecto aut officia perspiciatis, rerum perferendis aspernatur ut minima eius! Nihil.",
                imagen: "https://images.pexels.com/photos/2179865/pexels-photo-2179865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },

                {
                id_sucursal: "3",
                sucursal: "San Salvador",
                idCategoria: "5",
                categoria: "Serigrafía",
                producto: "Pachones",
                descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus repellat, facilis temporibus vitae ad iste voluptates corporis error architecto aut officia perspiciatis, rerum perferendis aspernatur ut minima eius! Nihil.",
                imagen: "https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                },

                {
                id_sucursal: "3",
                sucursal: "San Salvador",
                idCategoria: "6",
                categoria: "Confección",
                producto: "Camisas",
                descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus repellat, facilis temporibus vitae ad iste voluptates corporis error architecto aut officia perspiciatis, rerum perferendis aspernatur ut minima eius! Nihil.",
                imagen: "https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
                return this.filtrarSucursal.filter((producto) => {
                    return producto.producto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '').match(this.buscar.toLowerCase());
                })
        },

        filtrarSucursal() {
            var sucursal = this.seleccionarSucursal;

            if (sucursal.toLowerCase() == "todas") {
                return this.productos;
            } else {
                return this.productos.filter(function(producto){
                    return producto.sucursal == sucursal;

                   
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