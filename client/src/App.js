import { PostForm, HomePage, NotFoundPage } from './pages'
import { Route, Routes } from 'react-router-dom'

function App()
{
  return (
    <div class="bg-neutral-900 min-h-screen flex items-center">
      <div class="px-10 container m-auto">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/new' element={<PostForm />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
