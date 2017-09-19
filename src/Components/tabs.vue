<template>
    <div>
        <div class="tabs">
            <ul vi="tabs.length > 1">
                <li v-for="tab in tabs" :class="{'active': current === tab}" @click="changeTab(tab)">
                    {{tab.title}}
                </li>
            </ul>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabs: [],
                current: null
            };
        },
        mounted() {
            if (this.current === null) {
                this.current = this.tabs[0];
                this.tabs[0].active = true;
            }
        },
        methods: {
            addTab(tab) {
                if (tab.active === true) {
                    this.current = tab;
                }

                this.tabs.push(tab);
            },
            changeTab(tab) {
                const slideType = this.getSlideType(tab);

                this.deactivateTab(slideType);
                this.setCurrent(tab, slideType);
            },
            deactivateTab(slideType) {
                this.current.slideType = slideType;
                this.current.active = false;
            },
            setCurrent(tab, slideType) {
                this.current = tab;
                this.current.slideType = slideType;
            },
            activateTab() {
                this.current.active = true;
            },
            getSlideType(tab) {
                const newTabIndex = this.tabs.indexOf(tab);
                const oldTabIndex = this.tabs.indexOf(this.current);
                return newTabIndex > oldTabIndex ? "slide-left" : "slide-right";
            }
        }
    }
</script>

<style>
    .tabs > ul {
        overflow: hidden;
        font: bold 10px Verdana, sans-serif;
        margin: 0;
        padding: 0;
        padding-bottom: 10px;
    }

    .tabs > ul li {
        float: left;
        list-style: none;
        background: #ddd;
        border: 1px solid #f5f7fa;
        color: #666;
        cursor: pointer;
        display: block;
        padding: 0 30px;
        text-decoration: none;
        border-top: 1px solid #ddd;
    }

    .tabs > ul li:hover {
        background: #eee;
        text-decoration: none;
    }

    .tabs > ul li.active {
        color: #333;
        background: #f5f7fa;
    }

    .slide-left-leave-active,
    .slide-left-enter-active,
    .slide-right-leave-active,
    .slide-right-enter-active {
        transition: .5s;
    }

    .slide-left-enter {
        transform: translate(20%, 0);
    }

    .slide-left-leave-to {
        transform: translate(-20%, 0);
    }

    .slide-right-enter {
        transform: translate(-20%, 0);
    }

    .slide-right-leave-to {
        transform: translate(20%, 0);
    }

</style>