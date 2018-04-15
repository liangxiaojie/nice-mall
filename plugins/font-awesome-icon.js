import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'

export default () => {
  fontawesome.library.add(regular) // Use any icon from the regular style
  Vue.component('fa-icon', FontAwesomeIcon) // Use the icon component anywhere in the app
}
