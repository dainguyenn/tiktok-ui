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
                src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1651185108860934~c5_300x300.webp?x-expires=1661850000&x-signature=VXJMK5VfJnIEGdPlsMGnCEabbtk%3D"
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
