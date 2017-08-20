<template>
    <div>
        <div v-show="active" :class="{'active': active}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: false
            };
        },
        props: {
            'title': {
                required: true,
                type: String
            },
            'isActive': {
                required: false,
                type: Boolean,
                default: false
            }
        },
        created: function () {
            this.active = this.isActive;
        },
        mounted: function () {
            this.$parent.addTab(this);
        }
    }
</script>

<style>
</style>