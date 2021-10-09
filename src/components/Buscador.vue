<template>
 <div id="app">
     <div>
         
         <h1>CODEBREAKER</h1>
         
    </div>
    <main>
      <div class="search-box">
        <button class="btn" v-on:click = 'generarNumero'>Generar número</button>      
      </div>
      <div>
          <div class="tablero" name="tablero">{{ result.mensaje }}</div>
      </div>
      <div class="guess-box">
           <input type="number" name="inputGuess" class="input-guess" placeholder="Guess..." v-model = "query" v-on:keypress="fetchGuessNumber">      
      </div>
    </main>
  </div>
</template>

<script>
export default {
    data () {
    return{
        url_base: "http://localhost:3000/api",
        query: '',
        number: '',
        result: '',
        }
    },
    methods: {
        generarNumero(){
            fetch(`${this.url_base}/randomNumber`).then(res => {
                return res.json();
            }).then(this.setNumber);
        },
        setNumber (num){
            this.number = num.ramdonNumber;
        },
        fetchGuessNumber (e) {
        if(e.key == "Enter"){
            fetch(`${this.url_base}/guessNumber?number=${this.query}`)
            .then(res => {
                return res.json();
            }).then(this.setResults);
        }
        },
        setResults (results){
            this.result = results;
        }
    },
    
}
</script>

<style>
.btn{
    
    background-color: white; 
    color: black; 
    border: 2px solid #008CBA;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 10px 10px 10px 10px;

}
.btn:hover {
      background-color: #008CBA;
      color: white;
}

.tablero{
    border: 2px #008CBA;
    text-align: center;
}



</style>