import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ADICIONA_TAREFA, ALTERA_PROJETO, EXCLUIR_PROJETO, NOTIFICAR } from "./tipo-mutacoes";
import { INotificacao } from "@/interfaces/INotificacao";
import ITarefa from "@/interfaces/ITarefa";

interface Estado {
    projetos: IProjeto[],
    tarefas: ITarefa[],
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [] as IProjeto[],
        tarefas: [] as ITarefa[],
        notificacoes: []
    },
    mutations: {
        [ADICIONA_PROJETO] (state, nomeDoProjeto: string) {
            const projeto: IProjeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            }
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO] (state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [EXCLUIR_PROJETO] (state, id: string) {
            state.projetos = state.projetos.filter(proj => id != proj.id)
        },
        [NOTIFICAR] (state, notificacao: INotificacao) {
            notificacao.id = new Date().getTime()
            state.notificacoes.push(notificacao)

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(n => n.id != notificacao.id)
            }, 3000);
        },
        [ADICIONA_TAREFA] (state, payload: { duracaoEmSegundos: number, descricaoDaTarefa: string, projeto: IProjeto }) {
            const tarefa: ITarefa = {
                  duracaoEmSegundos: payload.duracaoEmSegundos,
                  descricao: payload.descricaoDaTarefa,
                  projeto: payload.projeto
            }
            state.tarefas.push(tarefa)
        },
    }
})

export function useStore( ): Store<Estado> {
    return vuexUseStore(key)
}