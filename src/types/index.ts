type Nullable<T> = T | null;

export enum EPRICE_ORDER {
    ASCENDING = 'asd',
    DESCENDING = 'dsc',
}

export enum ETIME {
    LATEST = 'latest',
}

export interface FilterFields {
    search: Nullable<string>;
    price: Nullable<number[]>;
    tier: Nullable<string>;
    theme: Nullable<string>;
    time: Nullable<ETIME>;
    priceOrder: Nullable<EPRICE_ORDER>;
}
