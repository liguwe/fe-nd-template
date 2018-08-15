import Link from 'umi/link';
import styles from './index.less';

function Index({location}) {
    return (
        <header className={styles.header}>
            <Link to="/">index</Link>
            <Link to="/users">users</Link>
            <Link to="/404">404</Link>
            <Link to="/403">403</Link>
            <Link to="/500">500</Link>
        </header>
    );
}

export default Index;
