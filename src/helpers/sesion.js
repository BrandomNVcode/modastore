import { DateTime } from 'luxon';


export const sesion = () => {

    const token = localStorage.getItem('token');

    const valido = DateTime.now().diff(DateTime.fromMillis(parseInt(token))).milliseconds > 0;

    return valido;
}


export const sesion_start = () => {
    localStorage.setItem('token', DateTime.now().plus({days: 1}).millisecond.toString());
}

export const sesion_destroy = () => {
    localStorage.clear();
}