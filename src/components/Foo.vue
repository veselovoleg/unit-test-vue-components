<template>
  <div class="foo bar">
    <h1>
        {{ msg }}
    </h1>
    <button id="change-message" v-on:click="changeMessage">Change message</button>
	  <p>
        some text
      </p>
      <ul class="parent-ul">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  props: ['passedProp'],
  methods: {
    changeMessage() {
      this.msg = 'new message'
    }
  }
}
</script>