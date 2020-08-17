
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
      />
      <button class="button" id="button-1" @click="passClick">
        toggle visibillity
      </button>
    </div>
    <p class="form-note" id="note-1">入力してください</p>
  </div>
  `,

  data: function() {
    return {
      currentType: 'password'
    }
  },

  // props: [
  //   'currentType',
  // ],

  methods: {
    passClick() {
      if (currentType === 'password') {
      this.currentType = 'password'
      } else {
      this.currentType = 'text'
      }
    },
    // valiCheck() {
    //   this.$emit('vali-two');
    // },
  },
});

new Vue({
  el: '#app',
  // data : {
  //   currentType: 'password',
  // },
  
  // methods: {
  //   passOne() {
  //     this.currentType = 'text'
  //   },
  // },
});