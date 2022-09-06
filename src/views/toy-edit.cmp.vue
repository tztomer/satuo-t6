<template>
  <section class="toy-editor" v-if="toy">
    <form @submit.prevent="saveToy">

      <label for="toy-name">Name: </label>
      <el-input
      v-model="toy.name"
      placeholder="Enter toy name..."
      clearable
      size="large"
      id="toy-name"
    />
      <label for="toy-price">Price: </label>
      <el-input
      v-model="toy.price"
      placeholder="Enter toy price..."
      clearable
      size="large"
      id="toy-price"
    />

      <div>
        <h2>Toy labels: </h2>
      <el-select
        v-model="toy.labels"
        multiple
        placeholder="Select labels"
      >
        <el-option
          v-for="(label, idx) in labels"
          :value="label"
          :key="idx"
          :label="label"
        />
      </el-select>
    </div>

      <el-switch
        size="large"
        active-text="In stock"
        inactive-text="Out of stock"
        v-model="toy.inStock"
      />

      <button>{{ toy._id ? "Save" : "Add" }}</button>

      <router-link to="/toy">Back</router-link>
    </form>
  </section>
</template>
<script>
import { toyService } from "../services/toy-service.js";

export default {
  props: [],
  template: ``,
  components: {},
  data() {
    return {
      toy: null,
      labels: [
        "On wheels",
        "Box game",
        "Art",
        "Baby",
        "Doll",
        "Puzzle",
        "Outdoor",
        "Battery powered",
      ],
    };
  },
  methods: {
    saveToy() {
      this.$store
        .dispatch({ type: "saveToy", toy: { ...this.toy } })
        .then((toy) => {
          this.$router.push("/toy");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {},
  created() {
    const { toyId } = this.$route.params;
    if (toyId) {
      toyService.getById(toyId).then((currToy) => {
        this.toy = JSON.parse(JSON.stringify(currToy));
      });
    } else {
      this.toy = toyService.getEmptyToy();
    }
  },
  unmounted() {},
};
</script>
