import { BrowserRouter , Link , Route , Routes} from 'react-router-dom';
import { logo } from './assets';
import { Home , CreatePost } from './pages';

const App = () => {
  return (
    <>
   <BrowserRouter>
   <header className='w-full flex justify-between items-center bg-white sm:px-8 pt-4 pb-4 px-4 border-b border-b-[#b8ecee]'>
    <Link to = '/'>
      <img src={logo} alt='logo' className='w-28 object-contain'/>
    </Link>
    <Link to = '/create-post' className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>Create</Link>
   </header>
   <main className='sm:p-88 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh - 73px)]'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/create-post' element={<CreatePost />} />
    </Routes>
   </main>
   </BrowserRouter>
    </>
  )
}

export default App