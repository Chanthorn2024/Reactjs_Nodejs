
import nit_image from "../../assets/logo/nit.jpeg"
import React, { useEffect, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  NotificationFilled,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {Outlet,useNavigate} from "react-router-dom"
import { Avatar, Badge, Breadcrumb, Button, Dropdown, Input, Layout, Menu, Space, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', '/Dashboard', <PieChartOutlined />),
  getItem('Category', '/Dashboard/category', <DesktopOutlined />),
  getItem('Employe', '/Dashboard/employee', <DesktopOutlined />),
  getItem('Report', 'report', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'), 
    getItem('Team 2', '8'),
    getItem('Team 2', '8'),
    getItem('Team 2', '8'),
    getItem('Team 2', '8')
  ]),
  getItem('Logout', '9', <FileOutlined />),
];

// local storage 


const LayoutDashboard = () => {
  
      const navigate = useNavigate()
      const [collapsed, setCollapsed] = useState(false);

      useEffect(()=>{
        const isLogin = localStorage.getItem("isLogin")
        // eslint-disable-next-line eqeqeq
        if(isLogin == "0"){
          navigate("/dashboard/login") // if not login
        }
      },[])

      const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

     const onChangeMenu = (item) =>{
        console.log(item.key)
        navigate(item.key)
     }
     const handleLogout=()=>{
        localStorage.setItem("isLogin","0")
        window.location.href="/dashboard/login"
     }

const itemProfile = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        My Account
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
       Change password
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Address
      </a>
    ),
  },
  {
    key: '4',
    label: (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a onClick={handleLogout}>
        Logout
      </a>
    ),
  },
];

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu onSelect={onChangeMenu} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: '15px 15px',
            background: colorBgContainer,
            display:'flex',
            justifyContent:'space-between'
          }}
        >
              <div className="brandContain">
               <img src={nit_image} alt="Logo" 
                style={{width:40,height:40,marginRight:10,marginLeft:10}}
               />
               {/* <div className="txtBrand">NIT Backend</div> */}
               <div className="txtSubBrand">NIT Build IT Skill</div>  
              </div>
              <div>
                <Space style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Input.Search
                      placeholder="sesrch" 
                    />      
                  <Badge count={3}>
                      <Avatar shape="square" size={"small"} />
                  </Badge>           
                  <Badge count={4} >                    
                      <NotificationFilled style={{fontSize:24,marginLeft:10}} />
                  </Badge>
                  <Dropdown
                      menu={{
                        items: itemProfile,
                      }}
                      placement="bottomRight"
                      arrow
                  >
                        <Button style={{marginLeft:10}}>Mr Dara</Button>
                  </Dropdown>
              </Space>
              </div>
        </Header>
        <Content
          style={{
            margin: '16px 16px',
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div> 
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutDashboard;






























// /* eslint-disable jsx-a11y/alt-text */

// import "./LayoutDashboard.css"
// import nit_image from "../../assets/logo/nit.jpeg"
// import {useNavigate,Outlet} from "react-router-dom"
// function LayoutDashboard(){
//     const navigate = useNavigate()
//     const onClickMenu = (routeName) => { 
//         navigate(routeName)
//     }
//     return (
//         <div>
//             <div className="mainHeaderDashboard">
//                 <div className="brandContain" onClick={()=>onClickMenu("/")}>
//                 <img src={nit_image} alt="Logo" width="60" height="60" />
//                     <div>
//                         <div className="txtBrand">NIT Backend</div>
//                         <div className="txtSubBrand">NIT Build IT Skill</div>
                        
//                     </div>
//                 </div>
//                 <div className="menuContain">
//                     <ul className="menu">
//                         <li onClick={()=>onClickMenu("/dashboard")} className="menuItem">Home</li>
//                         <li onClick={()=>onClickMenu("/dashboard/category")} className="menuItem">Category</li>
//                         <li onClick={()=>onClickMenu("/dashboard/product")} className="menuItem">Produt</li>
//                         <li onClick={()=>onClickMenu("/dashboard/login")} className="menuItem">Login</li>
//                         <li onClick={()=>onClickMenu("/")} className="menuItem">Lo website</li>
                    
//                     </ul>
//                 </div>
//             </div>
//             <Outlet />
//         </div>
//     )
// }

// export default LayoutDashboard;


























// /* eslint-disable jsx-a11y/alt-text */

// // import React, { useEffect, useState } from 'react';
// // import {
// //   DesktopOutlined,
// //   FileOutlined,
// //   NotificationFilled,
// //   PieChartOutlined,
// //   TeamOutlined,
// //   UserOutlined,
// // } from '@ant-design/icons';
// // import {Outlet,useNavigate} from "react-router-dom"
// // import { Avatar, Badge, Breadcrumb, Button, Dropdown, Input, Layout, Menu, Space, theme } from 'antd';
// // import { getUser } from '../../share/helper';
// // const { Header, Content, Footer, Sider } = Layout;

// // function getItem(label, key, icon, children) {
// //   return {
// //     key,
// //     icon,
// //     children,
// //     label,
// //   };
// // }


// // const items = [
// //   getItem('Dashboard', '/dashboard', <PieChartOutlined />),

// //   getItem('Customer', '/dashboard/customer', <DesktopOutlined />),
// //   getItem('Employee', '/dashboard/employee', <DesktopOutlined />),
// //   getItem('Order', '/dashboard/order', <DesktopOutlined />),

// //   getItem('Product', '/dashboard/product', <TeamOutlined />, [
// //     getItem('Category', '/dashboard/product/category'),
// //     getItem('Product', '/dashboard/product/productlist'),
// //   ]),

// //   getItem('User', '', <UserOutlined />, [
// //     getItem('Role', '/dashboard/user/role'),
// //     getItem('User role', '/dashboard/user/userrole'),
// //   ]),

// //   getItem('System', '/dashboard/system', <UserOutlined />, [
// //     getItem('Order Status', '/dashboard/system/orderstatus'),
// //     getItem('Order Payment', '/dashboard/system/orderpayment'),
// //     getItem('Province', '/dashboard/system/province'),
// //   ]),

// //   getItem('Report', '/dashboard/report', <TeamOutlined />, [
// //     getItem('Top sale', '/dashboard/report/topsale'),
// //     getItem('Sale summary', '/dashboard/report/salesummary'),
// //     getItem('Sold by catgory', '/dashboard/report/soldbycategory'),
// //     getItem('Sold by product', '/dashboard/report/soldbyproduct'),
// //   ]),
// // ];

// // const LayoutDashboard = () => {
// //   document.title = "Dashboard"
// //   const navigate = useNavigate()
// //   const [collapsed, setCollapsed] = useState(false);
// //   useEffect(()=>{
// //     const isLogin = localStorage.getItem("isLogin")
// //     if(isLogin == "0"){ // not yet login
// //       navigate("/dashboard/login")  // if not yet login
// //     }
// //   },[])



// //   const {
// //     token: { colorBgContainer },
// //   } = theme.useToken();

// //   const onChangeMenu = (item) => {
// //       console.log(item.key)
// //       navigate(item.key)
// //   }

// //   const handleLogout = () => {
// //     localStorage.setItem("isLogin","0")
// //     window.location.href="/dashboard/login"
// //   }

// //   const itemsProfile = [
// //     {
// //       key: '1',
// //       label: (
// //         <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
// //           My Account
// //         </a>
// //       ),
// //     },
// //     {
// //       key: '2',
// //       label: (
// //         <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
// //           Chnage password
// //         </a>
// //       ),
// //     },
// //     {
// //       key: '3',
// //       label: (
// //         <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
// //           Address
// //         </a>
// //       ),
// //     },
// //     {
// //         key: '4',
// //         label: (
// //           <a onClick={handleLogout}>
// //             Logout
// //           </a>
// //         ),
// //       },
// //   ];

// //   const user = getUser();
// //   return (
// //     <Layout
// //       style={{
// //         minHeight: '100vh',
// //       }}
// //     >
// //       <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
// //         <div className="demo-logo-vertical" />
// //         <Menu onSelect={onChangeMenu} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
// //       </Sider>
// //       <Layout>
// //         <Header
// //           style={{
// //             padding: "0 10px",
// //             background: colorBgContainer,
// //             display:'flex',
// //             justifyContent:'space-between'
// //           }}
// //         >
// //             <div className="brandContain">
// //                 <img 
// //                     src={"https://ecm-api.nitcambodia.com/public/nit.jpeg"}
// //                     style={{width:40,height:40,marginRight:10,marginLeft:10}}
// //                 />
// //                 <div className="txtSubBrand">NIT Cabodia</div> 
// //             </div>
                   
// //             <div>
// //                 <Space style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                
// //                     <Badge count={4} >
// //                         <Avatar  shape="square" size="small" />
// //                     </Badge>
// //                     <Badge count={2} >
// //                         <NotificationFilled style={{fontSize:24,marginLeft:10}}/>
// //                     </Badge>
// //                     <Dropdown
// //                             menu={{
// //                                 items:itemsProfile,
// //                             }}
// //                             placement="bottomRight"
// //                             arrow
// //                     >
// //                         <Button style={{marginLeft:10}}>{user.firstname+"-"+user.lastname}</Button>
// //                     </Dropdown>
// //                 </Space>
// //             </div>
// //         </Header>
// //         <Content
// //           style={{
// //             margin: '16px 16px',
// //           }}
// //         >
// //           {/* <Breadcrumb
// //             style={{
// //               margin: '16px 0',
// //             }}
// //           >
// //             <Breadcrumb.Item>User</Breadcrumb.Item>
// //             <Breadcrumb.Item>Bill</Breadcrumb.Item>
// //           </Breadcrumb> */}
// //           <div
// //             style={{
// //               padding: 5,
// //               minHeight: 360,
// //               background: colorBgContainer,
// //             }}
// //           >
// //             <Outlet/>
// //           </div>
// //         </Content>
// //         <Footer
// //           style={{
// //             textAlign: 'center',
// //           }}
// //         >
// //           Powered By NIT © 2023 
// //         </Footer>
// //       </Layout>
// //     </Layout>
// //   );
// // };
// // export default LayoutDashboard;









