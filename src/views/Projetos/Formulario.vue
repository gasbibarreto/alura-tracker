<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store';
import { ADICIONA_PROJETO, ALTERA_PROJETO } from '@/store/tipo-mutacoes';

export default defineComponent({
  name: 'Formulario',
  props: {
    id: { type: String }
  },
  data( ) {
    return {
      nomeDoProjeto: "",
    }
  },
  mounted() {
    if(this.id) {
      const projeto = this.store.state.projetos.find( proj => proj.id == this.id )
      this.nomeDoProjeto = projeto?.nome || ''
    }
  },
  methods: {
    salvar() {
      if(this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto
        })
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
      }
      this.nomeDoProjeto = ""
      this.$router.push('/projetos')
    }
  },
  setup() {
    const store = useStore()
    return {
      store
    }
  }
})
</script>

<template>
  <section class="projetos">
    <div class="title">
    <h1>Projetos</h1>
    <form @submit.prevent="salvar">
        <div class="field">
          <label form="nomeDoProjeto" class="label">Nome do projeto</label>
          <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto" />
        </div>
        <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
    </div>
  </section>
</template>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>