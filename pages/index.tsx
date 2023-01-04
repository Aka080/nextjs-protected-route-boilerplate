import Head from 'next/head'
import Login from '../components/login/Login'


export default function Home() {
  return (
    <>
      <Head>
        <title>Protected Routes|components</title>
      </Head>
      <main >
        <Login/>
      </main>
    </>
  )
}
