import classNames from 'classnames/bind'
import styles from './Account.module.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
        <img src='https://haycafe.vn/wp-content/uploads/2022/02/avatar-gau.jpg' alt='Nam' className={cx('avatar')}/>
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Nguyen Trong Nam</span>
                <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')}/>
            </h4>
            <span className={cx('username')}>ntnam.98</span>
        </div>
    </div>
  )
}

export default AccountItem