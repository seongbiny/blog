import { useState } from 'react'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Pagination from '@/components/Pagination'
import Image from '@/components/Image'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg h-12 items-center">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="블로그 검색"
              className="text-sm block w-full leading-6 px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-4 h-4 leading-6 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          {!filteredBlogPosts.length && <li className="text-lg pt-8">🧐 검색 결과가 없습니다.</li>}
          {displayPosts.map((frontMatter) => {
            const { slug, thumbSrc, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <Link href={`/blog/${slug}`}>
                  <article className="space-y-2 xl:grid xl:grid-cols-4">
                    <div className="rounded-md overflow-hidden">
                      <Image
                        className="object-cover object-center transform scale-100 transition-all duration-300 ease-in-out hover:scale-110"
                        src={thumbSrc}
                        alt={thumbSrc}
                        blurDataURL={thumbSrc}
                        width="100%"
                        height="55%"
                        placeholder="blur"
                        loading="lazy"
                        layout="responsive"
                      />
                    </div>
                    <div className="space-y-3 xl:col-span-3 xl:ml-5">
                      <div>
                        <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                          {title}
                        </h3>
                        <div className="flex flex-wrap pt-3">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="prose text-gray-500 max-w-none dark:text-gray-400 truncate">
                        {summary}
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
