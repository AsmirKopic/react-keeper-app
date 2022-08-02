import React from 'react'

const year = new Date()
const currentYear = year.getFullYear()

export default function Footer() {
  return (
    <footer>
    <p>Copyright Asmir Kopić © {currentYear}</p>
    </footer>
  )
}
