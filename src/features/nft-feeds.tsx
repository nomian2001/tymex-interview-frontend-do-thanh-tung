import { Card } from 'antd';
import uniqBy from 'lodash-es/uniqBy';
import {  useState } from 'react';

import { CardNft } from '../components/card-nft';
import { Filter } from '../components/filter';
import { GradientButton } from '../components/gradient-button';
import { CATEGORY_OPTIONS, DEFAULT_FILTER_FORM } from '../constants';
import { useProducts } from '../hooks/use-products';
import { useQueryParams } from '../hooks/use-query-params';
import { ProductModel } from '../models';
import { QueryFilterDto } from '../services/dtos/query-filter.dto';
import { ENFT_CATEGORY } from '../types';

export const NftFeeds = () => {
    const { params, setParams } = useQueryParams(QueryFilterDto, {
        ...DEFAULT_FILTER_FORM,
        category: ENFT_CATEGORY.ALL
    } as QueryFilterDto);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 12
    })
    const [products, setProducts] = useState<ProductModel[]>([]);

    const { data, isLoading, isFetching } = useProducts({
        ...params,
        ...pagination
    });
    const isEndPagination = data?.metadata.totalPages === pagination.page;

    const updateQueryParams = (fieldValues: Partial<QueryFilterDto>) => {
        setParams({
            ...params,
            ...fieldValues,
        });
        setPagination({
            page: 1,
            limit: 12
        })
        setProducts([]);
    };

    const onClickViewMore = () => {
        setProducts(prev => {
            return uniqBy([...prev, ...(data?.products || [])], 'id');
        });

    

        setPagination((prev) => {
            return {
                ...prev,
                page: prev.page + 1
            }
        })
     
    };

    const onClickCategoryButton = (category: ENFT_CATEGORY) => {
        setProducts([])
        setParams({
            ...params,
            category,
        });

        setPagination({
            page: 1,
            limit: 12
        })
    };

    const uniqueProducts = uniqBy([...products, ...(data?.products || [])], 'id');


    return (
        <div className="flex lg:space-x-4 lg:px-36 mt-[6rem]">
            <section className="hidden lg:block lg:w-[372px]">
                <Filter queryParams={params} updateQueryParams={updateQueryParams} />
            </section>
            <section className="mx-2 w-full lg:w-[calc(100%_-_380px)]">
                <div className="overflow-x-hidden mb-10">
                    <div className="overflow-x-auto px-2">
                        <div className="flex gap-6 min-w-max">
                            {CATEGORY_OPTIONS.map(category => {
                                return (
                                    <GradientButton
                                        key={category.value}
                                        isActive={params.category === category.value}
                                        onClick={() => onClickCategoryButton(category.value)}
                                        className="h-11 hover:cursor-pointer"
                                    >
                                        {category.label}{' '}
                                    </GradientButton>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="grid gap-3 lg:gap-8 grid-cols-2 lg:grid-cols-4 p-2">
                    {uniqueProducts.map(item => {
                        return (
                            <CardNft
                                containerClassName="w-[190px] max-w-[190px] lg:min-w-[15rem] lg:max-w-[18rem] hover:cursor-pointer"
                                key={item.id}
                                product={item}
                            />
                        );
                    })}
                    {isFetching ||
                        (isLoading &&
                            Array(5)
                                .fill(0)
                                .map((item, index) => {
                                    return <Card key={index} loading />;
                                }))}
                </div>
                {!isEndPagination && (
                    <div className="flex justify-center items-center mt-8 lg:mt-12">
                        <GradientButton
                            size="large"
                            onClick={onClickViewMore}
                            isActive
                            className="lg:w-[320px] lg:h-[70px]"
                        >
                            View More
                        </GradientButton>
                    </div>
                )}
            </section>
        </div>
    );
};
