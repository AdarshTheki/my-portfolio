import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Home, SinglePost, Project, Post, NotFound } from './pages';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className='min-h-screen relative bg-neutral-900 text-neutral-100'>
      <div className='fixed z-[2] top-1/4 -left-20 w-72 h-72 bg-purple-600 rounded-full filter blur-[100px] opacity-20'></div>
      <div className='fixed z-[2] bottom-1/4 -right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-[120px] opacity-20'></div>
      <div className='z-[5]'>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact Component={Home} path='/' />
            <Route Component={About} path='/author' />
            <Route Component={Post} path='/post' />
            <Route Component={Project} path='project' />
            <Route Component={SinglePost} path='/post/:slug' />
            <Route Component={NotFound} path='*' />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
