import Header from '../layout/header'
import Footer from '../layout/footer'

function Layout({children}) {
  return (
    <>
    <Header/>
        { children }
    <Footer/>
    </>
  )
}

export default Layout
