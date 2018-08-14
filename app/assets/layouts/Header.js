import { Menu, Icon } from 'antd';
import Link from 'umi/link';

function Header({ location }) {
    return (
        <Menu
            selectedKeys={[location.pathname]}
            mode="horizontal"
            theme="dark"
        >
            <Menu.Item key="/">
                <Link to="/"><Icon type="home" />Home</Link>
            </Menu.Item>
            <Menu.Item key="/users">
                <Link to="/users"><Icon type="bars" />Users</Link>
            </Menu.Item>
            <Menu.Item key="/404">
                <Link to="/404"><Icon type="frown-circle" />404</Link>
            </Menu.Item>
            <Menu.Item key="/403">
                <Link to="/403"><Icon type="frown-circle" />403</Link>
            </Menu.Item>
            <Menu.Item key="/500">
                <Link to="/500"><Icon type="frown-circle" />500</Link>
            </Menu.Item>
        </Menu>
    );
}

export default Header;
