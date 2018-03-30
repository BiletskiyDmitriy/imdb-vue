import { Pie } from 'vue-chartjs'

export default Pie.extend({
  props: ['data', 'options'],

  data () {
    return {
      defaultOptions: {}
    }
  },
  mounted () {
    let options = Object.assign({}, this.defaultOptions, this.options)
    this.renderChart(this.data, options)
  }
})
