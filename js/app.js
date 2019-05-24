var app = new Vue({
  el: '#app',
  data: {
    name: 'Cruiser',
    brand: 'Iron Horse',
    description: 'True to its name, the Iron Horse Cruiser is an <i>experience and expression of freedom</i>.',
    features: ['1200CC Air-cooled Evolution Engine', 'Closed loop exhaust system', 'Chrome Details'],
    specs: {
      engine: '1200cc',
      torque: '99 NM',
      weight: '255 kg',
      other: ['Two tone colour', 'Fog lamps', 'Alloy Wheels']
    },
    variations: [
      {
        color: 'red',
        quantity: 10,
        image: './img/motorcycle-red.jpg'
      },
      {
        color: 'blue',
        quantity: 3,
        image: './img/motorcycle-blue.jpg'
      }
    ],
    cart: 0,
    selectedVariation: 0,
    tabs: ['Features', 'Specs', 'Comments'],
    selectedTab: 'Features',
    yourName: null,
    yourComment: null,
    comments: [],
    errors: []
  },
  methods: {
    updateProduct: function (index) {
      this.selectedVariation = index
      console.log(this.selectedVariation)
    },
    commentSubmit: function () {
      this.errors = []
      if (this.yourName && this.yourComment && this.yourComment.split(' ').length <= 20) {
        let userComment = this.yourName + ': ' + this.yourComment
        this.comments.push(userComment)

        this.yourName = null
        this.yourComment = null
      } else {
        if (!this.yourName) this.errors.push('Name cannot be empty')
        if (!this.yourComment) this.errors.push('Comment cannot be empty')
        if (this.yourComment.split(' ').length > 20) this.errors.push('Comment can only be 20 words')
      }
    }
  },
  computed: {
    title: function () {
      return this.brand + ' - ' + this.name
    },
    image: function () {
      return this.variations[this.selectedVariation].image
    }
  }
})
