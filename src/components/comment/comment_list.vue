<template>
    <div class='clist'>
           <comment v-for='c in comments'
               :comment='c'
               :key='c.id'
               @shanchuwo='doDelete'>
           </comment>
       </div>
</template>


<script>
import commentItem from './comment_item.vue';
export default {
    props: ['comments'],
    methods: {
        doDelete(id) {
            this.$emit('shanchuwo', id);
        }
    },
    components: {
        comment: commentItem
    }
};

</script>

