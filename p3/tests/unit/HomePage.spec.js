//import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import {expect} from 'chai'
import HomePage from '@/components/HomePage.vue'


describe('HomePage.vue', () => {
  it('displays Tickets', async () => {
    const wrapper = shallowMount(HomePage)
    expect(wrapper.text()).to.include('Tickets')

  })
})
// describe('ProgramPage.vue', () => {
//   it('displays an item', async () => {
//     const wrapper = mount(ProgramPage)
//     expect(wrapper.text()).to.include('Old Man River')
//
//   })
// })
