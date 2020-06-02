<template>
    <div class="content-body">
      <h3>1. 关于有氧运动40分钟的说法</h3>
      <p class="title">网络上有很多说有氧运动40分钟以上地才开始消耗脂肪，如慢跑、骑自行车等运动。</p>
      <ul class="content-ul">
        <li>1. 关于这种说法，我要告诉大家的事实是，人活着就需要能量供应，无论是坐着、睡着、躺着都是会消耗热量，而这些热量几乎全部来自于脂肪。而进行跑步和骑自行车时，都是从一开始就燃烧了脂肪，并不是像网络上那样，只有40分钟以上的有氧运动才会消耗脂肪。</li>
        <li>
          2. 但是为什么都说只有40分钟以上的有氧运动才减脂呢？
          <p
            class="contentText"
          >- 那是因为有氧运动时间越长，脂肪共能比例也就越高。但是具体提高多少呢？但脂肪比例具体能提高多少？实际上，跑一个小时步，不过将脂肪供能提高的百分之十。</p>
        </li>
        <li>
          3. 即使从长远的时间范围看，有氧运动所消耗的总脂肪和热量，也是低于高强度的无氧抗阻训练和HIIT训练的。
          <p
            class="contentText"
          >- 根据实验表明，虽然低强度有氧运动所消耗的脂肪明显高于高强度间歇训练，但是在运动结束后的一段时间里，相对低强度有氧运动，高强度间歇训练的减脂一直在持续消耗。最终在24个小时内，所消耗的脂肪总量居然超过了低强度有氧训练。</p>
          <p class="contentText">- 令人感到神奇的是，高强度间歇训练造成的持续燃烧脂肪、消耗热量的时间竟然能持续72个小时左右。</p>
        </li>
        <li>4. 这也就是说，高强度间歇训练、无氧训练，相对于长时间的低强度有氧运动，更能提高机体的新陈代谢水平。提升一段时间内身体消耗热量、消耗脂肪的能力，长远看来，减肥效果更好。</li>
        <li>5. 有数据表明：在静止的情况下，一磅肌肉24小时内消耗6千卡热量，而一磅脂肪，相同环境下只能消耗2千卡热量。</li>
      </ul>
      <div class="textBoxContent" v-html="testText"></div>
    </div>
</template>

<style scoped>
.content-body {
  width: auto;
  min-height: 666px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-left: 220px;
  box-sizing: border-box;
  padding: 15px;
  color: #f6f9fc;
}
ul > li {
  list-style: none;
  text-align: left;
  margin: 8px 0;
}
.content-ul li p {
  margin: 5px;
}
.content-ul li .contentText {
  margin-left: 25px;
}
.textBoxContent {
  text-align: left;
  padding-left: 25px;
  padding-right: 15px;
}
</style>

<script>

export default {
  name: 'Content',
  data () {
    return {
      testText:
        '<h3 style="text-align: center;">随便写写</h3><ol><li>关于书写格式，关于有氧健身，无氧健身，产生了乳酸，导致肌肉酸疼。这种酸疼会引起持续好几天才会消失，所以锻炼不可过量</li><li>随便写写，放在文本框里试一下效果，这样可以感受一下代码的效果&nbsp; &nbsp;&nbsp;<u>​</u>​</li></ol>'
    }
  }
}
</script>
