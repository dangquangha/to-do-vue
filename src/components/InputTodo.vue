<template>
  <div class="todo-input">
    <form action="" @submit="onSubmit">
      <input type="text" name="todo" placeholder="What needs to be done?" v-model="title" autocomplete="off">
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: 'InputTodo',
    data() {
      return {
        title: ""
      }
    },
    methods: {
      ...mapActions(['addTodo']),
      onSubmit(event) {
        event.preventDefault();
        if (this.title != "") {
          this.addTodo(this.title);
          this.title = ""
        }
      },
    }
}
</script>

<style>
  form {
    height: 40px;
  }

  .todo-input {
    padding: 0.5rem;
    border: 1px solid #e6e6e6;
    height: 100%;
  }

  .todo-input input{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 22px;
  }

  .todo-input input::placeholder {
    color: #E6E7ED;
    font-style: italic;
  }
</style>