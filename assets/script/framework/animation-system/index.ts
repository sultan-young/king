import { loadResources } from '../../util/loader/loadResources';

const baseUrl = 'card-atlas';

class AnimateSystem {
    private animationLib: Map<number, object> = new Map();
    private isLoaded:boolean = false;

    // 预先加载精灵图集
    preLoadSpriteAtlas() {
        cc.resources.preloadDir(baseUrl, cc.SpriteAtlas);
        
    }

    // 加载精灵图集
    async loadSpriteFrameAtlas() {
        const atlas = await loadResources({
            method: 'loadDir',
            url: baseUrl,
            type: cc.SpriteAtlas,
        }) as Array<cc.SpriteAtlas>;

        // 将同一个sprite的图集中的frame合并到一起
        const mergeAtlas = atlas.reduce((t, value) => {
            const id = value.name.split('-')[0];
            if(!t[id]) {
                t[id] = [];
            }
            t[id].push(...value.getSpriteFrames())
            return t;
        }, {});

        // 将合并后的图集进行动作分类
        let atlasMap = {};
        for(let i in mergeAtlas) {
            let item = mergeAtlas[i].reduce((t, spriteFrame) => {
                const [_, type, index ] = spriteFrame.name.split('_');
                spriteFrame.index = Number(index);
                if (!t[type]) {
                    t[type] = [];
                }
                t[type].push(spriteFrame);
                return t;
            }, {})
            // 对序列帧进行排序
            for(let i in item) {
                item[i].sort((pre, current)=> pre.index - current.index)
            }
            atlasMap[i] = item;
        }

        this.animationLib = atlasMap as Map<number, object>;
        this.isLoaded = true;
    }

    play(id) {
        // 根据id播放对应动画
    }

    getAnimation(id: number) {
        return this.animationLib[id];
    }

    getPortrait(id: number) {
        return this.animationLib[id].wait[0];   
    }

    getLib() {
        return this.animationLib;
    }
}

const animateSystem = new AnimateSystem();

export default animateSystem;