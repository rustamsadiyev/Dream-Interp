/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WhyDreamImport } from './routes/whyDream'
import { Route as IndexImport } from './routes/index'
import { Route as DetailsIdImport } from './routes/details.$id'

// Create/Update Routes

const WhyDreamRoute = WhyDreamImport.update({
  id: '/whyDream',
  path: '/whyDream',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DetailsIdRoute = DetailsIdImport.update({
  id: '/details/$id',
  path: '/details/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/whyDream': {
      id: '/whyDream'
      path: '/whyDream'
      fullPath: '/whyDream'
      preLoaderRoute: typeof WhyDreamImport
      parentRoute: typeof rootRoute
    }
    '/details/$id': {
      id: '/details/$id'
      path: '/details/$id'
      fullPath: '/details/$id'
      preLoaderRoute: typeof DetailsIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/whyDream': typeof WhyDreamRoute
  '/details/$id': typeof DetailsIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/whyDream': typeof WhyDreamRoute
  '/details/$id': typeof DetailsIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/whyDream': typeof WhyDreamRoute
  '/details/$id': typeof DetailsIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/whyDream' | '/details/$id'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/whyDream' | '/details/$id'
  id: '__root__' | '/' | '/whyDream' | '/details/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  WhyDreamRoute: typeof WhyDreamRoute
  DetailsIdRoute: typeof DetailsIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  WhyDreamRoute: WhyDreamRoute,
  DetailsIdRoute: DetailsIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/whyDream",
        "/details/$id"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/whyDream": {
      "filePath": "whyDream.tsx"
    },
    "/details/$id": {
      "filePath": "details.$id.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
