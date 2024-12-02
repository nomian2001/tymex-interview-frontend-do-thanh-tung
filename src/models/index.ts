
import { Expose, Transform, Type } from 'class-transformer';

import { ENFT_CATEGORY, ENFT_THEME, ENFT_TIER } from '../types';
import { toCamelCase } from '../utils';

class AuthorModel {
  @Expose()
  firstName!: string;

  @Expose()
  lastName!: string;

  @Expose()
  email!: string;

  @Expose()
  gender!: string;

  @Expose()
  avatar!: string;

  @Expose()
  onlineStatus!: string;
}

export class ProductModel {
  @Expose()
  id!: number;

  @Expose()
  title!: string;

  @Expose()
  @Transform(({value}) => {
    return value ? toCamelCase(value) : ''
  })
  category!: ENFT_CATEGORY;

  @Expose()
  price!: number;

  @Expose()
  isFavorite!: boolean;

  @Expose()
  createdAt!: number;

  @Expose()
  theme!: ENFT_THEME;

  @Expose()
  tier!: ENFT_TIER;

  @Expose()
  imageId!: number;

  @Expose()
  @Type(() => AuthorModel)
  author!: AuthorModel;
}
