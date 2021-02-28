import React, {useState } from "react";
import { Layout, Menu, Divider, Avatar } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import './layout.css'
import folder from 'assets/images/Group.png'

const AuthLayout = (props) => {
  const { Header, Sider, Content} = Layout;
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  };
  return (
    
    <>
   
       <Layout >
         <Sider trigger={null} collapsible collapsed={collapsed} style={{minWidth: '250'}}>
           <div className="logo">
             <img src={folder}  alt="" className="mr-2"/>
             
               <h3 className={collapsed && 'd-none'}>Test User<span>email@example.com</span></h3>
             
         
           </div>
           <Divider className="m-0"/>
           <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
             <Menu.Item key="1" icon={<UserOutlined />}>
               Birth Registraion
             </Menu.Item>
             <Menu.Item key="2" icon={<VideoCameraOutlined />}>
               Death Registration
             </Menu.Item>
             <Divider/>
             <Menu.Item key="3" icon={<UploadOutlined />}>
               Logout
             </Menu.Item>
            
           </Menu>
         </Sider>
         <Layout className="site-layout">
           <Header className="site-layout-background" style={{ padding: 0 }}>
             {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
               className: 'trigger',
               onClick: toggle,
             })}
            <h1>Civil registration and vital statistics system<span>
            Registration assistant</span></h1> 
           
           </Header>
           <Content
             className="site-layout-background"
             style={{
               margin: '24px 16px',
               padding: 24,
              
             }}
           >
              {props.children}
           </Content>
         </Layout>
       </Layout>
  
              </>

        

  );
};

export default AuthLayout;
