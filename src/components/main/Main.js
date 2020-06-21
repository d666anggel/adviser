import React from 'react';
import FormDownload from '../../helpers/forms/download/FormDownload';
import styles from './Main.module.scss';
import contentGraphs from '../../media/page_main/contentGraphs.png';
import iconClock from '../../media/page_main/icon_clock.png';
import iconRefresh from '../../media/page_main/icon_refresh.png';
import iconCash from '../../media/page_main/icon_cash.png';
import mainGift from '../../media/page_main/main_gift.png';
import {TitleComponent} from "../../helpers/title/TitleComponent";
import RightSidebar from "./rightSidebar/RightSidebar";

export default function Main() {
	function submit(values) {
		alert("Имя: " + values.firstName + "\rEmail: " + values.email);
	}

	return (<>
		<TitleComponent/>
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className='h1'>Новый советник, работающий на основе нейронных сетей</h1>
				<p className='h2 subHeader'>средняя прибыль +30% в месяц!</p>
				<div className={styles.mediaBlock + ' ' + styles.blockDownload}>
					<div className={styles.mediaBlock_half}>
						<img src={contentGraphs} alt="Картинка с графиками" className={styles.mediaBlock_image}/>
					</div>
					<div className={styles.mediaBlock_half}>
						<FormDownload onSubmit={submit}/>
					</div>
				</div>
				<div className={styles.content_row}>
					<div className={styles.column_info}>
						<div className={styles.mediaBlock_header}>Преимущества</div>
						<div className={styles.mediaBlock}>
							<div className={styles.mediaBlock_row}>
								<div className={styles.mediaBlock_info__icons}>
									<img src={iconClock} alt="Иконка с часами"/>
								</div>
								<div className={styles.mediaBlock_info__desc}>Автономная торговля 24 часа в сутки 7 дней
									в неделю
								</div>
							</div>
							<div className={styles.mediaBlock_row}>
								<div className={styles.mediaBlock_info__icons}>
									<img src={iconRefresh} alt="Иконка человеческого фактора"/>
								</div>
								<div
									className={styles.mediaBlock_info__desc + ' ' + styles.mediaBlock_infoRefresh}>Исключает
									ошибки, связанные с человеческим фактором
								</div>
							</div>
							<div className={styles.mediaBlock_row}>
								<div className={styles.mediaBlock_info__icons}>
									<img src={iconCash} alt="Иконка деньги"/>
								</div>
								<div
									className={styles.mediaBlock_info__desc + ' ' + styles.mediaBlock_infoCash}>Приносит
									прибыль ежемесячно
								</div>
							</div>
						</div>
					</div>
					<div className={styles.column_gift}>
						<div className={styles.mediaBlock_header}>Использование</div>
						<div className={styles.mediaBlock}>
							<div className={styles.mediaBlock_half}>
								<img src={mainGift} alt="Бот с подарком" className={styles.mediaBlock_image}/>
							</div>
							<div className={styles.mediaBlock_half}>
								<div className={styles.column_gift_counter}>
									<div className={styles.column_gift_days}>30</div>
									<div className={styles.column_gift_desc}>дней<br/>использования<br/>в подарок!</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<RightSidebar />
		</div>
	</>);
}