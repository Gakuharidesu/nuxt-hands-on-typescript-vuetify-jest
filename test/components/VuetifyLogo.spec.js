import { mount } from '@vue/test-utils'
import VuetifyLogo from '@/components/VuetifyLogo.vue'

describe('VuetifyLog', () => {
  test('is a Vue Instance', () => {
    const wrapper = mount(VuetifyLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
