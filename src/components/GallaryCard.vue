<template>
  <div class="main_container">
    
    <h2>{{ heading }}</h2>
    
    <img src="https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg?crop=1.00xw:0.891xh;0,0.0759xh&resize=400:*" alt="" srcset="">

    <h3>{{ details }}</h3>
    
    <button @click="clickHandler" class="info_btn"> info  </button>

    <h1> iteams in cart: {{count}}</h1>
    <button class="btn" @click="add"> add car </button> | <button class="btn" @click="sub"> remove car </button>
  </div>
</template>

<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 400px) {
  h3 {
  margin: 40px 0 0;
}

.btn{
  border-radius: 15px;
  padding: 10px;
  background-color: #2c3e50;
  color: #fff;
}
.main_container{
  background-color: burlywood;
  padding: 50px;
}
.info_btn{
  border-radius: 15px;
  padding: 10px 25px;
  margin: 10px 0 0 0;
  background-color: #50302c;
  color: #fff;
}
}

@media (max-width: 530px) {
  h3 {
  margin: 40px 0 0;
}

img{
  width: 200px;
  height: auto;
}

.btn{
  border-radius: 15px;
  padding: 5px;
  background-color: #2c3e50;
  color: #fff;
}
.main_container{
  background-color: burlywood;
  padding: 50px;
}
.info_btn{
  border-radius: 15px;
  padding: 5px 15px;
  margin: 5px 0 0 0;
  background-color: #50302c;
  color: #fff;
}
}

</style>
