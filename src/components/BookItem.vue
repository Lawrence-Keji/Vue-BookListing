<template>
  <li>{{book.title}}:{{book.author}}</li>
</template>

<script>
export default {
    name: 'BookItem',
    
}
</script>

<style scoped>
li{
    display: block;
    margin: 0 10px;}
</style>
