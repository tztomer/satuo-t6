<template>
  <section class="filter">

    <el-input
      @input="setFilter"
      v-model="filterBy.txt"
      placeholder="Search by toy name..."
      clearable
    />

    <div>
      <el-select
        @change="setFilter"
        v-model="filterBy.byLabel"
        multiple
        collapse-tags
        collapse-tags-tooltip
        placeholder="Select label"
      >
        <el-option
          v-for="(label, idx) in labels"
          :value="label"
          :key="idx"
          :label="label"
        />
      </el-select>
    </div>

    <el-select
      @change="setFilter"
      v-model="filterBy.status"
      clearable
      placeholder="Select status"
    >
    <el-option value="" label="Select status" />
      <el-option
        v-for="(opt, idx) in stockOptions"
        :value="opt"
        :key="idx"
        :label="opt"
        
      />
    </el-select>

    <el-select
      @change="setFilter"
      v-model="filterBy.bySort"
      clearable
      placeholder="Select sort"
    >
    <el-option value="" label="Select sort" />
      <el-option
        v-for="(opt, idx) in sortOptions"
        :value="opt"
        :key="idx"
        :label="opt"
        
      />
    </el-select>

  </section>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {
      filterBy: {
        txt: "",
        status: "",
        byLabel: [],
        bySort: "",
      },
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
      stockOptions: ["In stock", "Out of stock"],
      sortOptions: [
        "Name - Increasing",
        "Price - Increasing",
        "Created - Increasing",
        "Name - Decreasing",
        "Price - Decreasing",
        "Created - Decreasing",
      ],
    };
  },
  methods: {
    setFilter() {
      if (this.filterBy.byLabel[0] === "") this.filterBy.byLabel = [];
      console.log(this.filterBy.byLabel);
      this.$emit("setFilter", this.filterBy);
    },
  },
  computed: {},
  created() {},
};
</script>
