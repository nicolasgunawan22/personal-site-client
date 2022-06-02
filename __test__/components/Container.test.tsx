import { render, screen } from '@testing-library/react'
import Container from '@/components/Container/Container'

describe('Container', () => {
   it('renders the child', () => {
      const { container } = render(<Container><div>Hello</div></Container>);
      expect(container.firstChild).toHaveTextContent('Hello');
   });
})