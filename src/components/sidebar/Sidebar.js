import React from 'react';
import styles from './Sidebar.module.scss';
import sidebarLogo from '../../media/sidebar_left/sidebarLogo.png'
import iconDownload from '../../media/icons/icon_download.png';
import iconMore from '../../media/icons/icon_more.png';
import iconInfo from '../../media/icons/icon_info.png';
import {NavLink} from "react-router-dom";

export default function Sidebar(props) {

	return (<div className={styles.sidebar}>
		<div className={styles.sidebarLogo}>
			<img src={sidebarLogo} alt="Логотип Adviser"/>
		</div>
		<button className={styles.sidebarButton + ' ' + styles.sidebarButton_download}
				onClick={props.toogleDownloadFocus}><img src={iconDownload} alt="Скачать"/></button>
		<NavLink exact to="/about" className={styles.sidebarButton + ' ' + styles.sidebarButton_more}><img
			src={iconMore}
			alt="Как это работает?"/></NavLink>
		<NavLink exact to="/politic" className={styles.sidebarButton + ' ' + styles.sidebarButton_info}><img
			src={iconInfo}
			alt="Политика конфиденциальности"/></NavLink>
	</div>);
}
