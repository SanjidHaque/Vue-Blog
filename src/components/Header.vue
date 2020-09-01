<template>
    <div>
        <div class="row header" style="text-align: center; padding-top: 10px;">
            <div class="col-xl-12">
                <h1>Vue Blog</h1>
            </div>
        </div>

        <div id="nav">
            <router-link to="/">Posts</router-link>
            |
            <router-link to="/categories">Categories</router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
    #nav {
        padding: 20px;
        text-align: center;
        font-size: 20px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>

