import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block bg-[var(--color-light)] p-32 dark:bg-[var(--color-dark)] max-xl:p-24 max-lg:p-16 max-md:p-12 max-sm:p-8 ${className}`}>
      {children}
    </div>
  )
}

export default Layout
