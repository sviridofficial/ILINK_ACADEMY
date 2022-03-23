export const requiredField = value => {
    if (value) return undefined;
    return "Пустое поле"
}

export const maxLength20 = value => {
    if (value.length > 20) return "Длина больше 20 символов";
    return undefined;
}
export const maxLength200 = value => {
    if (value.length > 200) return "Длина больше 200 символов";
    return undefined;
}
