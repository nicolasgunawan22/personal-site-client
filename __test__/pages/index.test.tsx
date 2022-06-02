import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
   it('should work', () => {
      expect(true).toBeTruthy();
   })
   it('renders my name', () => {
      render(<Home />)
      const name = screen.getByText(/Nicolas Gunawan/)
      expect(name).toBeInTheDocument()
   })
})