import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, CheckSquareOutlined, PictureOutlined } from '@ant-design/icons';

import '../css/Sidebar.css';

const Sidebar = () => {
    const [collasped, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState('todos');

    const toggleCollapsed = () => {
        setCollapsed(!collasped);
    }

    const handleSelectedKey = (e) => {
        setSelectedKey(e.key);
    }

    const items = [{
        key: 'hero',
        icon: <PictureOutlined />,
        label: <Link to='/hero'>Hero</Link>,
        className: 'sidebar-menu-item',
    }, {
        key: 'todos',
        icon: <CheckSquareOutlined />,
        label: <Link to='/todos'>Todos</Link>,
        className: 'sidebar-menu-item',
    }];

  return (
    <div className='sidebar-div'>
        <Button type='primary' onClick={toggleCollapsed} style={{marginBottom: 4, marginLeft: 4}}>
            {collasped ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        {/* <Menu
            mode='inline'
            theme='dark'
            inlineCollapsed={collasped}
            className='sidebar-menu'
            onClick={handleSelectedKey}
            selectedKeys={[selectedKey]}
            defaultSelectedKeys={['hero']}
            items={items}
        >
            {/* <h3 className='sidebar-heading'>TODO App</h3> */}
            
        {/* </Menu> */}


        <Menu
            mode='inline'
            theme='dark'
            inlineCollapsed={collasped}
            className='sidebar-menu'
            onClick={handleSelectedKey}
        >
            <h3 className='sidebar-heading'>TODO App</h3>
            <Menu.Item key='todos' className='sidebar-menu-item' title='Todos' icon={<CheckSquareOutlined />} >
                <Link to='/todos'>Todos</Link>
            </Menu.Item>
            <Menu.Item key='hero' className='sidebar-menu-item' title='Hero' icon={<PictureOutlined />} onClick={handleSelectedKey}>
                <Link to='/hero'>Hero</Link>
            </Menu.Item>
        </Menu> 


    </div>
  )
}

export default Sidebar;
