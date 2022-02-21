<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <h1>Hello Vue</h1>
  <input type="text" ref="behlulref" :value="title" />
  <button @click="handleClick">Click me</button>
  <teleport to=".modals" v-if="showModalProps">
    <Modal
      :header="header"
      :text="text"
      theme="sale"
      @close="toggleModalProps"
    />
  </teleport>
  <teleport to=".modals" v-if="showModalSlots">
    <ModalSlot theme="sale" @close="toggleModalSlots">
      <template v-slot:links>
        <a href="https://www.google.com">Google</a>
      </template>
      <h1>Slot Modal Header</h1>
      <p>Slot Modal Text</p>
    </ModalSlot>
  </teleport>
  <br />
  <br />
  <button @click="toggleModalProps">Open Modal "Props"</button>
  <button @click="toggleModalSlots">Open Modal "Slots"</button>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';
  import Modal from './components/Modal.vue';
  import ModalSlot from './components/ModalSlot.vue';

  export default {
    name: 'App',
    components: {
      HelloWorld,
      Modal,
      ModalSlot,
    },
    data() {
      return {
        title: 'selam',
        header: 'Modal Header Prop',
        text: 'Modal text prop',
        showModalProps: false,
        showModalSlots: false,
      };
    },
    methods: {
      handleClick() {
        console.log(this.$refs.behlulref);
        this.$refs.behlulref.classList.add('active');
        this.$refs.behlulref.focus();
      },
      toggleModalProps() {
        this.showModalProps = !this.showModalProps;
      },
      toggleModalSlots() {
        this.showModalSlots = !this.showModalSlots;
      },
    },
  };
</script>

<style>
  #app,
  .modals {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
