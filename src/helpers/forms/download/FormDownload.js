import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styles from './FormDownload.module.scss';

const required = value => value ? undefined : 'Поле явлется обязательным'
const minLength = min => value => value && value.length < min ? `Поле должно содержать минимум ${min} символа` : undefined
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Неверный формат email' : undefined

const minLength2 = minLength(2)

const renderField = ({input, label = false, placeholder, type, meta: {touched, error}}) => {
	const hasError = touched && error
	return (<div>
		{label && <label>{label}</label>}
		<div className={(hasError ? styles.errorBlock : "")}>
			<input {...input} placeholder={placeholder} type={type} className={styles.formControl}/>
			{hasError && <span>{error}</span>}
		</div>
	</div>)
}

let FormDownload = props => {
	const {handleSubmit} = props;

	return (<form onSubmit={handleSubmit} className={styles.formCenter}>
		<div>
			<Field name="firstName" className={styles.formControl} component={renderField} type="text"
				   placeholder="Введите Имя" validate={[required, minLength2]}/>
		</div>
		<div>
			<Field name="email" className={styles.formControl} component={renderField} type="email"
				   placeholder="Введите Email" validate={[required, email]}/>
		</div>
		<button type="submit" className={styles.submitButton}>Скачать Adviser</button>
	</form>)
}

FormDownload = reduxForm({
	form: 'download'
})(FormDownload);

export default FormDownload;