<template>
  <top></top>
  <message v-for="item in msgs" :msg='item' :index='$index'></message>
  <mode  v-show="isShow" v-ref:mode></mode>
</template>

<script>
  import message from '../components/message'
  import head from '../components/addMessage.vue'
  import messageMode from '../components/messageMode.vue'

let data = [{content: 'I have hinted that I would often jerk poor Queequeg from between the whale and the shi',
  emphasis: 'red'}, {content: 'I have hinted that I would often jerk poor Queequeg from between the whale and the shi',
  emphasis: 'red'}, {content: 'I have hinted that I would often jerk poor Queequeg from between the whale and the shi',
  emphasis: 'red'}, {content: ' shi',
  emphasis: 'red'}]

  export default {
    data () {
      return {
        msgs: data,
        isShow: false,
        selectMsg: {}
      }
    },
    methods: {

    },
    events: {
      openMode () {
        this.isShow = true
        this.$refs.mode.add = true
      },
      closeMode () {
        this.isShow = false
      },
      addMessage (data) {
        this.msgs.push(data)
      },
      delete (index) {
        this.msgs.splice(index, 1)
      },
      edit (index) {
        this.isShow = true
        const data = {
          content: this.msgs[index].content,
          emphasis: this.msgs[index].emphasis
        }
        this.$refs.mode.editMessage(data, index)
      },
      editMessage (data, index) {
        this.msgs.splice(index, 1, data)
        // this.msgs.$set(index, data)
        this.isShow = false
      }
    },
    components: {
      top: head,
      message: message,
      mode: messageMode
    }
  }
</script>
