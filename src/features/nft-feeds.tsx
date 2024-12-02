import { Card } from "antd";

import { CardNft } from "../components/card-nft";
import { Filter } from "../components/filter";
import { useProducts } from "../hooks/use-products";
import { useQueryParams } from "../hooks/use-query-params";
import { QueryFilterDto } from "../services/dtos/query-filter.dto";



export const NftFeeds = () => {
    const { params, setParams } = useQueryParams(QueryFilterDto, {
        page: 1,
        limit: 10
    });

    const {data, isLoading, isFetching} = useProducts(params)

    const updateQueryParams = (fieldValues: Partial<QueryFilterDto>) => {
        setParams({
            ...fieldValues
        })
    }


    return (
        <div className="flex space-x-4 lg:px-40">
                <section className="hidden lg:block lg:w-[372px]">
                    <Filter queryParams={params} updateQueryParams={updateQueryParams} />
                </section>
                <section className="mx-2 lg:w-[calc(100%_-_380px)]">
                    <div className="grid gap-8 grid-cols-2 lg:grid-cols-4 p-2">
                        {!isLoading && !isFetching ? data?.products.map(item => {
                            return (
                                <CardNft
                                    containerClassName="w-[168px] max-w-[168px] h-[265px]  lg:w-[267px] lg:max-w-[267px] lg:h-[365px]"
                                    key={item.id}
                                    product={item}
                                />
                            );
                        }) : Array(5).fill(0).map((item,index) => {
                            return <Card key={index}  loading/>
                        })}
                    </div>
                </section>
            </div>
    )
}