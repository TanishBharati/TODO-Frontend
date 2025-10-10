import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, Flex } from 'antd';

import Sidebar from './components/Sidebar';
import Todos from './pages/Todos';
import Hero from './pages/Hero';

const { Content } = Layout;

const App = () => (
  <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Flex>  
          <Sidebar />
          <Layout>
            <Content style={{ padding: 24, background: '#f0f2f5', minHeight: '100vh', alignItems: 'center' }}>
              <Routes>
                <Route path='/' element={<Hero />}></Route>
                <Route path='/hero' element={<Hero />}></Route>
                <Route path='/todos' element={<Todos />}></Route>
              </Routes>
            </Content>
          </Layout>
        </Flex>
      </Layout>

  </div>
);

export default App;