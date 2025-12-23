import React from 'react';

interface SectionHeadingProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    center?: boolean;
    className?: string;
    titleClassName?: string;
    subtitleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
    title,
    subtitle,
    center = true,
    className = '',
    titleClassName = '',
    subtitleClassName = '',
}) => {
    return (
        <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
            <h2 className={`text-3xl md:text-[40px] font-bold text-[#0961A1] mb-6 ${titleClassName}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-gray-600 leading-relaxed ${subtitleClassName}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
