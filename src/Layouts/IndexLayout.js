import Header from "@/components/Header";
import Footer from "@/components/Footer";

function IndexLayout({children}) {
  return (
    <div className="main-layout">
      <Header/>
        {children}
      <Footer/>
    </div>
  )
}

export default IndexLayout