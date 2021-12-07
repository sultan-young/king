export function loadResources(url, type) {
    return new Promise((resolve, reject)=> {
        cc.resources.load(url, type, (err, spriteFrame) => {
            if (err) {
                reject(err);
            }
            resolve(spriteFrame);
        });
    })
}