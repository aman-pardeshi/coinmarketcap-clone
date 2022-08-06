import type { NextPage } from 'next'
import Header from '../components/Header'
import SwapCrptoModal from '../components/SwapCrptoModal'
import Trending from '../components/Trending'
import CMCTable from '../components/cmc-table/CMCTable'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SwapCrptoModal />
      <div className="mt-10"></div>
      <Trending />
      <CMCTable />
      <Footer />
    </div>
  )
}

export default Home
