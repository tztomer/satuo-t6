<template>
  <section class="toy-preview" v-if="toy">
    <div class="toy-details">
      <h2 class="toy-name">Name: {{ toy.name }}</h2>
      <p class="toy-price">Price: {{ toy.price }}$</p>
      <div class="toy-labels">
        Labels:
        <p v-for="(label, idx) in toy.labels" :key="idx">
          {{ label }}
        </p>
      </div>
      <p class="toy-creation">CreatedAt: {{timeFormat}}</p>
    </div>
    <div class="actions">
      <router-link :to="'/toy/' + toy._id">Details</router-link>
      <router-link :to="'/toy/edit/' + toy._id">Edit</router-link>
    </div>
  </section>
</template>
<script>
import moment from 'moment'

export default {
  props: {
    toy: Object,
  },
  data() {
    return {};
  },
  methods: {
    
  },
  computed: {
    timeFormat() {
            if (this.toy._id) return moment(this.toy.createdAt).fromNow()
            else return 'Your are doing it ;)'
        }
  },
  created() {},
  unmounted() {},
};
</script>
