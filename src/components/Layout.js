import React from 'react'

const Layout = ({ children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light px-12 1md:px-16 dark:bg-dark ${className}`}>
        {children}
    </div>
  )
}

export default Layout