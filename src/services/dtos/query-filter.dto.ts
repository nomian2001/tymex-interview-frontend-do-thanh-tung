import { Expose } from 'class-transformer';

export class QueryFilterDto {
    @Expose()
    search?: string;

    @Expose()
    price?: number[];

    @Expose()
    tier?: string;

    @Expose()
    theme?: string;

    @Expose()
    priceOrder?: string;
}
