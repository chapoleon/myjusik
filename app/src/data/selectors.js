import { PORTFOLIOS_BY_COUNTRY, STOCK_RECOMMENDATIONS_BY_COUNTRY } from './stocksByCountry.js'

export function getPortfolios(type, lang) {
  return (
    PORTFOLIOS_BY_COUNTRY?.[lang]?.[type] ||
    PORTFOLIOS_BY_COUNTRY?.en?.[type] ||
    []
  )
}

export function getStockRecommendations(type, lang) {
  return (
    STOCK_RECOMMENDATIONS_BY_COUNTRY?.[lang]?.[type] ||
    STOCK_RECOMMENDATIONS_BY_COUNTRY?.en?.[type] ||
    []
  )
}

