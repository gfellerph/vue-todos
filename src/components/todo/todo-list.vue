<template>
  <ul>
    <li v-for="todo in filteredTodos">
      <todo-item v-bind:todo="todo"></todo-item>
    </li>
  </ul>
</template>

<script>
  import Vue from 'vue';
  import todoItem from './todo-item';

  export default Vue.extend({
    props: {
      todos: Array,
    },
    components: {
      todoItem
    },
    computed: {
      filteredTodos: function () {
        return this.todos/*.filter(todo => this.activeFilter === -1 || todo.toggled == this.activeFilter)*/;
      }
    }
  });
</script>

<style lang="less">
  li {
    
    span {
      padding: 5px 15px;
      display: block;
      cursor: pointer;
    }
  }
</style>