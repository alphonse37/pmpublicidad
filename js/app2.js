new Vue ({
    el: '#servicios',

    data:  {
           servicios: [],
    },


    mounted() {
        axios.get("https://pmpu.000webhostapp.com/api/categoria")
        // axios.get("http://localhost/pm/api/categoria")
        .then(res => {
            this.servicios = res.data;
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
});