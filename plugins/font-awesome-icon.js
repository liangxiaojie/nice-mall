import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'

export default () => {
  fontawesome.library.add(solid) // Use any icon from the solid style
  Vue.component('fa-icon', FontAwesomeIcon) // Use the icon component anywhere in the app
}
