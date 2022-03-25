import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

const storeData = {
    state: {
        todos: [],
        loading: true
    },
    actions: {
        toggleStatus({ commit }, id) {
            commit('TOGGLE_STATUS', id);
        },
        addTodo({ commit }, title) {
            commit('ADD_TODO', title);
        },
        deleteTodo({ commit }, id) {
            commit('DELETE_TODO', id);
        },
        async setTodo({ commit }) {
            try {
                var url = "https://jsonplaceholder.typicode.com/todos?_limit=3";
                const response = await axios.get(url);
                commit('SET_TODOS', response.data);
            } catch (error) {
                console.log(error);
            }
            
            
        }
    },
    getters: {
        todosLeft: (state) => {
            return state.todos.filter(item => !item.completed);
        }
    },
    mutations: {
        TOGGLE_STATUS(state, id) {
            var todos = state.todos;
            var index = todos.findIndex(item => item.id == id);
            todos[index].completed = !todos[index].completed;
        },
        ADD_TODO(state, title) {
            var item = {
                "id": Math.random() * (1000 - 3) + 3,
                title,
                'completed': false
            };
            state.todos.unshift(item);
        },
        DELETE_TODO(state, id) {
            var todos = state.todos;
            var index = todos.findIndex(item => item.id == id);
            if (index !== -1) todos.splice(index, 1);
        },
        SET_TODOS(state, todos) {
            state.todos = todos;
            state.loading = false;
        }
    }
}

const store = new Vuex.Store(storeData);

export default store

