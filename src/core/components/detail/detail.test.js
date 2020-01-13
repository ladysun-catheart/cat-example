import React from 'react'
import {
  shallow,
  configure
} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Detail from './detail'
import DetailEmpty from './detail-empty'
import DetailFilled from './detail-filled'

configure({
  adapter: new Adapter()
})

describe('Given a Detail component...', () => {

  test('by default is empty', () => {
    const emptyTitle = 'title'
    const emptyText = 'text'
    const wrapper = shallow(<Detail emptyTitle={emptyTitle} emptyText={emptyText} />)
    const detailComponent = wrapper.find(DetailEmpty)
    expect(detailComponent).toHaveLength(1)
  })

  test('shows a title, subtitle and description', () => {
    const title = 'title'
    const subtitle = 'text'
    const description = 'desc'
    const isAvailable = true
    const wrapper = shallow(<Detail title={title} subtitle={subtitle} description={description} isAvailable={isAvailable} />)
    const detailComponent = wrapper.find(DetailFilled)
    expect(detailComponent).toHaveLength(1)
  })

})
