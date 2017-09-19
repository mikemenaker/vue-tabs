<template>
    <transition :name="slideType"  @after-leave="afterLeave">
        <div v-show="active" v-bind:class="{'active': active}">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                active: false,
                slideType: "slide-left"
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
        created() {
            this.active = this.isActive;
        },
        mounted() {
            this.$parent.addTab(this);
        },
        methods: {
            afterLeave() {
                this.$parent.activateTab();
            }
        }
    }
</script>

<style>
</style>