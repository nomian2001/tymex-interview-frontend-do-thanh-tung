import { Image } from 'antd';

import { ImageProps } from './types.ts';

interface FigureWidgetProps {
    frame: ImageProps;
    image: ImageProps;
    title: string;
}

export const FigureWidget: React.FC<FigureWidgetProps> = props => {
    const { frame, image, title } = props;
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative">
                <Image src={frame.src} alt={frame.alt} preview={false} />
                <Image rootClassName="block absolute -top-12" src={image.src} alt={image.alt} preview={false} />
            </div>
            <span className="font-bold">{title}</span>
        </div>
    );
};
