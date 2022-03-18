import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../Input/Input.js'
import './UserProfile.css'
export default function UserProfile({ users, validate }) {
    let { id } = useParams();
    const user = users.find((user) => user.id === Number(id))

    const [isDisable, setIsDisable] = useState(true)
    const handleEditProfile = () => setIsDisable(!isDisable)
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const [comment, setComment] = useState('')

    function commentEdit(e) {
        setComment(e.target.value)
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
        const { [name]: removedError, ...rest } = errors;
        const error = validate[name](value);
        setErrors({
            ...rest,
            ...(error && { [name]: values[name] && error }),
        });
    }
    function className() {
        if (Object.keys(errors).length === 0 && !Object.values(values).includes('') && Object.values(values).length === 8) {
            if (isDisable) {
                return "user-profile__button"
            } return "user-profile__button user-profile__button_active"
        } return "user-profile__button"
    }
    function handleSubmit(e) {
        e.preventDefault()
        let resalt = { ...values };
        resalt.comment = comment
        console.log(JSON.stringify(resalt))
    }
    return (
        <div className="user-profile">
            <div className="user-profile__header">
                <p className="user-profile__header__title">
                    Профиль пользоваетля
                </p>
                <button type="button" disabled={!isDisable} className="user-profile__header__button" onClick={handleEditProfile}>
                    Редактироввать
                </button>
            </div>
            <div className="user-profile__info">
                <form className="user-profile__info__data">
                    <Input
                        label="Name"
                        type="text"
                        disabled={isDisable}
                        name="name"
                        value={values.name || ''}
                        onChange={handleChange}
                        placeholder={user.name}
                        error={errors.name}
                    />
                    <Input
                        label="User name"
                        type="text"
                        disabled={isDisable}
                        name="username"
                        value={values.username || ''}
                        onChange={handleChange}
                        placeholder={user.username}
                        error={errors.username}
                    />
                    <Input
                        label="E-mail"
                        type="email"
                        disabled={isDisable}
                        name="email"
                        value={values.email || ''}
                        onChange={handleChange}
                        placeholder={user.email}
                        error={errors.email}
                    />
                    <Input
                        label="Street"
                        type="text"
                        disabled={isDisable}
                        name="street"
                        value={values.street || ''}
                        onChange={handleChange}
                        placeholder={user.address.street}
                        error={errors.street}
                    />
                    <Input
                        label="City"
                        type="text"
                        disabled={isDisable}
                        name="city"
                        value={values.city || ''}
                        onChange={handleChange}
                        placeholder={user.address.city}
                        error={errors.city}
                    />
                    <Input
                        label="Zip code"
                        type="text"
                        disabled={isDisable}
                        name="zipCode"
                        value={values.zipCode || ''}
                        onChange={handleChange}
                        placeholder={user.address.zipcode}
                        error={errors.zipCode}
                    />
                    <Input
                        label="Phone"
                        type="tel"
                        disabled={isDisable}
                        name="phone"
                        value={values.phone || ''}
                        onChange={handleChange}
                        placeholder={user.phone}
                        error={errors.phone}
                    />
                    <Input
                        label="Website"
                        type="url"
                        disabled={isDisable}
                        name="website"
                        value={values.website || ''}
                        onChange={handleChange}
                        placeholder={user.website}
                        error={errors.website}
                    />
                    <Input
                        label="Comment"
                        type="text"
                        disabled={isDisable}
                        name="comment"
                        value={comment}
                        onChange={commentEdit}
                    />
                </form>
            </div>
            <button type="submit" disabled={!(Object.keys(errors).length === 0 && !Object.values(values).includes('') && Object.values(values).length === 8)} className={className()} onClick={handleSubmit}>Отправить</button>
        </div>
    )
}
