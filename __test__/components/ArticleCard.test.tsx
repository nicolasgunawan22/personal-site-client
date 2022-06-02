import { render } from '@testing-library/react'
import ArticleCard from '@/components/Article/ArticleCard'

describe('Article Card', () => {
   it('should render a link', () => {
      const { getByRole } = render(
         <ArticleCard
            title='Article 1'
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, illum!"
            date="2020-01-01"
            slug='/article-1'
            timeToRead={1}
         />
      )
      expect(getByRole('link')).toBeInTheDocument()
   })

   it('should render a title', () => {
      const { getByRole, getByText } = render(
         <ArticleCard
            title='Article 1'
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, illum!"
            date="2020-01-01"
            slug='/article-1'
            timeToRead={1}
         />
      )
      expect(getByRole('heading', { level: 5 })).toHaveTextContent('Article 1')
      expect(getByText('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, illum!')).toBeInTheDocument()
      expect(getByText('2020-01-01')).toBeInTheDocument()
      expect(getByText('1 min read')).toBeInTheDocument()
      expect(getByRole('link')).toHaveAttribute('href', '/article-1')
   })
})