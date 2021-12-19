interface ILoadParams {
    method?: string,
    url: string,
    type: any,
}


export async function loadResources({method = 'load', url, type}: ILoadParams) {
    let res = await baseLoad({method, url, type})
    return res;
}

async function baseLoad({method, url, type}: ILoadParams) {
    return new Promise((resolve, reject) => {
        cc.resources[method](url, type, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    })
}
