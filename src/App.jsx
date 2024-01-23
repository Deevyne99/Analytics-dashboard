import Navbar from './Components/Navbar'

function App() {
  return (
    <section className='relative'>
      <div className='flex'>
        <aside className='md:flex w-[50px] hidden bg-red-300 min-h-[100vh] '>
          hello
        </aside>
        <div className='w-full'>
          <Navbar />
        </div>
      </div>
    </section>
  )
}

export default App
