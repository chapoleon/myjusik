import React from 'react'
import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://moneyfit.vip'
const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.svg`

function toAbsoluteUrl(pathname) {
  if (!pathname) return SITE_URL
  if (/^https?:\/\//i.test(pathname)) return pathname
  return `${SITE_URL}${pathname.startsWith('/') ? '' : '/'}${pathname}`
}

export default function Seo({
  title,
  description,
  canonicalPath,
  ogImage,
  noindex = false,
  jsonLd = [],
}) {
  const canonical = toAbsoluteUrl(canonicalPath || '/')
  const image = ogImage ? toAbsoluteUrl(ogImage) : DEFAULT_OG_IMAGE
  const scripts = Array.isArray(jsonLd) ? jsonLd.filter(Boolean) : []

  return (
    <Helmet>
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MoneyFit" />
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary" />
      {title ? <meta name="twitter:title" content={title} /> : null}
      {description ? <meta name="twitter:description" content={description} /> : null}
      <meta name="twitter:image" content={image} />

      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}

      {scripts.map((obj, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  )
}

