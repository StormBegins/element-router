<template>
    <div>
        <div>哈哈哈ss</div>
        <cinput @woyaobaocun="zhendeyaobaocuna"></cinput>
        <clist @shanchuwo="zhendeyaoshanchu" v-bind:comments="comments"></clist>
    </div>
</template>

<script>
 import commentInput from './comment-input';
 import commentList from './comment-list';

 export default {
     data() { return {
         comments: []
     }},
     methods: {
         updateLocal() {
             localStorage.setItem('vvv-comments', JSON.stringify(this.comments));
         },
         zhendeyaobaocuna(res) {
             this.comments.push(res);
             this.updateLocal();
         },
         zhendeyaoshanchu(id) {
             this.comments = this.comments.filter((c) => c.id != id);
             this.updateLocal();
         }
     },
     components: {
         cinput: commentInput,
         clist: commentList
     },
     created() {
         const cs = localStorage.getItem('vvv-comments');
         if (cs) {
             this.comments = JSON.parse(cs);
         }
     }
 }
</script>

<style>
 #app {
     width: 400px;
     padding: 2em;
     margin: 2em auto;
     border: 1px solid #e0e0e0;
     border-radius: 1em;
 }
 .cinput {
     margin-bottom: 1em;
 }
 label {
     display: flex;
     margin: 1em 0;
 }
 label span {
     flex-basis: 100px;
 }
 input, textarea {
     flex: 1;
 }
 .cinput footer {
     text-align: right;
 }
 .cinput button {
     border: none;
     background-color: red;
     padding: .4em 1em;
     color: white;
     font-size: 16px;
     border-radius: 3px;
     box-shadow: 1px 1px 1px #e0e0e0;
 }


 .comment {
     padding: 1em;
     border-bottom: 1px solid #f0f0f0;
     display: flex;
 }
 .comment-author {
     color: steelblue;
     flex-basis: 80px;
 }
 .comment-delete {
     margin-left: auto;
 }
</style>
