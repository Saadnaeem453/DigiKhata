import Home from "./Home"
import Footer from "./Footer"
import Contact from "./Contact"
import Career from "./Career.jsx"
import About from "./About.jsx"
import Feature from "./Feature.jsx"
import Blog from "./Blog.jsx"





import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>

    <Routes>
    < Route path="/" element={<Home />} />
    < Route path="/about" element={<About />} /> 

   < Route path="/contact" element={<Contact />} />
    < Route path="/career" element={<Career />} />
    < Route path="/features" element={<Feature />} />
    < Route path="/blog" element={<Blog />} />



    </Routes>
    <Footer />

    </Router>
  )
}

export default App
