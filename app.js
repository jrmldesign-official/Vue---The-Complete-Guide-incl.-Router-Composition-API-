const app = Vue.createApp({
    data() {
        return {
            info: {
                name: null,
                age: 27,
                image: 'https://th.bing.com/th/id/R.28698ff68d29b24c4c26f8bd14b5de22?rik=DF9oROk0o62kUQ&riu=http%3a%2f%2fblog.amio.io%2fcontent%2fimages%2f2019%2f06%2fvue-3.png&ehk=P0xnsaLXQzpjJSzeLmoTeRFH3HL%2f9pypNxzgk6F8T%2fU%3d&risl=&pid=ImgRaw&r=0'
            }
        }
    },
    methods: {
        AgeFiveYears(){
            return this.info.age + 5
        },
        FavRNumber(){
            return Math.floor(Math.random() * 2);
        }
    }
})

app.mount('#assignment');