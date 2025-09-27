<script>
import { defineComponent } from "vue";
export default defineComponent({
    name: 'Botao',
    props: {
        textoBotao: {
            type: String
        },
        classIcone: {
            type: String
        }
    },
    data () {
        return {

        }
    }
})

</script>
<template>
    <button class="button">
      <span class="icon">
        <i :class="['fas', classIcone]"></i>
      </span>
      <span>{{ textoBotao }}</span>
    </button>
</template>