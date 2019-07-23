new Vue({
  el: '#products',

  data: {
    sucursales: [],
    categorias: [],
    productos: [],
    seleccion: "",
    busqueda: "",
    sucursalSeleccionada: 'Todas',
    categoriaSeleccionada: 'Todas',
    productosFiltrados: [],
    productosFiltrados2: [],
  },

  created: function () {
    this.productosFiltrados = this.productos;
  },

  methods: {
    abrirSelec(id_producto) {
      this.seleccion = id_producto;
    },

    filtrarProductos() {
      let sucursal = document.getElementById('sucursal').value;
      if(sucursal == "Todas"){
        sucursal = 0;
      }
      axios.get("https://pmpu.000webhostapp.com/api/categoriaSucursal?id="+sucursal)
      .then(res => {
          this.categorias = res.data;
          console.log(res.data);
      })
      .catch(err => {
          console.log(err);
      });
      this.productosFiltrados = this.productos;

      if (this.sucursalSeleccionada != 'Todas') {
        this.productosFiltrados = this.productosFiltrados.filter(producto => producto.sucursal == this.sucursalSeleccionada);
      }

      if (this.categoriaSeleccionada != 'Todas') {
        this.productosFiltrados = this.productosFiltrados.filter(producto => producto.categoria == this.categoriaSeleccionada);
      }

      if (this.busqueda != '') {
        this.productosFiltrados = this.productosFiltrados.filter(producto => {
          console.log(producto.producto, this.busqueda);
          return producto.producto.toLowerCase().indexOf(this.busqueda.toLowerCase()) != -1 || producto.descripcion.toLowerCase().indexOf(this.busqueda.toLowerCase()) != -1;
        });
      }
      this.productosFiltrados2 = [];
    },
    filtrarProductos2(){
      let cat = document.getElementById('cat').value;
      if(cat == "Todas"){
        cat = 0;
      }
      axios.get("http://192.168.22.115/pm/api/productoCategoria?cat="+cat)
      .then(res => {
          this.productosFiltrados2 = res.data;
          // this.categorias = res.data;
          console.log(res.data);
      })
      .catch(err => {
          console.log(err);
      })

      // this.productosFiltrados2 = this.productos;

      // if (this.sucursalSeleccionada != 'Todas') {
      //   this.productosFiltrados = this.productosFiltrados.filter(producto => producto.sucursal == this.sucursalSeleccionada);
      // }

      // if (this.categoriaSeleccionada != 'Todas') {
      //   this.productosFiltrados = this.productosFiltrados.filter(producto => producto.categoria == this.categoriaSeleccionada);
      // }

      // if (this.busqueda != '') {
      //   this.productosFiltrados = this.productosFiltrados.filter(producto => {
      //     console.log(producto.producto, this.busqueda);
      //     return producto.producto.toLowerCase().indexOf(this.busqueda.toLowerCase()) != -1 || producto.descripcion.toLowerCase().indexOf(this.busqueda.toLowerCase()) != -1;
      //   });
      // }
    }
  },

  // computed: {}

  mounted() {
    axios.get("http://192.168.22.115/pm/api/sucursal")
      .then(res => {
          this.sucursales = res.data;
          console.log(res.data);
      })
      .catch(err => {
          console.log(err);
      });

      // axios.get("http://192.168.22.115/pm/api/categoriaSucursal?id=1")
      // .then(res => {
      //     this.categorias = res.data;
      //     console.log(res.data);
      // })
      // .catch(err => {
      //     console.log(err);
      // });

      // axios.get("http://192.168.22.115/pm/api/productoCategoria")
      // .then(res => {
      //     this.productos = res.data;
      //     // this.categorias = res.data;
      //     console.log(res.data);
      // })
      // .catch(err => {
      //     console.log(err);
      // })

      
  }
});
