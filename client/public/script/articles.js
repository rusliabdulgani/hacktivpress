const app = new Vue ({
  el: '#app',
  data: {
    listArticles: [],
    name: '',
    content: '',
    category: '',
    author: ''
  },
  created: function(){
    axios.get('http://localhost:3000/articles')
    .then( result => {
      console.log(result.data);
      this.listArticles = result.data
    })
  }
})
