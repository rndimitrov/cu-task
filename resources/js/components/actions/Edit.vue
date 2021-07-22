<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3 class="text-center">UPDATE post-it note</h3>
                <div class="d-flex justify-content-center card-body">
                        <form @submit.prevent="updateNote">
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
                            <button type="submit" class="btn btn-primary">Update</button>
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
        mounted() {
            this.axios.get(`/api/notes/${this.$route.params.id}`)
                .then((response) => {
                    this.note = response.data;
                });
        },
        methods: {
            updateNote() {
                this.axios.patch(`/api/notes/${this.$route.params.id}`, this.note)
                    .then((response) => {
                        this.$router.push({ name: 'notes' });
                    });
            }
        }
    }
</script>