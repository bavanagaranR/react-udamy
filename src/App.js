import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Categories from "./components/catogories"
import Recommended from "./components/recommended"
import Salesimage from "./components/salesimage"
import Topics from "./components/topic"
import Popular from "./components/popular"

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Categories></Categories>
            <Salesimage></Salesimage>
            <Recommended></Recommended>
            <Topics></Topics>
            <Popular></Popular>
           <Footer></Footer>
        </>
    )
}

export default App