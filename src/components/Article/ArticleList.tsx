import React from 'react'
import Article, { ArticleProps } from './Article'

const ArticleList: React.FC<{ articles: ArticleProps[] }> = ({ articles }) => {
  return (
    <div className="sm:min-w-[1000px] articles text-h5 grid grid-cols-1 lg:grid-cols-3 gap-x-22 lg:gap-x-4 gap-y-10">
      {articles.map((article, index) => (
        <div
          key={index}
          className={`lg:col-span-1 ${index > 0 ? 'hidden lg:block' : ''}`}>
          <Article {...article} />
        </div>
      ))}
    </div>
  )
}

export default ArticleList
