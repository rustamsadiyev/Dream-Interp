import * as React from 'react'
import { Outlet, createRootRoute, } from '@tanstack/react-router'
import SearchHeader from '@/components/search/searchHeader'
import Footer from '@/components/footer'

export const Route = createRootRoute({
  component: () => {
    return (
      <React.Fragment>
        <SearchHeader/>
        <Outlet />
        <Footer/>
      </React.Fragment>
    );
  },
  notFoundComponent: () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-4">The page you're looking for doesn't exist.</p>
        <a href="/" className="text-blue-500 hover:text-blue-700">
          Go back to home
        </a>
      </div>
    );
  }
})
