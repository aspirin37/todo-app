<template>
  <div>
    <h1>Axios list</h1>
    <v-card
      class="container"
      color="rgb(242, 237, 237)"
    >
      <div class="wrap">
        <h2>Bitcoin Price Index</h2>
        <section v-if="errored">
          <p>
            We're sorry, we're not able to retrieve this
            information at the moment, please try back later
          </p>
        </section>

        <section v-else>
          <div v-if="loading">
            Loading...
          </div>

          <div
            v-for="currency in info"
            v-else
            :key="currency"
            class="currency"
          >
            {{ currency.description }}:
            <span class="font-weight-light">
              <span>{{ currency.code }} </span>
              {{ currency.rate_float | currencydecimal }}
            </span>
          </div>
        </section>
      </div>

      <div class="wrap">
        <h2>Date now</h2>
        <div>{{ dateEn }}</div>
        <div>{{ dateRu }}</div>
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AxiosList',

  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },

  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      dateEn: this.$moment().locale('en').format('LLLL'),
      dateRu: this.$moment().locale('ru').format('LLLL'),

    };
  },

  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => {
        this.info = response.data.bpi;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => { (this.loading = false); });
  },

};
</script>

<style scoped>
h1 {
  text-align: center;
}
.container {
  display: flex;
  justify-content: space-around;
}

.wrap {
  font-weight: bold;
}

</style>
