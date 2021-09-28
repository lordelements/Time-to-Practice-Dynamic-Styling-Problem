
const app = Vue.createApp({
    data() {
     return {
        visible:true,
        styleme: '',
        stylemeInline: '',
        color: '#683AB6',
        stylemeEnter: '',
        
       }
    },
    methods: {
        setstyleColor(event){
            this.stylemeInline = event.target.value;
        },
        setparagraph(event){
            this.styleme = event.target.value;
        },
        confirmedInput(){
            this.stylemeEnter = this.styleme;
        }
        
    },
});
app.mount( '#assignment');
