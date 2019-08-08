Vue.use(VueAgile)

app = new Vue ({
    el: '#promociones',
    components: {
		agile: VueAgile,
    },
    
    data:  {
           slides: [],
           currentSlide: ""
    },


    mounted() {
        this.slides[this.currentSlide]
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