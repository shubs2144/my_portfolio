import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block bg-[var(--color-light)] p-32 dark:bg-[var(--color-dark)] ${className}`}>
      {children}
    </div>
  )
}

export default Layout
