<template>
    <header>
        <h1>Building the Stack</h1>
        <nav>
            <ul>
                <li><router-link to="/">Stack Training</router-link></li>
                <li><router-link to="/review">The Stack</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                message: 'HEADER'
            }
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 200px;
        border-bottom: solid 1px rgb(230, 230, 230);
    }

    header h1 {
        font-size: 3.8rem;
        color: rgb(61, 61, 61);
    }
    nav {
        width: 100%;
    }
    nav ul {
        display: flex;
        justify-content: space-evenly;
        margin: 0;
        padding: 0;
    }

    nav ul li {
        list-style: none;
    }

    nav ul li a {
        text-decoration: none;
        font-size: 2rem;
        font-weight: bold;
        color: rgb(61, 61, 61);
    }

    nav ul li a.router-link-active {
        color: pink
    }
</style>