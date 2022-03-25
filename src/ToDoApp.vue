<template>
  <div id="todo-app">
    <Header/>
    <div style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
      <InputTodo/>
      <Todo/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import InputTodo from './components/InputTodo.vue';
import Todo from './components/Todo.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'ToDoApp',
  components: {
    Header,
    InputTodo,
    Todo,
    Footer
  }
}
</script>

<style>
#todo-app {
    margin: 0 auto;
    max-width: 500px;
}
</style>
