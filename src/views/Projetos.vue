<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store';

export default defineComponent({
  name: 'Projetos',
  data( ) {
    return {
      nomeDoProjeto: "",
    }
  },
  methods: {
    salvarProjeto() {
      this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)
      this.nomeDoProjeto = ""
    }
  },
  setup() {
    const store = useStore()
    return {
      store,
      projetos: computed(() => store.state.projetos) 
    }
  }
})
</script>

<template>
  <section class="projetos">
    <div class="title">
    <h1>Projetos</h1>
    <form @submit.prevent="salvarProjeto">
      <div class="field">
        <label form="nomeDoProjeto" class="label">Nome do projeto</label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto" />
      </div>
      <div class="field">
      <button class="button" type="submit">Salvar</button>
    </div>
  </form>
  <table class="table is-fullwidth">
    <thead class="thead">
      <tr class="tr has-background-light">
        <th class="th is-narrow">
          ID
        </th>
        <th class="th is-narrow"> 
          Nome
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="projeto in projetos" :key="projeto.id">
        <td>{{ projeto.id }}</td>
        <td>{{ projeto.nome }}</td>
      </tr>
    </tbody>
  </table>
    
  </div>
  </section>
  
</template>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>