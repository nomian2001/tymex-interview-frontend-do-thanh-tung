import { EPRICE_ORDER, ETIME, FilterFields } from '../types';

export const DEFAULT_FILTER_FORM: FilterFields = {
    search: null,
    price: null,
    tier: null,
    theme: null,
    time: ETIME.LATEST,
    priceOrder: EPRICE_ORDER.ASCENDING,
};

export const PRICE_ORDER_OPTIONS = [
    {
        label: 'Low to High',
        value: EPRICE_ORDER.ASCENDING,
    },
    {
        label: 'High to Low',
        value: EPRICE_ORDER.DESCENDING,
    },
];

export const TIME_OPTIONS = [
    {
        label: 'Latest',
        value: ETIME.LATEST,
    },
];
