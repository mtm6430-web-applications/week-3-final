Vue.component('product-features', {
  props: ['selected'],
  template: `
  <section v-show="selected === 'Features'">
    <h2>Features</h2>
    <ul>
      <li v-for="feature in features">{{ feature }}</li>
    </ul>
  </section>`,
  data: function () {
    return {
      features: ['1200CC Air-cooled Evolution Engine', 'Closed loop exhaust system', 'Chrome Details']
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    name: 'Cruiser',
    brand: 'Iron Horse',
    description: 'True to its name, the Iron Horse Cruiser is an <i>experience and expression of freedom</i>.',
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
    // adding another item in for the tabs
    tabs: ['Features', 'Specs', 'Comments'],
    selectedTab: 'Features',
    // Adding properties for using with the form
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
    // commentSubmit method called by the form used for adding comment to the comments array
    commentSubmit: function () {
      // resetting the errors array to empty every-time the commentSubmit is ran, this is to clear out any previously added errors
      this.errors = []

      // Adding conditional for form validation, checking is the inputs are set and the word count of the comment is less-than or equal-to 20
      if (this.yourName && this.yourComment && this.yourComment.split(' ').length <= 20) {
        // creating a new variable concatenating the name and comment
        let userComment = this.yourName + ': ' + this.yourComment

        // Adding the concatenated comment to the comments array
        this.comments.push(userComment)

        // resetting the yourName and yourComment properties to null, hence clearing the form fields
        this.yourName = null
        this.yourComment = null
      } else {
        // pushing a relevant message to the errors array
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
