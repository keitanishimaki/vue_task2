
Vue.component('password', {
  template: `
  <div>
    <div class="">
      <label for="password" class="form-label">パスワード</label>
      <div class="form-group">
        <input
          id="password"
          :type="(aftertype === 'text') ? 'password' : 'text'"
          class="form-control js-password"
          data-message="note-1"
          data-toggle="button-1"
        />
        <button class="button" id="button-1" @click="passClick">
          toggle visibillity
        </button>
      </div>
      <p class="form-note" id="note-1">入力してください</p>
    </div>
  </div>
  `,

  props: [
    'aftertype',
    // 'val'
  ],

  methods: {
    passClick() {
      this.$emit('pass-one');
    },
    // valiCheck() {
    //   this.$emit('vali-two');
    // },
  },
});

new Vue({
  el: '#app',
  data : {
    aftertype: 'password',
  },
  
  methods: {
    passOne() {
      this.aftertype = 'password'
    },
  },
});