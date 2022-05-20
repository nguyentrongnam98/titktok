import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional;
import Wrapper from '../Popper/Wrapper';
import AccountItem from '../AccountItem/AccountItem';
import Button from '../button/Button';
const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = React.useState([]);
    React.useEffect(() =>{
      setTimeout(() => {
          setSearchResult([1])
      },1000)
    },[])
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images} alt="logo" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                 <Wrapper>
                                     <h4 className={cx('search-title')}>
                                         Accounts
                                     </h4>
                                     <AccountItem/>
                                     <AccountItem/>
                                     <AccountItem/>
                                     <AccountItem/>
                                 </Wrapper>
                            </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* <FontAwesomeIcon icon={faSpinner} className={cx('loading')} /> */}
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary icon={<FontAwesomeIcon icon={faSignIn}/>}>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
