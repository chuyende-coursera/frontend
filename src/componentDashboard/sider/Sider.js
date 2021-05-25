import React, { useState } from 'react';
import { Layout, Avatar, Badge } from 'antd';
import MenuDash from '../menu/Menu';
import 'antd/dist/antd.css';
import { DashboardOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './slider.css';
const { Sider } = Layout;

const SiderDash = () => {
	const [collapsed, setCollapsed] = useState(false);
	const onCollapse = (collapsed) => {
		setCollapsed(collapsed);
	};
	return (
		<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
			<div className="text-center logodash">
				<Link>
					<Avatar
						shape="square"
						icon={<DashboardOutlined style={{ fontSize: '50px', color: '#08c', size: '80%' }} />}
					/>
				</Link>
			</div>
			<MenuDash />
		</Sider>
	);
};

export default SiderDash;
