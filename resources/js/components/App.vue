<template>
    <div class="container"> 
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-item nav-link float-left">ALL NOTES</router-link>
                    <router-link to="/deleted" class="nav-item nav-link float-left">DELETED NOTES</router-link>
                </div>
            </div>
        </nav>

        <router-view> </router-view>
    </div>
</template>
 
<script>
    export default {}
</script>