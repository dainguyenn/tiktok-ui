import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f93f6b40270a8adc06b5892e0cd6c565~c5_300x300.webp?x-expires=1661569200& x-signature=NT%2Bw6nTsMCZD3xsPk67%2B%2B%2FWD06s%3D"
                alt="..."
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>AAA</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>AXB</span>
            </div>
        </div>
    );
}

export default AccountItem;
