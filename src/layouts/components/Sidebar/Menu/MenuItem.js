import { NavLink } from 'react-router-dom';

import classnames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classnames.bind(styles);

function MenuItem({ title, to, icon }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            {icon}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
