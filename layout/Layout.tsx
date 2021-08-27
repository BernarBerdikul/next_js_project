import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';
import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';


const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
		<Header/>
		<div>
			<Sidebar/>
			<div>
				{children}
			</div>
		</div>
		<Footer/>
		</>
	);
};


export const withLayout = <T extends Record<string, unknown>>( Component: FunctionComponent<T> ) => {
	return function withLayoutComponent(props: T) {
		return (
			<Layout>
				<Component {...props}/>
			</Layout>
		);
	};
};

