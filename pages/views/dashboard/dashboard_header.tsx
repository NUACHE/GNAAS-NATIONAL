import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined, MenuOutlined, SearchOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Avatar, Input, Layout, Menu, MenuProps, Space, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import Image from "next/image"
interface DashboardHeaderParams {
    onClick :()=>void
}

const DashboardHeader = ({onClick}:DashboardHeaderParams ) => {
    const userName = 'Ernest Larbi'
    return ( <Header className="text-blue-900 z-10 bg-white shadow-md px-2  h-12 flex justify-between">
    {/* Left side of header */}
     <div className="flex items-center w-1/2">
     <Image className="" alt="gnaas-icon" src='/gnassicon.jpg' height={10} width={40}/>
     <div className="text-lg ml-2">
         GNAAS DATABASE
     </div>
     <MenuOutlined className="ml-4 text-md hover:cursor-pointer " onClick={onClick}/>
     <Input className="ml-4 w-2/5 rounded-sm"  placeholder="Search" suffix={<SearchOutlined />}/>
     </div>
    {/* Right side of header */}
    <div className="flex items-center hover:cursor-pointer hover:bg-stone-100 hover:rounded-md px-2 my-1">
   
    <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>E</Avatar>
    <div className="ml-2 ">{userName}</div>
    <CaretDownOutlined className="mx-1.5 " />
    </div>
  
    
     </Header> );
}
 
export default DashboardHeader;