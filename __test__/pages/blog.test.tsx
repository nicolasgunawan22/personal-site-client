import { render, screen } from '@testing-library/react'
import Blog from '@/pages/blog'

describe('Blog Page', () => {
   it('should render a heading', () => {
      render(<Blog />)
      expect(screen.getByText('Blog')).toBeInTheDocument()
   })

   it('should render a list of articles', () => {
      const { getByRole } = render(<Blog />)
      expect(getByRole('link')).toBeInTheDocument()
   })
})