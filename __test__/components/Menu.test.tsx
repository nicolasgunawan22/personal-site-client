import { render, screen, fireEvent } from '@testing-library/react';
import Menu from '@/components/Menu/Menu'

describe('Home', () => {
   it('should renders all links after clicked', () => {
      const menu = render(<Menu />)
      const menus = menu.getByRole('button')
      fireEvent.click(menus);
      const links = screen.getAllByRole('link')
      expect(links).toHaveLength(4)
   })
})
