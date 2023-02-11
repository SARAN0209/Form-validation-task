export const validName = new RegExp(/^[a-zA]+.{2,}$/); // min 3 characters.
export const validEmail = new RegExp(/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/); // @gmail.com is must.
export const validPassword = new RegExp(/^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$/); //min 8 characters with 1 numeric value.
export const validMobileNumber= new RegExp(/^[0-9\b]+.{9,}$/) // 10 numbers must.