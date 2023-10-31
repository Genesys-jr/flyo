import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className='flex justify-between'>
      <div>
        <h1>Fylo</h1>
      </div>
      <div className='flex space-x-6'>
        <a href="">Features</a>
        <a href="">Team</a>
        <a href="">Sign In</a>
      </div>
      </section>
    </main>
  )
}
