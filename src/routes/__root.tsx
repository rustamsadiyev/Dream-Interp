import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import SearchHeader from '@/components/search/searchHeader'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <SearchHeader/>
      <Outlet />
    </React.Fragment>
  )
}
