import { Typography } from 'antd';
import { PropsWithChildren } from 'react';

interface FormWrapperProps extends PropsWithChildren {
    label: string;
}

export const FormWrapper: React.FC<FormWrapperProps> = props => {
    const { label, children } = props;
    return (
        <div className="flex flex-col">
            <Typography.Text>{label}</Typography.Text>
            {children}
        </div>
    );
};
