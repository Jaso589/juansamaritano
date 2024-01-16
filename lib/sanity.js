import { createPreviewSubscriptionHook, createCurrentUserHook } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { definePreview } from 'next-sanity/preview'
import { config } from './config'

export const urlFor = ( source ) => createImageUrlBuilder(config).image(source)

export const usePreviewSubscription = definePreview(config)

export const useCurrentUser = definePreview(config)