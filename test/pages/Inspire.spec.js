import Vue from 'vue'
import Vuetify from 'vuetify'

import { mount } from '@vue/test-utils'
import Inspire from '@/pages/inspire.vue'

Vue.use(Vuetify)

describe('Inspire Page Component', () => {
  test('is a Vue Instance', () => {
    const wrapepr = mount(Inspire)
    expect(wrapepr.vm).toBeTruthy()
  })
})
