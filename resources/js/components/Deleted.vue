<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h2 class="float-left">All DELETED post-it notes</h2>
                    <router-link to="/create" type="button" class="btn btn-primary float-right">Create Product</router-link>
                </div>
                <div v-if="(notes.length > 0)" class="row">
                    <div v-for="(notes, key) in notes" :key="key" class="col-4">
                        <div class="card-body">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title">{{ notes.title }}</h5>
                                    <h6 class="card-subtitle text-muted">Created by: {{ notes.created_by }}</h6>
                                </div>

                                <div class="card-body">
                                    <p class="card-text">{{ notes.description }}</p>
                                    <router-link :to="{name: 'edit', params:{id: notes.id}}" type="button" class="btn btn-success">Edit</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h2> No deleted notes currently available.</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "notes",
    data() {
        return {
            notes: []
        }
    },
    mounted(){
        this.getNotes()
    },
    methods:{
        getNotes() {
            this.axios.get("/api/notes/deleted").then(response => {
                this.notes = response.data
            })
        }
    }
}
</script>