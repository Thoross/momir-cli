import { Card } from '../../types'

export const isCard = (data: any): data is Card => {
  return 'oracle_id' in data
}

export const randomCard = async (manaValue: string) => {
  const response = await fetch(
    `https://api.scryfall.com/cards/random?q=${encodeURI(`t:creature mv=${manaValue}`)}`,
  )
  const data = await response.json()
  if (!isCard(data)) {
    throw new Error('Invalid card data')
  }
  return data
}
