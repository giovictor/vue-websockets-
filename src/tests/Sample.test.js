import {mount} from '@vue/test-utils'
import App from '../App.vue'

describe('Sample Test for vue-cli', () => {
    it('Sample Test', () => {
        const wrapper = mount(App)
        expect(wrapper.html()).toContain('Chats')
        expect(true).toBe(true)
    })
})