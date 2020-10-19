import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import cx from 'classnames';

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

function Button({ children, type, onClick, buttonStyle, buttonSize }) {
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
	return (
		<Link to="/sign-up" className="btn-mobile">
			<button 
				// className={`btn ${checkButtonStyle} ${checkButtonSize}`}
				className={cx(styles.btn, styles[checkButtonStyle], styles[checkButtonSize])}
				onClick={onClick}
				type={type}
			>
				{children}
			</button>
		</Link>
	);
}

export default Button;