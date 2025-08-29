<template>
  <transition name="modal-fade">
    <div v-if="value" class="modal-root">
      <div class="modal-box">
        <h3>Add Topic</h3>
        <button class="modal-close" @click="close" aria-label="Close">×</button>
        <div class="modal-body">
          <div class="input-wrapper mb-3">
            <label class="input-label">Topic Name</label>
            <b-form-input
              type="text"
              class="form-control"
              v-model="text"
              @blur="$v.text.$touch()"
            ></b-form-input>
            <div v-if="$v.text.$error">
              <span v-if="!$v.text.required" class="text-danger"
                >Title is required.</span
              >
            </div>
          </div>

          <div class="input-wrapper mb-3">
            <label class="input-label">Description</label>
            <b-form-textarea
              class="form-control"
              rows="3"
              v-model="desc"
              @blur="$v.desc.$touch()"
            ></b-form-textarea>
            <div v-if="$v.desc.$error">
              <span v-if="!$v.desc.required" class="text-danger"
                >Description is required.</span
              >
            </div>
          </div>
          <div>
            <b-form-group label="Public Availability" label-cols="4">
              <div class="d-flex align-items-center gap-5">
                <b-form-radio v-model="selected" value="Yes" class="pr-2"
                  >Yes</b-form-radio
                >
                <b-form-radio v-model="selected" value="No" class="pr-2"
                  >No</b-form-radio
                >
              </div>
              <div v-if="$v.selected.$error">
                <span v-if="!$v.selected.required" class="text-danger"
                  >Please select one</span
                >
              </div>
            </b-form-group>
          </div>

          <div  class="d-flex justify-content-end">
          <b-button @click="saveTopic">Save</b-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      text: "",
      desc: "",
      selected: "",
    };
  },
  validations() {
    return {
      text: { required },
      desc: { required },
      selected: { required },
    };
  },
  methods: {
    close() {
      this.$emit("input", false);
    },

    saveTopic() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        alert("Please fill in all required fields.");
        return;
      }
      console.log("trying to save ");
      this.$store.dispatch("addTopic", {
        name: this.text,
        description: this.desc,
        public: this.selected,
      });

      this.text = "";
      this.desc = "";
      this.selected = "";

      this.close();
    },
  },
};
</script>

<style scoped>
.modal-root {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: transparent;
  pointer-events: none;
  z-index: 1050;
}

.modal-box {
  pointer-events: auto;
  position: relative;
  background: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  width: min(100vw, 1200px);
  padding: 1.25rem 1.5rem;
}

.modal-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: transparent;
  border: 0;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
}
.input-wrapper {
  position: relative;
  margin-top: 1.5rem;
}

.input-label {
  position: absolute;
  top: -0.7rem;
  left: 0.75rem;
  background: #fff;
  padding: 0 0.25rem;
  font-size: 0.9rem;
  color: #6c757d;
}

.input-wrapper .form-control {
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
}

.modal-body {
  padding-top: 0.75rem;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
</style>
