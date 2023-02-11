export const RAKUTEN_WEB_SERVICE_APPLICATION_ID = process.env
  .NEXT_PUBLIC_APPLICATION_ID as string

export const microCMS = {
  SERVICE_DOMAIN: process.env.NEXT_PUBLIC_SERVICE_DOMAIN as string,
  API_KEY: process.env.NEXT_PUBLIC_API_KEY as string,
  ENDPOINT: {
    NEWS: 'news' as const,
  } as const,
} as const
