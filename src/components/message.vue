
<style media="screen">
  .jz-message{

    position: relative;
    margin: 0.3rem 0.5rem;
    background: #FFFFFF;
    border-radius: 0.25rem;
    border: 0.1rem solid #ffffff;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #000000;

  }
  .jz-message:hover{
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.50);

  }
  .jz-message-emphasis{
      position: absolute;
      top: .25rem;
      left: .25rem;
      width: 4rem;
      height: .55rem;
      border-radius: .3rem;
  }
  .jz-message-content{
      margin: 1rem .5rem;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #000000;

  }
  .red{
    background: #F8102C;
  }
  .orange{
    background: #F5A623;
  }
  .blue{
    background: #50E3C2;
  }
  .jz-message-face{
    position: absolute;
    right: .5rem;
    bottom: .5rem;
    width:1.5rem;
    height: 1.5rem;
    border-radius: .3rem;
  }
  /*transition*/
.message-transition{
  transition: all 0.3s ease;
}
.message-enter, .message-leave{
  opacity: 0;
}

</style>

<template >
  <div class="jz-message" @click='edit' transition='message'>
    <p class="jz-message-mode-close"><i class="icon-remove icon-1x" @click='delete'></i></p>
    <div class="jz-message-emphasis":class="msg.emphasis"></div>
    <div class="jz-message-content">
      <p>{{msg.content}}</p>
    </div>
    <img class='jz-message-face' src="../../static/img/3-151104144T2.jpg" alt="" />
  </div>
</template>
<script>
  export default{
    props: ['msg', 'index'],
    methods: {
      delete () {
        this.$dispatch('delete', this.index)
      },
      edit () {
        this.$dispatch('edit', this.index)
      }
    }
  }
</script>
