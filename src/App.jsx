import { Routes, Route } from 'react-router-dom'
import { Footer, Header, Notification, Sidebar } from './components'
import { Home, Matches, TopPicks, Match } from './pages'
import './styles/App.css'


function App() {

  return (
    <>
    <Header />
    <Notification />
    <div className="content">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/matches/:competition?/:status?" element={<Matches />} />
        <Route path="/match/:id?" element={<Match />} />
        <Route path="/picks/:date?" element={<TopPicks />} />
      </Routes>
      <Sidebar />
    </div>
    <Footer />
    </>
  )
}

export default App
