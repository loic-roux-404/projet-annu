<template>
  <v-col class="js-transcripts-course-container"
         cols="12"
         :sm="sm"
  >
    <v-card class="mx-auto text-center" max-width="900">
      <v-card-title primary-title class="justify-center">
        {{ item.name }}
      </v-card-title>
      <v-card-text>
        {{ item.tags }}
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn flat small color="primary" outlined :href="`/admin/courses/${item._id}`">
          Consulter
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import api from "../services/api";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CourseItem",
  props: {
    sm: {
      type: Number,
      default: () => 4
    },
    item: {
      type: Object,
      default: () => ({
        _id: "",
        desc: "",
        tags: [],
        name: ""
      })
    }
  },
  data() {
    return {
      live: null,
      icon: "mdi-eye",
      content: "",
    };
  },
});
</script>

<style scoped>

.js-transcripts-course-edit-card {
  height: 100%;
  background-color: gainsboro;
}
.js-transcripts-course-container {
  height: 100%;
  position: relative;
  margin-top: 1rem;
}
.fc-black {
  color: black !important;
}
</style>
