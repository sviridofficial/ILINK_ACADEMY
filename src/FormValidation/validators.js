export const requiredField = value => {
    if (value) return undefined;
    return "Пустое поле"
}

export const maxLength20 = value => {
    if (value.length > 20) return "Длина больше 20 символов";
    return undefined;
}
