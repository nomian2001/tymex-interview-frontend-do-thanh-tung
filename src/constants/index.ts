import { ENFT_CATEGORY, ENFT_THEME, ENFT_TIER, EPRICE_ORDER, ETIME, FilterFields } from '../types';

export const DEFAULT_FILTER_FORM: FilterFields = {
    search: null,
    price: null,
    tier: ENFT_TIER.ALL,
    theme: ENFT_TIER.ALL,
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
] as const;

export const TIME_OPTIONS = [
    {
        label: 'Latest',
        value: ETIME.LATEST,
    },
] as const;

export const TIER_OPTIONS = [
    {
        label: 'All',
        value: ENFT_CATEGORY.ALL,
    },
    {
        label: 'Upper Body',
        value: ENFT_CATEGORY.UPPER_BODY,
    },
    {
        label: 'Lower Body',
        value: ENFT_CATEGORY.LOWER_BODY,
    },
    {
        label: 'Hat',
        value: ENFT_CATEGORY.HAT,
    },
    {
        label: 'Shoes',
        value: ENFT_CATEGORY.SHOES,
    },
    {
        label: 'Accessory',
        value: ENFT_CATEGORY.ACCESSORY,
    },
    {
        label: 'Legendary',
        value: ENFT_CATEGORY.LEGENDARY,
    },
    {
        label: 'Mythic',
        value: ENFT_CATEGORY.MYTHIC,
    },
    {
        label: 'Epic',
        value: ENFT_CATEGORY.EPIC,
    },
    {
        label: 'Rare',
        value: ENFT_CATEGORY.RARE,
    },
] as const;

export const NFT_THEME_OPTIONS = [
    {
        label: 'All',
        value: ENFT_THEME.ALL,
    },
    {
        label: 'Halloween',
        value: ENFT_THEME.HALLOWEEN,
    },
    {
        label: 'Space',
        value: ENFT_THEME.SPACE,
    },
    {
        label: 'Steampunk',
        value: ENFT_THEME.STEAMPUNK,
    },
    {
        label: 'Cyberpunk',
        value: ENFT_THEME.CYBERPUNK,
    },
    {
        label: 'Fantasy',
        value: ENFT_THEME.FANTASY,
    },
] as const;
