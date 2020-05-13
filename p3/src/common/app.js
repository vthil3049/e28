import Api from '@/common/api.js';

//export { default as Cart } from '@/common/Cart.js';

export const config = {
    firebase: {
        apiKey: 'AIzaSyCkaZeNdz_IUsGUUwR_y6U-Vywo7Bg0tW4',
        projectId: 'e28-talent-show'
    }
}

export const api = new Api({
    apiKey: config.firebase.apiKey,
    projectId: config.firebase.projectId
});

// Simple state management pattern
export let store = {
    itemCount: 0
}
