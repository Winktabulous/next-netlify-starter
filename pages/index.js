import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cranium Project V1!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my project" />
    <form action="/thank-you" method="post" data-netlify="true">
  <label>
    Name:
    <input type="text" name="name">
  </label>
  <br>
  <label>
    Email:
    <input type="email" name="email">
  </label>
  <br>
  <label>
    Message:
    <textarea name="message"></textarea>
  </label>
  <br>
  <button type="submit">Send</button>
</form>
      </main>

      <Footer />
    </div>
  )
}
