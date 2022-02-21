<template>
  <div class="backdropslot" @click.self="closeModal">
    <div class="modalslot" :class="{ sale: theme === 'sale' }">
      <slot>default content</slot>
      <!--To see "default content", remove the content in app.vue line 20-21 -->
      <div class="actions">
        <slot name="links"></slot>
      </div>
      <button @click="closeModal">Close Modal</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['theme'],
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .modalslot {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
  }
  .backdropslot {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }
  h1 {
    color: green;
  }
  .modalslot .actions {
    text-align: center;
    margin: 30px 0 10px 0;
  }
  .modalslot .actions a {
    color: white;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }

  .modalslot.sale {
    background: blueviolet;
    color: white;
  }
  .modalslot.sale h1 {
    color: white;
  }
</style>
