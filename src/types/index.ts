type Nullable<T> = T | null;

export enum EPRICE_ORDER {
    ASCENDING = 'asc',
    DESCENDING = 'dsc',
}

export enum ETIME {
    LATEST = 'latest',
}

export enum ENFT_THEME {
    ALL = 'all',
    COLORFUL ='colorful',
    LIGHT = 'light',
    DARK= 'dark',
    HALLOWEEN = 'halloween',
}

export enum ENFT_CATEGORY {
    ALL = 'all',
    UPPER_BODY = 'upperBody',
    LOWER_BODY = 'lowerBody',
    HAT = 'hat',
    SHOES = 'shoes',
    ACCESSORY = 'accessory',
    LEGENDARY = 'legendary',
    MYTHIC = 'mythic',
    EPIC = 'epic',
    RARE = 'rare',
}

export enum ENFT_TIER {
    ALL ='all',
BASIC = 'basic',
PREMIUM = 'premium',
DELUXE = 'deluxe'
}

export interface FilterFields {
    search?: string;
    price?: number[];
    tier?: string;
    theme?: string;
    time?: string;
    priceOrder?: string;
}

export type IProduct = {
    id: number;
    tier: string;
    theme: string;
    img: string;
    createdAt: string;
    price: number;
    role: string;
};

export interface IMetaData {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface IPaginationResponse<T> {
    data: T;
    metadata: IMetaData
}
