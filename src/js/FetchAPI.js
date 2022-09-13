export function fetchPostApi(url, parameter) {
    url = process.env.VUE_APP_API_HOST + url

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parameter)
    }).then(response => response.json())

}


