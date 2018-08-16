import Link from 'umi/link';
import styles from './index.less';

function Index() {
    return (
        <div className={styles.content}>
            <Link to="/user">user</Link>
            <Link to="/user/list">user/list</Link>
            <Link to="/user/12">user/12</Link>
            <Link to="/user/1233">user/1233</Link>
        </div>
    );
}

export default Index;