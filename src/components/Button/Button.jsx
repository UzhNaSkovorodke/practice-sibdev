import { classnames } from 'src/utils';

import styles from './Button.module.scss';

const Button = ({ tabIndex, variant, bgColor, radius = 6, height, isDisabled, onClick, children }) => {
  const buttonOnClick = (e) => {
    e.preventDefault();
    onClick && onClick();
  };

  return (
    <button
      className={classnames([styles.button, styles[`button__${variant}`], styles[`button-color__${bgColor}`]])}
      tabIndex={tabIndex}
      style={{
        height,
        borderRadius: radius,
      }}
      disabled={isDisabled}
      onClick={buttonOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
