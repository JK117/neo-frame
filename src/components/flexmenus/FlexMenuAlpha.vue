<script setup lang="ts">
import { ref } from 'vue'
const activated_option = ref(0)
const menu_options = ref([
    {name: 'Home',icon: 'House', color: '#f44336'},
    {name: 'About',icon: 'User',  color: '#ffa117'},
    {name: 'Messages',icon: 'Message',  color: '#0fc70f'},
    {name: 'Photos',icon: 'Picture',  color: '#2196f3'},
    {name: 'Settings',icon: 'Setting',  color: '#b145e9'},
])

function toggleMenu() {
    const menu_box = document.querySelector('.menu-box')
    menu_box?.classList.toggle('open')
}
function activateOption(i:number) {
    activated_option.value = i
}
</script>

<template>
    <div class="menu-box">
        <div class="menu-toggle-box" @click="toggleMenu">
        </div>
        <ul>
            <li
                v-for="(option,i) in menu_options"
                :key="i"
                :class="['list', activated_option===i?'active':'']"
                :style="{'--clr':option.color}"
                @click="activateOption(i)"
            >
                <a href="#">
                    <span class="icon">
                        <el-icon><component :is="option.icon" /></el-icon>
                    </span>
                    <span class="text">{{option.name}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.menu-box {
    position: relative;
    // inset: 20px 0 20px 20px;
    width: 60px;
    // height: calc(100% - 4rem);
    height: 500px;
    margin: 2rem;
    background-color: #CDD0D6;
    border-radius: 8px;
    transition: 0.25s;
    display: flex;
    justify-content: center;
    align-items: center;

    .menu-toggle-box {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% - 2rem);
        height: 60px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        &::before {
            content: '';
            position: absolute;
            width: 30px;
            height: 3px;
            background: rgba(50, 50, 50, 0.5);
            transform: translateY(-8px);
            transition: 0.25s;
        }
        &::after {
            content: '';
            position: absolute;
            width: 30px;
            height: 3px;
            background: rgba(50, 50, 50, 0.5);
            transform: translateY(8px);
            transition: 0.25s;
            box-shadow: 0 -8px 0 rgba(50, 50, 50, 0.5);
        }
    }

    &.open {
        width: 200px;
        .menu-toggle-box {
            &::before {
                transform: translateY(0px) rotate(45deg);
                height: 2px;
                background: rgba(50, 50, 50, 1);
            }
            &::after {
                transform: translateY(0px) rotate(-45deg);
                height: 2px;
                background: rgba(50, 50, 50, 1);
                box-shadow: none;
            }
        }
        ul li a .text {
            opacity: 1;
            visibility: visible;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        padding-left: 0;
        li {
            list-style: none;
            position: relative;
            width: calc(100% - 2rem);
            height: calc(100% - 2rem);
            padding: 0 0.5rem;
            transition: 0.25s;
            a {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 100%;
                text-align: center;
                text-decoration: none;
                .icon {
                    position: relative;
                    display: block;
                    min-width: calc(60px - 1rem);
                    height: calc(60px - 1rem);
                    line-height: 52px;
                    transition: 0.25s;
                    color: #222;
                    border-radius: 8px;
                    &::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: var(--clr);
                        filter: blur(4px);
                        opacity: 0;
                        transition: 0.25s;
                    }
                }
                .text {
                    position: relative;
                    padding: 0 1rem;
                    height: calc(60px - 1rem);
                    display: flex;
                    align-items: center;
                    color: white;
                    opacity: 0;
                    visibility: hidden;
                    transition: 0.25s;
                }
            }
            &.active {
                a {
                    .icon {
                        color: #fff;
                        background: var(--clr);
                        &::before {
                            opacity: 0.5;
                        }
                    }
                    .text {
                        color: var(--clr);
                    }
                }
            }
        }
    }
}
</style>