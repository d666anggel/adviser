import React from 'react';
import styles from "./RightSidebarTextPage.module.scss";
import FormDownload from "../forms/download/FormDownload";

export default function RightSidebarTextPage(props) {
	function submit(values) {
		alert("Имя: " + values.firstName + "\rEmail: " + values.email);
	}


	return (<>
		<div className={styles.rightSidebar_container}>
			<div className={styles.rightSidebar}>
				<div className={styles.rightSidebar_form}>
					<div className={styles.rightSidebar_form_desc}>
						Отправьте заявку и мы пришлем <br/>Adviser Вам на почту!
					</div>
					<FormDownload onSubmit={submit}/>
				</div>
				<img src={props.imgsrc} className={styles.rightSidebar_image} alt="Бот страницы"/>
			</div>
		</div>
	</>);
}
