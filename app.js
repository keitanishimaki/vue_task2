
Vue.component('password', {
  template: `
  <div>
    <label for="password" class="form-label">パスワード</label>
    <div class="form-group">
      <input
        id="password"
        :type="currentType"
        class="form-control js-password"
        data-message="note-1"
        data-toggle="button-1"
        v-model="text"
        @blur="validate"
      />
      <button class="button" id="button-1" @click="passClick">
        toggle visibillity
      </button>
    </div>
    <p class="form-note" id="note-1">{{message}}</p>
  </div>
  `,

  data: function() {
    return {
      currentType: 'password',
      text: '',
      message: '入力してください'
    }
  },

  methods: {
    passClick() {
      if (this.currentType === 'password') {
        this.currentType = 'text'
      } else {
        this.currentType = 'password'
      }
    },
    validate() {
      const cha = /[a-z]/;
      const fig = /[0-9]/;

      if(this.text === "") {
        this.message = '入力してください'
      } else if (this.text.length >= 6 && cha.test(this.text) && fig.test(this.text)) {
        this.message = '良いパスワードです'
      } else {
        this.message = '弱いパスワードです'
      }
    }
  },
});

new Vue({
  el: '#app',
});