Vue.createApp({
  data() {
    return {
      ness: [{
          title: '美味窯烤放山雞冷凍包新上市',
          img: './images/new-a.jpg'
        },
        {
          title: '當日現擠牛奶新上市',
          img: './images/new-b.jpg'
        },
        {
          title: '本農場蔬食打9折',
          img: './images/new-c.jpg'
        },
      ],
      products: [{
          title: '美味烤雞',
          content: '飼養在深山裡的放山雞，本農場將雞高溫烘烤製成快速又方便的調理包，加熱僅可使用',
          img: './images/shop-a.jpg',
          price: 360,
          amountShow: 0,
        },
        {
          title: '新鮮牛乳',
          content: '飼養在深山裡的放山雞，本農場將雞高溫烘烤製成快速又方便的調理包，加熱僅可使用',
          img: './images/shop-b.jpg',
          price: 30,
          amountShow: 0,
        },
        {
          title: '放山雞雞蛋12入',
          content: '飼養在深山裡的放山雞，本農場將雞高溫烘烤製成快速又方便的調理包，加熱僅可使用',
          img: './images/shop-c.jpg',
          price: 120,
          amount: 0,
          amountShow: 0,
        },
        {
          title: '頻果12入',
          content: '香甜蘋果色澤紅潤，無添加臘模清洗後即可食用',
          img: './images/shop-d.jpg',
          price: 200,
          amountShow: 0,
        },
        {
          title: '夏日西瓜一顆',
          content: '夏日炎炎，消暑必備的西瓜一顆60元數量有限，要買要快！',
          img: './images/shop-e.jpg',
          price: 60,
          amountShow: 0,
        },
        {
          title: '有機菠菜1把',
          content: '有機菠菜農場栽種，無化學農藥讓您吃的健康又安心',
          img: './images/shop-f.jpg',
          price: 40,
          amountShow: 0,
        },
      ],
      keys: [{
        title: '自然',
        content: '厚德自然農場全區皆不使用農藥及除草劑，以避免有任何化學物質殘留，吃進身體影響健康。因此在種植的過程中我們飼養放山雞在苦茶樹下面，讓雞來吃蟲吃雜草，雞糞再變成樹木的肥料',
      }, {
        title: '安心',
        content: '放山雞也因為整天在外運動，抵抗力比養在籠子裡的雞還要好，因此根本不需要打針用藥，如此的循環才是我們理想中與自然和諧相處的方式。',
      }, {
        title: '健康',
        content: '本農場注重養身健康，以無毒無害為原則不管是在種植養殖都層層遵守我們的原則，希望消費者吃得健康又安心，也同時保護到大自然環境，可說是一舉兩得。'
      }]
    }
  },
  methods: {
    minus(product) {
      product.amountShow--
      product.amountShow = (product.amountShow < 1) ? 0 : product.amountShow
    },
    plus(product) {
      product.amountShow++
      product.amountShow = (product.amountShow > 9) ? 9 : product.amountShow
    },
  },
  computed: {
    sub() {
      return this.products.map(data => data.price * data.amountShow)
    },
    total() {
      return this.sub.reduce((a, b) => a + b)
    },
  }

}).mount("#app");