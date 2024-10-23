import React from "react";
import classNames from "classnames";

function DonutChart({ className, primaryColor, shadeColor }) {
    const compClass = classNames({
        "h-full": !className,
        [`${className}`]: className,
    });
    const primaryColorClass = classNames({
        "fill-blue-600": !primaryColor,
        [`${primaryColor}`]: primaryColor,
    });
    const shadeColorClass = classNames({
        "fill-blue-300": !shadeColor,
        [`${shadeColor}`]: shadeColor,
    });
    return (
        <>
            {/* prettier-ignore */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={compClass}>
                <path className={shadeColorClass} d="M11 4.99999C11 4.4477 10.5509 3.99424 10.002 4.05548C8.57508 4.21469 7.20175 4.7137 5.99987 5.51676C4.51983 6.50569 3.36628 7.9113 2.68509 9.55584C2.0039 11.2004 1.82567 13.01 2.17294 14.7558C2.5202 16.5016 3.37737 18.1053 4.63604 19.3639C5.89472 20.6226 7.49836 21.4798 9.24419 21.8271C10.99 22.1743 12.7996 21.9961 14.4442 21.3149C16.0887 20.6337 17.4943 19.4802 18.4832 18.0001C19.2863 16.7982 19.7853 15.4249 19.9445 13.9979C20.0057 13.4491 19.5523 13 19 13H15.0079C14.4556 13 14.0234 13.4596 13.8432 13.9817C13.7596 14.2239 13.6449 14.4557 13.501 14.6711C13.1705 15.1657 12.7007 15.5513 12.1511 15.7789C11.6015 16.0066 10.9967 16.0661 10.4132 15.9501C9.82972 15.834 9.29376 15.5476 8.8731 15.1269C8.45244 14.7062 8.16597 14.1703 8.04991 13.5868C7.93385 13.0033 7.99341 12.3985 8.22107 11.8489C8.44873 11.2993 8.83426 10.8295 9.32891 10.499C9.54426 10.3551 9.77608 10.2404 10.0183 10.1568C10.5404 9.97655 11 9.54438 11 8.99209V4.99999Z"/>
                <path className={primaryColorClass} d="M21 11C21.5523 11 22.0057 10.5509 21.9445 10.002C21.8509 9.16274 21.6394 8.33912 21.3149 7.55583C20.8626 6.4639 20.1997 5.47175 19.364 4.63602C18.5282 3.8003 17.5361 3.13736 16.4442 2.68507C15.6609 2.36062 14.8372 2.14912 13.9979 2.05548C13.4491 1.99424 13 2.4477 13 2.99998V6.99209C13 7.54438 13.4596 7.97655 13.9817 8.1568C14.0387 8.17648 14.0952 8.19791 14.1511 8.22105C14.516 8.37221 14.8476 8.59377 15.1269 8.87308C15.4062 9.15239 15.6278 9.48398 15.7789 9.84891C15.8021 9.90479 15.8235 9.96128 15.8432 10.0183C16.0234 10.5403 16.4556 11 17.0079 11H21Z"/>
            </svg>
        </>
    );
}

export default DonutChart;
