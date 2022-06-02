import { render } from '@testing-library/react'
import List from '@/components/List/List'

describe('List', () => {
   it('should render a title', () => {
      const { getByRole } = render(<List title="List" items={['item 1', 'item 2']} />)
      expect(getByRole('heading')).toHaveTextContent('List')
   })

   it('should render a number of list item', () => {
      const { getByText, getByRole } = render(<List title="List" items={['item 1', 'item 2']} />)
      expect(getByRole('list')).toBeInTheDocument()
      expect(getByText('item 1')).toBeInTheDocument()
      expect(getByText('item 2')).toBeInTheDocument()
   })
})