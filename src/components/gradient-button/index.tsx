import { Button, ButtonProps } from "antd";
import classNames from "classnames";
import React from "react";

interface IGradientButton extends ButtonProps {
    isActive?: boolean;
}

export const GradientButton = React.forwardRef<HTMLButtonElement, IGradientButton>((props, ref) => {
    const { children, isActive, ...restProps } = props;

    return (
        <Button
            {...restProps}
            ref={ref} // Pass the ref to the underlying Button component
            className={classNames(
                "bg-gradient-button hover:!bg-active-gradient-button hover:bg-transparent hover:!text-white hover:border-none",
                {
                    "opacity-40 hover:bg-active-gradient-button hover:opacity-100": !isActive,
                    "opacity-100": isActive,
                },
                restProps.className
            )}
        >
            {children}
        </Button>
    );
});
