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
          <textarea class="tablero" rows="5"></textarea>
      </div>
    </main>
  </div>
</template>

<script>
export default {
    data () {
    return{
        url_base: "https://api.openweathermap.org/data/2.5/",
        query: '',
        }
    },
    methods: {
        generarNumero(){
            console.log('numero')
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
    width: 500px;
}



</style>