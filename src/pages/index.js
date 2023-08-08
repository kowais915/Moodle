import Divider from './components/Divider'
import Hero from './components/Hero'
import Layout from './components/Layout'
import Working from './components/Working'




export default function Home() {
  return (
    <main className={`min-h-full w-fit`}>

      <Layout>

          <Hero/>
            <Divider/>
          <Working/>

      </Layout>

    </main>
  )
}
