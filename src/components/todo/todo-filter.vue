<template>
  <p>
    <label for="all">
      <input
        value="-1"
        v-bind:checked="activeFilter==-1"
        v-on:change="changeFilter"
        id="all"
        type="radio"
        name="todoFilter"
      />
      <span>all</span>
    </label>
    <label for="toggled">
      <input type="radio"
        value="true"
        v-bind:checked="activeFilter==true"
        v-on:change="changeFilter"
        id="toggled"
        name="todoFilter"
      />
      <span>toggled</span>
    </label>
    <label for="untoggled">
      <input
        value="false"
        v-bind:checked="activeFilter==false"
        v-on:change="changeFilter"
        id="untoggled"
        name="todoFilter"
        type="radio"
      />
      <span>untoggled</span>
    </label>
  </p>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    vuex: {
      getters: {
        activeFilter: function (state) {
          return state.todos.activeFilter;
        }
      },
      actions: {
        changeFilter: function ({ dispatch }, e) {
          dispatch('CHANGE_FILTER', {
            activeFilter: JSON.parse(e.target.value),
          });
        }
      }
    }
  });
</script>

<style lang="less">
  label {
    cursor: pointer;
  }
  input[type="radio"] {
    visibility: hidden;
    position: absolute;
    
    & + span {
      display: inline-block;
      padding: 3px 10px;
      transition: background 150ms;
    }
    
    &:checked + span {
      background: black;
      color: white;
    }
  }
</style>