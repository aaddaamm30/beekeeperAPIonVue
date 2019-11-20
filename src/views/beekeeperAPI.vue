<template>
    <div id="main_view">
      <div id="beekeeper_frm"></div>
      <b-container>
        <b-row>
          <b-col>
            <b-form-input v-model="get_rest" placeholder="GET">GET type query</b-form-input>
          </b-col>
          <b-col>
            <div>{{ url_get }}</div>
          </b-col>
          <b-col>
            <b-button v-on:click="api_GET_using_fetch(url_get)">TEST FETCH GET</b-button>
          </b-col>
          <b-col>
            <div>{{ get_output }}</div>
          </b-col>
        </b-row>
        <b-row>
          <b-form-input v-model="put_rest" placeholder="PUT">PUT type query</b-form-input>
          <div>{{ url_put }}</div>
          <b-button v-on:click="api_PUT_using_fetch(url_put)">TEST FETCH PUT</b-button>

          <div>{{ put_output }}</div>
        </b-row>
        <b-row>
          <b-form-input v-model="post_rest" placeholder="POST">POST type query</b-form-input>
          <div>{{ url_post }}</div>
          <b-button v-on:click="api_POST_using_fetch(url_post)">TEST FETCH POST</b-button>

          <div>{{ post_output }}</div>
        </b-row>
      </b-container>
    </div>
</template>


<!--<script type="text/javascript">

  /* * * CONFIGURATION * * */
  beekeeper_url = "https://cse-2019.us.beekeeper.io/";
  beekeeper_path = "";
  beekeeper_targetElement = "#beekeeper_frm";
  beekeeper_locale = "en"; // Optional

  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function() {
    var bkpr = document.createElement('script'); bkpr.type = 'text/javascript'; bkpr.async = true;
    bkpr.src = 'https://cse-2019.us.beekeeper.io/static/embed/build/embed.min.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bkpr);
  })();

</script>-->

<script>
export default {
  name: 'beekeeperAPI',
  component: {},
  data () {
    return {
      mySubdomain: 'cse-2019.us',
      get_rest: '',
      put_rest: '',
      post_rest: '',

      get_output: '',
      put_output: '',
      post_output: ''
    }
  },
  mounted () {
  },
  computed: {
    url_get: function () {
      return 'https://cse-2019.us.beekeeper.io/api/2/' + this.get_rest;
    },
    url_put: function () {
      return 'https://cse-2019.us.beekeeper.io/api/2/' + this.put_rest;
    },
    url_post: function () {
      return 'https://cse-2019.us.beekeeper.io/api/2/' + this.post_rest;
    }
  },
  methods: {
    api_GET_using_fetch: async function (url) {
      fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': 'Token ffc9906f-a83b-4e63-a7b4-af641881bece',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(response => {
        console.log('response text -> ', response);
        console.log(response.json());
        return response.text();
      }).then((data) => {
        console.log('data -> ', data);
        this.get_output = data ? JSON.parse(data) : {};
      });
      /*
        .then(response => response.json())
        .then(function (response) {
          this.get_output = response;
        }); */
      console.log('get at -> ', url);
    },
    api_GET_using_XMLHttpRequest: function (url) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (!(this.readyState === 4 && this.status === 200)) {
          return;
        }
        var result = this.responseText;
        this.get_output = result.json();
      };
    },
    api_PUT_using_fetch: function (url) {
      fetch(url, {
        method: 'PUT',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Token ffc9906f-a83b-4e63-a7b4-af641881bece'
        }
      }).then(response => {
        console.log('response text -> ', response);
        console.log(response.json());
        return response.text();
      }).then((data) => {
        console.log('data -> ', data);
        this.put_output = data ? JSON.parse(data) : {};
      });
      console.log('put at -> ', url);
    },
    api_POST_using_fetch: function (url) {
      fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Token ffc9906f-a83b-4e63-a7b4-af641881bece'
        }
      }).then(response => {
        console.log('response text -> ', response);
        return response.text();
      }).then((data) => {
        console.log('data -> ', data);
        this.post_output = data ? JSON.parse(data) : {};
      });
      console.log('post at -> ', url);
    }
  }
}

</script>

<style scoped>

</style>
