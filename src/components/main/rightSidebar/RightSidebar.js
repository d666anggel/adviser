import React from 'react';
import styles from './RightSidebar.module.scss';
import sidebarRightHello from '../../../media/sidebar_right/sidebarRight_hello.png';
import sidebarRightGraphic from '../../../media/sidebar_right/sidebarRight_graphic.png';

export default function RightSidebar() {
	return (<div className={styles.rightSidebar_container}>
		<div className={styles.rightSidebar}>
			<img src={sidebarRightHello} className={styles.rightSidebar_image} alt="Бот, который приветствует"/>
			<div className={styles.rightSidebar_graphic}>
				<div className={styles.rightSidebar_graphic_head}>
					<div className={styles.rightSidebar_graphic_month}>Апрель - Май</div>
					<div className={styles.rightSidebar_graphic_year}>2020</div>
				</div>
				<img src={sidebarRightGraphic} className={styles.rightSidebar_graphic_img} alt="График"/>
			</div>
		</div>
	</div>);
}