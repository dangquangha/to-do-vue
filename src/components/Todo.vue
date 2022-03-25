<template>
  <div class="todo-list">
      <ul v-if="!loading">
        <li class="todo-item" v-for="item in todos" :key="item.id">
          <div class="item-checkbox" @click="toggleStatus(item.id)">
            <div class="item-checkicon" v-show="item.completed"></div>
          </div>
          <div style="max-width: calc(100% - 50px);">
            <p class="item-title" :class="item.completed ? 'item-completed' : ''">{{ item.title }}</p>
          </div>
          <div class="item-delete" @click="deleteTodo(item.id)">X</div>
        </li>
      </ul>
      <div v-else class="todo-loading">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex"

export default {
  name: 'Todo',
  computed: {
    ...mapState(['todos', 'loading']),
  },
  methods: {
      ...mapActions(['toggleStatus', 'deleteTodo', 'setTodo']),
  },
  created() {
    this.setTodo()
  }
}
</script>

<style>
.todo-list ul {
  list-style: none;
}

.todo-item {
  border: 1px solid #e6e6e6;
  height: 40px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 22px;
  position: relative;
}

.todo-item .item-checkbox {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 1rem;
  border: 1px solid #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.todo-item .item-checkicon {
  border-right: 3px solid #7de28a;
  border-bottom: 3px solid #7de28a;
  width: 0.5rem;
  height: 1rem;
  transform: rotate(45deg);
  margin-bottom: 5px;
}

.todo-item .item-title {
  word-break: break-word;
}

.todo-item .item-completed {
  text-decoration: line-through;
  color: #E6E7ED;
}

.todo-item .item-delete {
    position: absolute;
    right: 1rem;
    font-weight: 600;
    color: #F3E0E0;
    text-transform: lowercase;
    font-size: 24px;
    cursor: pointer;
    padding: 5px;
    display: none;
}

.todo-item:hover .item-delete {
  display: block;
}

.todo-item .item-delete:hover {
    color: #f5a0a0;
}

.todo-loading {
  width: 100%;
  display: flex;
  justify-content: center;
}

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: rgba(175, 47, 47, 0.15);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
