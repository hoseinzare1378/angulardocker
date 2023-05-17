import { environment } from "./environment";

export function processSystemTime() {
    return new Promise<any>((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${environment.backendBaseUrl}/asanito/General/getDate`, true);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const res = JSON.parse(xhr.responseText);
                    // environment.SystemInitialTime = new Date(res.value);
                    // environment.UserSystemInitialTime = new Date();
                    resolve(null);
                }
                else {
                    reject();
                    throw new Error('Could not get time of server')
                }
            }
        };

    })
}