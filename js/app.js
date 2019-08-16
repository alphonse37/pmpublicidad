
app = new Vue ({
    el: '#promociones',
    data:  {
           slides: [],
    },

    mounted() {
        axios.get("https://pmpu.000webhostapp.com/api/promocion")
        .then(res => {
            this.slides = res.data;
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
});