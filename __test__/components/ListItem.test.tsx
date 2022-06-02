import { render } from '@testing-library/react'
import ListItem from '@/components/List/ListItem'

describe('ListItem', () => {
   it('should render an item for the list', () => {
      const { getByText } = render(<ListItem text="item 1" />)
      expect(getByText('item 1')).toBeInTheDocument()
   })
})