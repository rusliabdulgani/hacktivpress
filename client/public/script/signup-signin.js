const app = new Vue({
  el: '#app',
  data:{
    name: '',
    email: '',
    username:'',
    password:''
  }
  ,
  methods:{
    signup:function(){
      axios.post('http://localhost:3000/users/signup',{
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password  
      })
      .then( response =>{
        alert('anda berhasil register.')
        this.username = '';
        this.password = '';
      })
      .catch(err=>{
        console.log(err);
      })
    },
    signin:function(){
      axios.post('http://localhost:3000/users/signin',{
        username: this.username,
        password: this.password
      })
      .then( res=>{
        const tokenJwt = res.data;
        localStorage.setItem('token', tokenJwt)
        window.location.href = 'articles.html'
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
})
