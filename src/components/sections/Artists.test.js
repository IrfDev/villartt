import { mount } from '@vue/test-utils'
import Artist from './Artist.vue'

describe('Artists component section', () => {
    const $page = {
        users: {
            edge: [{
                    node: {
                        username: 'Villi ❤️',
                        about: 'Hello tester!'
                    }
                },
                {
                    node: {
                        username: 'Andrea',
                        about: 'Hello tester!'
                    }
                },
            ]
        }
    };
    let cmp = mount(Artist, {
        mocks: {
            $page
        }
    });
    it('Artists cards length equals $page.users.edge length', () => {
        expect(cmp.vm.$page.users.edge.length).toBe($page.users.edge.length);
    })
});