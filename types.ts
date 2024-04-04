export type FormatLegality = 'not_legal' | 'legal' | 'restricted'
export type CardColor = 'W' | 'U' | 'B' | 'R' | 'G'
export type Games = 'paper' | 'mtgo' | 'arena'
export type Finishes = 'nonfoil' | 'foil' | 'etched'
export type Rarity = 'common' | 'uncommon' | 'rare' | 'mythic' | 'bonus'
export type BorderColor = 'black' | 'borderless' | 'silver' | 'white' | 'gold'
export type FrameType = '1993' | '1997' | '2003' | '2015' | 'future'

export interface Card {
  object: string
  id: string
  oracle_id: string
  multiverse_ids: number[]
  mtgo_id: number
  tcgplayer_id: number
  cardmarket_id: number
  name: string
  lang: string
  released_at: string
  uri: string
  scryfall_uri: string
  layout: string
  highres_image: boolean
  image_status: string
  image_uris: {
    small: string
    normal: string
    large: string
    png: string
    art_crop: string
    border_crop: string
  }
  mana_cost: string
  cmc: number
  type_line: string
  oracle_text: string
  power: string
  toughness: string
  colors: CardColor[]
  color_identity: CardColor[]
  keywords: string[]
  legalities: {
    standard: FormatLegality
    future: FormatLegality
    historic: FormatLegality
    timeless: FormatLegality
    gladiator: FormatLegality
    pioneer: FormatLegality
    explorer: FormatLegality
    modern: FormatLegality
    legacy: FormatLegality
    pauper: FormatLegality
    vintage: FormatLegality
    penny: FormatLegality
    commander: FormatLegality
    oathbreaker: FormatLegality
    standardbrawl: FormatLegality
    brawl: FormatLegality
    alchemy: FormatLegality
    paupercommander: FormatLegality
    duel: FormatLegality
    oldschool: FormatLegality
    premodern: FormatLegality
    predh: FormatLegality
  }
  games: Games[]
  reserved: boolean
  foil: boolean
  nonfoil: boolean
  finishes: Finishes[]
  oversized: boolean
  promo: boolean
  reprint: boolean
  variation: boolean
  set_id: string
  set: string
  set_name: string
  set_type: string
  set_uri: string
  set_search_uri: string
  scryfall_set_uri: string
  rulings_uri: string
  prints_search_uri: string
  collector_number: string
  digital: boolean
  rarity: Rarity
  card_back_id: string
  artist: string
  artist_ids: string[]
  illustration_id: string
  border_color: BorderColor
  frame: '2015'
  full_art: boolean
  textless: boolean
  booster: boolean
  story_spotlight: boolean
  edhrec_rank: number
  preview: {
    source: string
    source_uri: string
    previewed_at: string
  }
  prices: {
    usd: string | null
    usd_foil: string | null
    usd_etched: string | null
    eur: string | null
    eur_foil: string | null
    tix: string | null
  }
  related_uris: {
    gatherer: string
    tcgplayer_infinite_articles: string
    tcgplayer_infinite_decks: string
    edhrec: string
  }
  purchase_uris: {
    tcgplayer: string
    cardmarket: string
    cardhoarder: string
  }
}
