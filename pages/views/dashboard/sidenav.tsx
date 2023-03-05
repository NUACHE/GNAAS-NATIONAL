import { AppstoreOutlined } from "@ant-design/icons";
import { Menu, MenuProps, theme } from "antd";
import Sider from "antd/es/layout/Sider";

interface SideNavProps{
    isCollapsed: boolean
}

const SideNav = ({isCollapsed}:SideNavProps) => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
      const items = ['Dashboard', 'Executives', 'Committees', 'Positions', 'Programs/Visitations',
      'Unions', 'Zones', 'Fellowships', 'Chaplains/PCM', 'Patrons', 'Alumni Reps', 'Bulk SMS', 'Documents'
      ];
      const items1: MenuProps['items'] = items.map((value,index) => ({
        key: String(index + 1),
        label: `${value}`,
        icon: <AppstoreOutlined />
      }));

     


    return ( 
        <Sider collapsed={isCollapsed} width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items1}
            className="text-xs text-blue-900 "
             
          />
        </Sider>
     );
}
 
export default SideNav;