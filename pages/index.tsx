import type { NextPage } from 'next'
import Header from '../components/Header'
import Trending from '../components/Trending'
import CMCTable from '../components/cmc-table/CMCTable'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-10"></div>
      <Trending />
      <div className="mt-20"> </div>
      <CMCTable />
      <Footer />
    </div>
  )
}

export default Home
