import React from 'react'
import { CONTACT } from './consts/profile'

export default function Footer() {
  return (
    <div class='self-end text-center text-zinc-600 bg-transparent font-semibold'>created by <a href={CONTACT.LINKEDIN.LINK} target='_blank' rel="noreferrer">Meghana Varanasi</a> </div>
  )
}
