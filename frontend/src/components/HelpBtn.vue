<template>
    <div>
        <b-badge pill class="helpBtn"><font-awesome-icon icon="question-circle" /></b-badge>
    </div>
</template>

<script>
export default {
  name: 'helpBtn',
  data () {
    return {
    }
  }
}
</script>

<style>
.helpBtn{
    background-color: transparent;
    border: none;
    max-width: 5vw;
}
.fa-question-circle{
    color: #4f9da6;
    font-size: 1.5em;
}
</style>