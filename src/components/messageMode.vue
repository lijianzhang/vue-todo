
<style media="screen">
  .jz-message-mode{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.50);
    border-radius: 10px;
    height: 80%;
    width: 80%;
  }
  .jz-message-mode-close{
    color: #50E3C2;
    float: right;
    margin-right: .5rem;
  }
  .jz-message-mode-close::after{
    clear: both;
  }
  .jz-message-mode-theme{
    /* Rectangle 28: */
    border: 1px solid #50E3C2;
    border-radius: 3px;
    width: 100%;
    margin: 0.5rem 0;
  }
  .jz-message-mode-form{
    width: 95%;
    margin: auto;
    text-align: center;
  }
  .jz-message-mode-form button{
    background-color: #50E3C2;
    color: #FFFFFF;
    width: 60%;
    border: 0;
    height: 1.5rem;
    border-radius: 1rem;


  }
</style>
<template >
  <div class="jz-message-mode" >
    <p class="jz-message-mode-close"><i class="icon-remove icon-3x" @click='close'></i></p>
    <section class="jz-message-mode-form">
      <!-- <input class="jz-message-mode-theme" type="text" name="name" value=""> -->
      <textarea class="jz-message-mode-theme" name="name" rows="3" cols="40" v-model="content" placeholder="内容"></textarea>
      <select class="jz-message-mode-theme" name="" v-model="emphasis" >
        <option v-for="option in options" :value="option.value">
          {{option.text}}
        </option>
      </select>
      <button type="button" name="button" @click='addMessage'> {{add?'添加':'修改'}} </button>
    </section>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        content: '',
        emphasis: 'blue',
        add: true,
        index: 0,
        options: [{text: '红色', value: 'red'}, {text: '青色', value: 'blue'}, {text: '橘色', value: 'orange'}]
      }
    },
    methods: {
      close () {
        this.content = ''
        this.emphasis = 'blue'
        this.$dispatch('closeMode')
      },
      addMessage () {
        let data = {
          content: this.content,
          emphasis: this.emphasis
        }
        if (this.add) {
          this.$dispatch('addMessage', data)
        } else {
          this.$dispatch('editMessage', data, this.index)
        }
        this.close()
      },
      editMessage (data, index) {
        this.content = data.content
        this.emphasis = data.emphasis
        this.index = index
        this.add = false
      }
    }
  }
</script>
