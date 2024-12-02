import { Card } from "antd";

import { CardNft } from "../components/card-nft";
import { Filter } from "../components/filter";
import { useProducts } from "../hooks/use-products";



export const NftFeeds = () => {
    const {data, isLoading, isFetching} = useProducts({
        page: 1,
        limit: 100,
    })


    return (
        <div className="flex space-x-4">
                <section className="hidden lg:block lg:w-[372px]">
                    <Filter />
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