
const app = Vue.createApp({
    data() {
     return {
        showandvisible:false,
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
        },
        toggleParagraph() {
            this.showandvisible = !this.showandvisible;
        }
        
    },
});
app.mount( '#assignment');
