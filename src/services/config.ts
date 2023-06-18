export const apiInstance = {
    get: getRequest,
    post: postRequest
}

async function getRequest(url:string) {
    return await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + url, {
        method: 'GET',
        cache: 'no-store',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.ok === false) {
            throw new Error(`${res.status}`)
        }
        return res.json()
    })
}

async function postRequest(url:string, body: BodyInit) {
    return await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + url, {
        method: 'POST',
        cache: 'no-store',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body
    }).then(res => {
        if (res.ok === false) {
            throw new Error(`${res.status}`)
        }
        return res.json()
    })
}
