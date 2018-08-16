import Link from 'umi/link';
import styles from './index.less';

function Index() {
    return (
        <div className={styles.content}>
            <Link to="/a">a</Link>
            <Link to="/a/b">a/b</Link>
            <Link to="/a/b/c">a/b/c</Link>
        </div>
    );
}

export default Index;