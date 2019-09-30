export const CLOSE_ALERT = 'close_alert';

const closeAlert = (mesasage) => {
    return {
        type: CLOSE_ALERT,
        payload: false
    }
}

export default {closeAlert};