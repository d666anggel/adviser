import React from 'react';
import styles from "../textPage.module.scss";
import ScrollbarBlock from '../../helpers/scrollbarBlock/ScrollbarBlock';
import sidebarRightAbout from '../../media/sidebar_right/sidebarRight_about.png';
import {TitleComponent} from "../../helpers/title/TitleComponent";
import RightSidebarTextPage from "../../helpers/RightSidebarTextPage/RightSidebarTextPage";

const Content = () => {
	return (<>
		<p>Совершенно новый советник Adviser — на основе нейронных сетей способен приносить в среднем +30%
			прибыли ежемесячно только по одной валютной паре! Нейронные сети — это аналог принципа
			биологически живых нервных клеток, только в цифровом варианте. По сути это искусственный
			интеллект. Нейронные сети используются для прогнозирования, распознавания и управления.</p>
		<p>Именно эта технология и взята на вооружение специалистами в форекс торговле и был создан
			первоклассный торговый робот, который при депозите в 1000$ — разгоняет его в 2 раза всего лишь
			за 70 дней. Конечно, сумма не маленькая, но это только для некоторых. Если вы хотите разогнать
			депозит с минимальной суммы, то попробуйте вначале советник для разгона малого депозита, это
			идеальное решение для начинающего трейдера.</p>
		<p>Но если вы хотите заметно ощутимой прибыли и готовы вложить по максимуму для достижения
			невероятных успехов в трейдинге, то читайте дальше.</p>
		<p>Итак, за основу алгоритма для торгового робота были взяты нейронные сети, таким образом удалось
			настроить торговлю советника с максимальной отдачей — торговый робот удваивает депозит всего за
			70 дней!</p>
		<p className={"strong"}>Как гарантированно зарабатывать от 30% в месяц?</p>
		<p>Есть только 2 варианта — найти профессионального трейдера, которому придётся платить за это
			вознаграждение, либо использовать современного супер-робот Adviser, работающего на основе
			нейронных сетей.</p>
		<p>Робот НЕ болеет, не требует вознаграждения, у него не бывает плохого настроения. Он просто
			торгует и приносит стабильные 30% в месяц. Мало? Поставьте его на 3 валютные пары и
			зарабатывайте до 90% в месяц.</p>
		<p>Простой расчет. На счету с депозитом в 1000 USD на одной валютной паре сможете каждый месяц
			выводить по 300 USD. На счету в 2000 USD с 3 валютных пар Ваш ежемесячный заработок составит уже
			1800 USD в месяц. Хотите больше? Просто оставьте прибыль на счету, и уже на второй месяц Вы
			сможете забрать 3420 USD. А там уже и до миллиона недалеко.</p>
	</>);
}

export default function About() {
	return (<>
		<TitleComponent title="Подробнее об Adviser"/>
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className='h1'>Подробнее об Adviser</h1>
				<p className='h2 subHeader'>Как это работает?</p>
				<div className={styles.mediaBlock}>
					<ScrollbarBlock content={Content()}/>
				</div>
			</div>
			<RightSidebarTextPage imgsrc={sidebarRightAbout}/>
		</div>
	</>);
}
