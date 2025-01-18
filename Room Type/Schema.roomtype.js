export const RoomType = {
    RoomType: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            propertyId: {
                type: 'object',
                properties: {
                    _id: { type: 'string' },
                    propertyName: { type: 'string' },
                },
            },
            name: { type: 'string' },
            isActive: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
        },
    },
};
export const RoomType1 = {
    RoomType1: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            propertyId: { type: 'string' },
            name: { type: 'string' },
            isActive: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
        },
    },
};
export const RoomType2 = {
    RoomType2: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            propertyId: {
                type: 'object',
                properties: {
                    _id: { type: 'string' },
                    propertyName: { type: 'string' },
                },
            },
            name: { type: 'string' },
            isActive: { type: 'boolean' },
            deletedAt: { type: ['null', 'string'], format: 'date-time' },
            createdAt: { type: 'string', format: 'date-tiem' },
            updatedAt: { type: 'string', format: 'date-time' },
            dynamic: { type: 'array', items: { type: 'string' } },
            static: { type: 'array', items: { type: 'string' } },
            isSubscriptionUsed: { type: 'boolean' },
        },
    },
};
export const RoomType4 = {
    RoomType4: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            propertyId: { type: 'string' },
            name: { type: 'string' },
            isActive: { type: 'boolean' },
            deletedAt: { type: ['null'] },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
        },
    },
};
export const RoomType3 = {
    RoomType3: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            propertyId: { type: 'string' },
            name: { type: 'string' },
            isActive: { type: 'boolean' },
            deletedAt: { type: 'string', format: 'date-time' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
        },
    },
};