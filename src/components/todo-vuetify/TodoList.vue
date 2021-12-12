!<template>
  <div>
    <v-btn @click="openAddModal">
      Добавить
    </v-btn>
    <div
      v-for="it in list"
      :key="it.id"
    >
      <v-row class="pa-4 pb-2 row">
        <v-checkbox
          v-model="it.checked"
        />
        <v-text-field
          v-model="it.text"
          class="no-bottom-line"
        />
        <button @click="openEditModal(it)">
          <v-icon color="red">
            mdi-pencil
          </v-icon>
        </button>
        <button
          @click="$emit('removeItem', it.id)"
        >
          <v-icon color="red">
            mdi-close
          </v-icon>
        </button>
      </v-row>
    </div>
    <v-dialog v-model="modalVisible">
      <v-card height="400">
        <v-card-title> {{ modalTitle }}</v-card-title>
        <v-card-text>
          <v-text-field v-model="item.text" />
          <v-checkbox v-model="item.checked" />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="submit">
            {{ submitButtonText }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    list: Array,
  },
  data() {
    return {
      modalVisible: false,
      isEdit: false,
      item: {
        text: '',
        checked: false,
      },
    };
  },
  computed: {
    modalTitle() {
      return this.isEdit ? 'Редактирование' : 'Добавление';
    },
    submitButtonText() {
      return this.isEdit ? 'Редактировать' : 'Добавить';
    },
  },
  methods: {
    openEditModal(it) {
      this.modalVisible = true;
      this.isEdit = true;
      this.item = JSON.parse(JSON.stringify(it));
    },
    openAddModal() {
      this.modalVisible = true;
      this.isEdit = false;
      this.item = {
        text: '',
        checked: false,
      };
    },
    submit() {
      this.modalVisible = false;
      this.$emit(this.isEdit ? 'editItem' : 'addItem', this.item);
    },
  },
};
</script>

<style>
.row {
  border-bottom: 1px solid rgb(130, 130, 130);
}

.no-bottom-line .v-text-field__details {
  display: none;
}
.no-bottom-line .v-input__slot::before {
  display: none;
}
.no-bottom-line .v-input__slot::after {
  display: none;
}
</style>
