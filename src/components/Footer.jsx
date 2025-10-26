import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <a href="https://learnreact.com">/learn react</a>
      <p>copyright @ {currentYear}</p>
    </footer>
  )
}
