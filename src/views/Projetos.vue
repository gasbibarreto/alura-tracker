<script lang="ts">
import IProjeto from '@/interfaces/IProjeto'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Projetos',
  data( ) {
    return {
      nomeDoProjeto: "",
      projetos: [ ] as IProjeto[]
    }
  },
  methods: {
    salvarProjeto() {
      const projeto: IProjeto = {
        nome: this.nomeDoProjeto,
        id: new Date().toISOString( )
      }
      this.projetos.push(projeto)
      this.nomeDoProjeto = ""
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
    <thead>
      <tr>
        <th>
          ID
        </th>
        <th>
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
  padding: 20px;
}
</style>