import Notes from "./components/Notes.vue";
import CreateNote from "./components/actions/Create.vue";
import EditNote from "./components/actions/Edit.vue";
import DeletedNotes from "./components/Deleted.vue";

export const routes = [
    {
        name: "notes",
        path: "/",
        component: Notes
    },
    {
        name: "create",
        path: "/create",
        component: CreateNote
    },
    {
        name: "edit",
        path: "/edit/:id",
        component: EditNote
    },
    {
        name: "deleted",
        path: "/deleted",
        component: DeletedNotes
    },
]