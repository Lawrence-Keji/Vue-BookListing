<template>
<form v-on:submit.prevent class="" action="#" method="post">
    <input type="text" name="title" value="" placeholder="Book Title">
    <input type="text" name="author" value="" placeholder="Book Author">
    <button type="submit" name="button">Add Book</button>
</form>
</template>

<script>
export default {
    name: 'BookForm',
    props: ['books'],
    data: {
        bookTitle: '',
        bookAuthor: ''
    }
}
</script>

<style scoped>
li{
    display: block;
    margin: 0 10px;}
</style>
