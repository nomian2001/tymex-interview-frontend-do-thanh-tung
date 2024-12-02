type Nullable<T> = T | null;

export enum EPRICE_ORDER {
    ASCENDING = 'asd',
    DESCENDING = 'dsc',
}

export enum ETIME {
    LATEST = 'latest',
}

export enum ENFT_THEME {
    ALL = 'all',
    HALLOWEEN = 'halloween',
    SPACE = 'space',
    STEAMPUNK = 'steampunk',
    CYBERPUNK = 'cyberpunk',
    FANTASY = 'fantasy',
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
    search: Nullable<string>;
    price: Nullable<number[]>;
    tier: Nullable<string>;
    theme: Nullable<string>;
    time: Nullable<ETIME>;
    priceOrder: Nullable<EPRICE_ORDER>;
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
