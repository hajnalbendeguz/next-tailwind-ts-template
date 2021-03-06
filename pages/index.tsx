import Head from 'next/head'

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-lg text-center text-gray-800">Hello</h1>
      </main>
    </div>
  )
}
