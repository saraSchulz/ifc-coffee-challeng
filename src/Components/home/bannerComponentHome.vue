<script setup>
</script>
<template>
  <section class="bannerhome">
  <div class="left">
    <p> Bem-vindo ao</p>
    <h2>Coffee Quality Challenge 2026</h2>
    <p>Avalie, compare e descubra os melhores cafés especiais</p>

    <div class="btns">
      <button>
         <router-link to="/avaliacoes"> <i class="mdi mdi-pencil"></i> Fazer Avalizações </router-link>
      </button>
      <button>
        <router-link to="/ranking"> <i class="mdi mdi-star"></i>Ver Ranking</router-link>
      </button>
    </div>

  </div>
  <div class="right">
    <h1>
      <img src="/public/logo.png" alt="logo">
    </h1>
  </div>
  </section>
</template>
<style scoped>
.bannerhome{
  display: flex;
  max-width: 100%;
  & .left{
    display: flex;
    flex-direction: column;
  }
  & .right{
    width: 50%;
    margin: 10px;
    & h1{
      & img{
        width: 50%;
        height: auto;
      }
    }
  }
}

</style>
