#! /usr/bin/env bun

import { Command } from 'commander'
import { randomCard } from './src/services/scryfall'
// import ora from 'ora'
import terminalImage from 'terminal-image'
import { intro, text, spinner, confirm, outro } from '@clack/prompts'

const fetchCard = async (manaValue: string | symbol) => {
  const s = spinner()
  s.start('Generating card')
  const response = await randomCard(manaValue.toString())
  const cardImageResponse = await fetch(response.image_uris.normal)
  const cardImage = await cardImageResponse.arrayBuffer()
  const image = await terminalImage.buffer(Buffer.from(cardImage), {
    width: '50%',
    height: '50%',
    preserveAspectRatio: true,
  })
  s.stop()
  console.log(image)
  console.log('See this on Scryfall: ', response.scryfall_uri)
}

const main = async () => {
  let shouldContinue = true
  intro('Momir Basic Generator')

  while (shouldContinue) {
    const manaValue = await text({
      message: 'Enter the mana value of the card',
    })
    await fetchCard(manaValue)
    const another = await confirm({
      message: 'Do you want to generate another card? (yes/no)',
    })
    shouldContinue = !!another
  }
  outro('Thanks for using Momir Basic Generator')
}
await main()
