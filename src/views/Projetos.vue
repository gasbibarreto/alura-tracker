<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store';

export default defineComponent({
  name: 'Projetos',
  methods: {
  },
  setup() {
    const store = useStore()
    return {
      projetos: computed(() => store.state.projetos) 
    }
  }
})
</script>

<template>
  <section class="projetos">
    <div class="title">
    <h1>Projetos</h1>
    <router-link to="/projetos/novo">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      Novo projeto
    </router-link>
  <table class="table is-fullwidth">
    <thead class="thead">
      <tr class="tr has-background-light">
        <th class="th is-narrow">
          ID
        </th>
        <th class="th is-narrow"> 
          Nome
        </th>
        <th class="th is-narrow"> 
          Ações
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="projeto in projetos" :key="projeto.id">
        <td>{{ projeto.id }}</td>
        <td>{{ projeto.nome }}</td>
        <td>
          <router-link :to="`/projetos/${projeto.id}`" class="button">
            <span class="icon is-small">
              <i class="fas fa-pencil-alt"></i>
            </span>
          </router-link>
        </td>
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