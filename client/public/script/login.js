const app = new Vue({
  el: '#app-login',
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
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
})
