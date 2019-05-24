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
    tabs: ['Features', 'Specs'],
    selectedTab: 'Features'
  },
  methods: {
    updateProduct: function (index) {
      this.selectedVariation = index
      console.log(this.selectedVariation)
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
