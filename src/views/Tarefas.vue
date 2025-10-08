<template>
      <div class="column is-three-quarter">
        <Formulario @aoSalvarTarefa="salvarTarefa"/>
        <div class="lista">
          <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
          <Box v-if="listaEstaVazia">
            Você não está muito produtivo hoje :(
          </Box>
        </div>
      </div>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent } from 'vue';
  import Formulario from '../components/Formulario.vue'
  import Tarefa from '../components/Tarefa.vue'
  import Box from '../components/Box.vue'
  import ITarefa from '../interfaces/ITarefa'
import { useStore } from '@/store';
  
  export default defineComponent({
    name: 'App',
    components: {
      Formulario,
      Tarefa,
      Box
    },
    data () {
      return {
        modoEscuroAtivo: false
      }
    },
    computed: {
      listaEstaVazia () : boolean {
        return this.tarefas.length === 0
      }
    },
    methods: {
      salvarTarefa (tarefa: ITarefa) {
        this.store.commit('ADICIONA_TAREFA', {
          duracaoEmSegundos: tarefa.duracaoEmSegundos,
          descricaoDaTarefa: tarefa.descricao,
          projeto: tarefa.projeto
        })
      },
      trocarTema (modoEscuroAtivo: boolean) {
        this.modoEscuroAtivo = modoEscuroAtivo
      }
    },
    setup() { 
      const store = useStore()
      return {
        tarefas: computed(() => store.state.tarefas),
        store
      }
    }
  });
  </script>
  
  <style>
  .lista {
    padding: 1.25rem;
  }
  </style>
