import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, Flex } from 'antd';

import './App.css'
import Sidebar from './components/Sidebar';
import Todos from './pages/Todos';
import Hero from './pages/Hero';
import SearchTodo from './pages/SearchTodo';

const { Content } = Layout;

const App = () => (
  <div className="App">
      <Layout className='layout-section'>
        <Flex>  
          <Sidebar />
          <Layout>
            <Content className='content-section'>
              <Routes>
                <Route path='/' element={<Hero />}></Route>
                <Route path='/hero' element={<Hero />}></Route>
                <Route path='/todos' element={<Todos />}></Route>
                <Route path='/search' element={<SearchTodo />}></Route>
              </Routes>
            </Content>
          </Layout>
        </Flex>
      </Layout>

  </div>
);

export default App;