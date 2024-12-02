import { Image, theme, Typography } from 'antd';

import { ImageProps } from './types.ts';

interface FigureWidgetProps {
    frame: ImageProps;
    image: ImageProps;
    title: string;
}

export const FigureWidget: React.FC<FigureWidgetProps> = props => {
    const { frame, image, title } = props;
    const {token: {colorBorderBg}} = theme.useToken()


    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative">
                <Image src={frame.src} alt={frame.alt} preview={false} />
                <Image rootClassName="block absolute -top-12" src={image.src} alt={image.alt} preview={false} />
            </div>
            <Typography.Text className="font-bold text-lg" style={{color: colorBorderBg}}>{title}</Typography.Text>
        </div>
    );
};
