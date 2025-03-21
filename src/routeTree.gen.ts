/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as DetailsCoverCoverImport } from './routes/details/cover/$cover'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DetailsCoverCoverRoute = DetailsCoverCoverImport.update({
  id: '/details/cover/$cover',
  path: '/details/cover/$cover',
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
    '/details/cover/$cover': {
      id: '/details/cover/$cover'
      path: '/details/cover/$cover'
      fullPath: '/details/cover/$cover'
      preLoaderRoute: typeof DetailsCoverCoverImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/details/cover/$cover': typeof DetailsCoverCoverRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/details/cover/$cover': typeof DetailsCoverCoverRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/details/cover/$cover': typeof DetailsCoverCoverRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/details/cover/$cover'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/details/cover/$cover'
  id: '__root__' | '/' | '/details/cover/$cover'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DetailsCoverCoverRoute: typeof DetailsCoverCoverRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DetailsCoverCoverRoute: DetailsCoverCoverRoute,
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
        "/details/cover/$cover"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/details/cover/$cover": {
      "filePath": "details/cover/$cover.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
