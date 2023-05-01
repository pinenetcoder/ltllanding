import Header from "@/components/Header";
import Footer from "@/components/Footer";

function IndexLayout({children}) {
  return (
    <>
      <Header/>
        {children}
      <Footer/>
    </>
  )
}

export default IndexLayout