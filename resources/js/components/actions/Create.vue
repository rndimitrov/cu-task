<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3 class="text-center">Create post-it note</h3>
                <div class="d-flex justify-content-center card-body">
                        <form @submit.prevent="createNote">
                            <div class="form-group">
                                <label>Title</label>
                                <input type="text" class="form-control form-control-lg" v-model="note.title" required>
                            </div>
                            <div class="form-group">
                                <label>Created by</label>
                                <input type="text" class="form-control form-control-lg" v-model="note.created_by" required>
                            </div>
                            <div class="form-group">
                                <label>Text</label>
                                <textarea type="text" rows="10" class="form-control form-control-lg" v-model="note.description" required />
                            </div>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </form>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                note: {}
            }
        },
        methods: {
            createNote() {
                let self = this;
                this.axios.post('/api/notes', this.note).then(response => {
                    self.$router.push({name: "notes"})
                })
            }
        }
    }
</script>