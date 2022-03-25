<template>
  <div class="todo-header">
    <h1>todos</h1>
  </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>
    .todo-header {
        width: 100%;
        text-align: center;
        margin-bottom: 1rem;
    }

    h1 {
        font-size: 100px;
        font-weight: 100;
        text-align: center;
        color: rgba(175, 47, 47, 0.15);
    }
</style>