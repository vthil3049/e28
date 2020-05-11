import Api from '@/common/api.js';
export { default as Cart } from '@/common/Cart.js';

export const config = {
    firebase: {
        apiKey: 'AIzaSyAmJzGwjImnS-Tz5txuJ-w9B-fpsQfdWIU',
        projectId: 'e28-zipfoods-28f2b'
    }
}

export const api = new Api({
    apiKey: config.firebase.apiKey,
    projectId: config.firebase.projectId
});

export let store = {
    cartCount: 0
}
