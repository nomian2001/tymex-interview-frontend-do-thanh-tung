import { CloseCircleFilled, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Slider, Typography } from 'antd';
import { useMemo } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { DEFAULT_FILTER_FORM, PRICE_ORDER_OPTIONS, TIME_OPTIONS } from '../../constants';
import { useQueryParams } from '../../hooks/use-query-params';
import { QueryFilterDto } from '../../services/dtos/query-filter.dto.ts';
import { FilterFields } from '../../types';
import { FormWrapper } from '../form-wrapper';

export const Filter = () => {
    const { params, setParams } = useQueryParams(QueryFilterDto);

    const { handleSubmit, control, reset } = useForm({
        defaultValues: useMemo(() => {
            return { ...DEFAULT_FILTER_FORM, ...params };
        }, []),
    });

    const onSubmit: SubmitHandler<FilterFields> = data => {
        setParams(data as Partial<QueryFilterDto>);
    };

    const onClickResetButton = () => {
        reset(DEFAULT_FILTER_FORM);
        setParams(DEFAULT_FILTER_FORM as Partial<QueryFilterDto>);
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
                                <Slider {...field} range />
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
                                <Select {...field} options={[]} />
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
                                <Select {...field} options={[]} />
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
