<template>
  <div>
    <add-todo></add-todo>
    <todo-filter v-bind:active-filter.sync="activeFilter"></todo-filter>
    <todo-list v-bind:active-filter="activeFilter"></todo-list>
  </div>
</template>

<script>
  import Vue from 'vue';
  import addTodo from './add-todo';
  import todoList from './todo-list';
  import todoFilter from './todo-filter';

  export default Vue.extend({
    data: function () {
      return {
        todos: [],
        activeFilter: true
      }
    },
    ready: function () {
      this.$on('ADD_TODO', (text) => {
        this.todos.push({
          text,
          toggled: false
        });
      });
    },
    components: {
      addTodo,
      todoList,
      todoFilter
    }
  });
</script>