import { CloseCircleFilled, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Slider, Typography } from 'antd';
import { useMemo } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import {
    DEFAULT_FILTER_FORM,
    NFT_THEME_OPTIONS,
    PRICE_ORDER_OPTIONS,
    TIER_OPTIONS,
    TIME_OPTIONS,
} from '../../constants';
import { useQueryParams } from '../../hooks/use-query-params';
import { QueryFilterDto } from '../../services/dtos/query-filter.dto.ts';
import { FilterFields } from '../../types';
import { FormWrapper } from '../form-wrapper';


interface FilterProps {
    queryParams?: Partial<QueryFilterDto>;
    updateQueryParams?: (params: Partial<QueryFilterDto>) => void;
}

export const Filter: React.FC<FilterProps> = (props) => {
    const {queryParams, updateQueryParams} = props;


    const { handleSubmit, control, reset } = useForm({
        defaultValues: useMemo(() => {
            return { ...DEFAULT_FILTER_FORM, ...queryParams };
        }, []),
    });

    const onSubmit: SubmitHandler<FilterFields> = data => {
        updateQueryParams?.(data as Partial<QueryFilterDto>);
    };

    const onClickResetButton = () => {
        reset(DEFAULT_FILTER_FORM);
        updateQueryParams?.(DEFAULT_FILTER_FORM as Partial<QueryFilterDto>);
    };

    return (
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                name="search"
                render={({ field, fieldState }) => {
                    return <Input {...field} prefix={<SearchOutlined />} placeholder={'Quick Search'} />;
                }}
            />
            <div className="space-y-3">
                <Controller
                    control={control}
                    name="price"
                    render={({ field, fieldState }) => {
                        return (
                            <FormWrapper label="Price">
                                <Slider
                                    {...field}
                                    range
                                    tooltip={{
                                        formatter: value => `${value} NFT`,
                                        style: {
                                            background:
                                                'linear-gradient(91.27deg, rgba(218, 69, 143, 0) 0.55%, #DA41A2 24.03%, #DA37CE 83.19%, rgba(218, 52, 221, 0) 102.8%)',
                                        },
                                    }}
                                    styles={{
                                        tracks: {
                                            background:
                                                'linear-gradient(91.27deg, rgba(218, 69, 143, 0) 0.55%, #DA41A2 24.03%, #DA37CE 83.19%, rgba(218, 52, 221, 0) 102.8%)',
                                            backgroundColor: 'transparent',
                                        },

                                        track: {
                                            background:
                                                'linear-gradient(91.27deg, rgba(218, 69, 143, 0) 0.55%, #DA41A2 24.03%, #DA37CE 83.19%, rgba(218, 52, 221, 0) 102.8%)',
                                            backgroundColor: 'transparent',
                                        },
                                        handle: {
                                            background:
                                                'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 84, 238, 0) 100%)',
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                />
                            </FormWrapper>
                        );
                    }}
                />
                <Controller
                    control={control}
                    name="tier"
                    render={({ field, fieldState }) => {
                        return (
                            <FormWrapper label="Tier">
                                <Select {...field} options={TIER_OPTIONS} />
                            </FormWrapper>
                        );
                    }}
                />
                <Controller
                    control={control}
                    name="theme"
                    render={({ field, fieldState }) => {
                        return (
                            <FormWrapper label="Theme">
                                <Select {...field} options={NFT_THEME_OPTIONS} />
                            </FormWrapper>
                        );
                    }}
                />
                <Controller
                    control={control}
                    name="time"
                    render={({ field, fieldState }) => {
                        return (
                            <FormWrapper label="Time">
                                <Select {...field} options={TIME_OPTIONS} />
                            </FormWrapper>
                        );
                    }}
                />
                <Controller
                    control={control}
                    name="priceOrder"
                    render={({ field, fieldState }) => {
                        return (
                            <FormWrapper label="Price">
                                <Select {...field} options={PRICE_ORDER_OPTIONS} />
                            </FormWrapper>
                        );
                    }}
                />
                <div className="flex gap-1">
                    <Button type="text" icon={<CloseCircleFilled />} onClick={onClickResetButton}>
                        <Typography.Text>Reset Filter</Typography.Text>
                    </Button>
                    <Button htmlType="submit">Search</Button>
                </div>
            </div>
        </form>
    );
};
