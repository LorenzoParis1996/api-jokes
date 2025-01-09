const { createApp } = Vue

createApp({
  data() {
    return {
      joke:{}
    }
  },
  methods: {
    getJoke() {
        axios.get('https://official-joke-api.appspot.com/jokes/random')
        .then((response) => {
            this.joke = response.data;
            console.log(response.data);
        })
        .catch((error) => {
            console.error("error fetching joke" , error);
        });
    }
  },
  created() {
    this.getJoke();
  }
}).mount('#app')