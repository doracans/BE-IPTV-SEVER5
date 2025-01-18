export const SubscriptionChannels = {
    SubscriptionChannels: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            description: { type: 'string' },
            dynamicChannels: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string' },
                        name: { type: 'string' },
                        categories: { type: 'string' },
                        url: {
                            type: 'array',
                            items: { type: 'string' },
                        },
                        isDeleted: { type: 'boolean' },
                        isActive: { type: 'boolean' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' },
                    },
                },
            },
            dynamicChannelsLimit: { type: 'integer' },
            staticChannels: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string' },
                        name: { type: 'string' },
                        categories: { type: 'string' },
                        url: {
                            type: 'array',
                            items: { type: 'string' },
                        },
                        isDeleted: { type: 'boolean' },
                        isActive: { type: 'boolean' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' },
                    },
                },
            },
            staticChannelsLimit: { type: 'integer' },
            isActive: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
        },
    },
};
export const SubscriptionChannels2 = {
    SubscriptionChannels2: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            description: { type: 'string' },
            dynamicChannels: {
                type: 'array',
                items: { type: 'string' },
            },
            dynamicChannelsLimit: { type: 'integer' },
            staticChannels: {
                type: 'array',
                items: { type: 'string' },
            },
            staticChannelsLimit: { type: 'integer' },
            isActive: { type: 'boolean' },
            deletedAt: { type: ['null'] },
        },
    },
};