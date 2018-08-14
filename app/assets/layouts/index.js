/**
 * 通过传入的参数来渲染不同的layout，本示例仅仅只有一种layout
 * */
import React from 'react';
import styles from './index.scss';
import Header from './Header';
import withRouter from 'umi/withRouter';

function Layout({ children, location }) {
    return (
        <div className={styles.normal}>
            <Header location={location} />
            <div className={styles.content}>
                <div className={styles.main}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default withRouter(Layout);