<template>
  <div class="todo-footer">
    {{ todosLeft.length }} {{ todosLeft.length == 1 ? 'item' : 'items' }} left
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
    name: "Footer",
    computed: {
        ...mapGetters(['todosLeft']),
    }
}
</script>

<style>
.todo-footer {
  padding: 0.5rem;
  color: #777;
  font-size: 14px;
  border: 1px solid #e6e6e6;
}
</style>