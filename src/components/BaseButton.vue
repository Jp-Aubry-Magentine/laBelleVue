
<script>
export default {
  name: 'BaseButton',
}
</script>

<template>
  <!-- This v-on="$listeners" is a way
  to assign events to an element in a component.
  Without it, Vue does not know where to listen
  for the events. -->
  <b-button v-on="$listeners">
    Ajouter <b-icon-cart2/>
  </b-button>
</template>

<style></style>