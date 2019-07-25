new Vue ({
    el: '#promociones',

    data:  {
           promociones: [],
    },


    mounted() {
        axios.get("https://pmpu.000webhostapp.com/api/promocion")
        .then(res => {
            this.promociones = res.data;
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
});