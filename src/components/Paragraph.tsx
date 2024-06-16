import React from "react";

interface ParagraphProps {
    title: string;
    description: string;
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
    title,
    description,
    className,
    titleClassName,
    descriptionClassName,
}: ParagraphProps) => {
    // Create a function to safely render the HTML content
    const renderHtml = (htmlString: string) => {
        return { __html: htmlString };
    };

    return (
        <div className={`flex flex-col items-start ${className}`}>
            <h2 className={`text-left ${titleClassName}`}>{title}</h2>
            <div className="h-[50vh] overflow-y-scroll">
                <div
                    className={`text-justify ${descriptionClassName} w-[98%] mr-auto`}
                    dangerouslySetInnerHTML={renderHtml(description)}
                ></div>
            </div>
        </div>
    );
}

export default Paragraph;
