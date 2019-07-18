new Vue ({
    el: '#servicios',

    data:  {
           servicios: [],
    },


    mounted() {
        axios.get("http://192.168.22.115/pm/api/categoria")
        .then(res => {
            this.servicios = res.data;
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
});