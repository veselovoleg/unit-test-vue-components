import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'

describe('Foo.vue', () => {
    it('has a root element with class foo', () => {
        const wrapper = mount(Foo)
        expect(wrapper.is('.foo')).to.equal(true)
        expect(wrapper.classes()).to.contain('bar')
    })

    it('sets the prop value', () => {
        const passedProp = 'some text'
        const wrapper = mount(Foo, {
            propsData: {
                passedProp
            }
        })
        const p = wrapper.find('p')
        expect(p.text()).to.equal(passedProp)
    })

    it('changes h1 text when #change-text is clicked', () => {
        const wrapper = mount(Foo)
        const changeMessage = wrapper.find('#change-message')
        changeMessage.trigger('click')
        const h1 = wrapper.find('h1')
        expect(h1.text()).to.equal('new message')
    })

    it('renders 4 list elements inside .parent-ul', () => {
        const wrapper = mount(Foo)
        expect(wrapper.contains('.parent-ul')).to.equal(true)
        const listElements = wrapper.findAll('.parent-ul li')
        expect(listElements.length).to.equal(4)
    })
})