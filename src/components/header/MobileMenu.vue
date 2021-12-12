!<template>
  <v-row justify="center">
    <v-btn
      color="primary"
      @click="dialog = true"
    >
      Каталог
    </v-btn>
    <v-dialog
      v-model="dialog"
      fullscreen
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-toolbar-title>Каталог</v-toolbar-title>
          <v-spacer />
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-treeview
          :items="catalogItems"
          item-children="submenu"
        >
          <template v-slot:label="{ item }">
            <a
              :href="item.url"
              target="_blank"
            >
              {{ item.name }}
            </a>
          </template>
        </v-treeview>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import catalog from '@/utils/catalog.json';

export default {
  name: 'MobileMenu',
  data() {
    return {
      dialog: false,
      catalog,
    };
  },
  computed: {
    catalogItems() {
      const linkify = (arr, url) => arr.map((it) => {
        if (!url) {
          it.url = `/catalog/${it.slug}/`;
        } else {
          it.url = `${url}${it.slug}/`;
        }

        if (it.submenu) {
          it.submenu = linkify(it.submenu, it.url);
        }
        return it;
      });
      return linkify(this.catalog);
    },
  },
};
</script>

<style lang="scss">
.v-application .v-treeview-node__label a {
  color: inherit;
  text-decoration: none;
}
</style>
