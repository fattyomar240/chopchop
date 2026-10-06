import Header from './Header'
import HowItWorksSection from './HowItWorksSection'
import  Popular  from './Popular'
import WhereWeDeliver from './WhereWeDeliver'
import Footer from './Footer'

function App() {
  

  return (
    <>
       <Header />
       <main>
        <HowItWorksSection/>
        <Popular /> 
        <WhereWeDeliver/>
       </main>
        <Footer /> 
    </>
  )
}

export default App
