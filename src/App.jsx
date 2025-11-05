import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-[92px] bg-[#0F0F0F] min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Welcome to FinBiz
            </h1>
            <p className="text-2xl text-[#B9B3B3] mb-10">
              Your modern financial solution with complete navbar and footer
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
