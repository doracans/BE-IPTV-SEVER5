export const SubscriptionFeature = {
    SubscriptionFeature: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            description: { type: 'string' },
            featTv: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string' },
                        name: { type: 'string' },
                        iconUrl: { type: 'string' },
                        url: { type: 'string' },
                        type: { type: 'string' },
                        isActive: { type: 'boolean' },
                        deleteAt: { type: 'boolean' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' },
                    },
                },
            },
            featDashboard: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string' },
                        name: { type: 'string' },
                        iconUrl: { type: 'string' },
                        url: { type: 'string' },
                        type: { type: 'string' },
                        isActive: { type: 'boolean' },
                        deleteAt: { type: 'boolean' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' },
                    },
                },
            },
            isActive: { type: 'boolean' },
            deleteAt: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
        },
    },
};
export const SubscriptionFeature1 = {
    SubscriptionFeature1: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            description: { type: 'string' },
            featTv: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string' },
                        name: { type: 'string' },
                        iconUrl: { type: 'string' },
                        url: { type: 'string' },
                        type: { type: 'string' },
                        isActive: { type: 'boolean' },
                        deleteAt: { type: 'boolean' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' },
                    },
                },
            },
            featDashboard: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string' },
                        name: { type: 'string' },
                        iconUrl: { type: 'string' },
                        url: { type: 'string' },
                        type: { type: 'string' },
                        isActive: { type: 'boolean' },
                        deleteAt: { type: 'boolean' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' },
                    },
                },
            },
            isActive: { type: 'boolean' },
            deleteAt: { type: 'null' },
        },
    },
};
export const SubscriptionFeature2 = {
    SubscriptionFeature2: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            description: { type: 'string' },
            featTv: {
                type: 'array',
                items: { type: 'string' },
            },
            featDashboard: {
                type: 'array',
                items: { type: 'string' },
            },
            isActive: { type: 'boolean' },
            deletedAt: { type: ['null'] },
        },
    },
};