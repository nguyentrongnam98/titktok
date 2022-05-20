import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
    children,
    to,
    href,
    onClick,
    primary = false,
    outline = false,
    small = 'medium',
    text,
    disable,
    rounded,
    className,
    icon,
    ...passProps
}) {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disable) {
        Object.keys(props).forEach((prop) => {
            if (prop.startsWith('on') && typeof props[prop] === 'function') {
                delete props[prop];
            }
        });
    }
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        text,
        disable,
        rounded,
        [className]:className
    });
    return (
        <Component className={classes} {...props}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span className={cx('title')}>{children}</span>
        </Component>
    );
}

export default Button;
