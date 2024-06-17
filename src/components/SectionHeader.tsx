import React from 'react';
import Tab from "@/components/Tab";
import Button from './Button';
import ThinArrow from "./../../public/thin-arrow.svg"

// Define the type for individual test data
type TestData = {
    imageURL: string;
    name: string;
    descriptions: string;
    testURL: string;
};

// Define the type for the test overview data
type TestOverview = {
    [key: string]: TestData[];
};

type BaseHeadingSectionProps = {
    headingText: string; // Prop for the heading text
    paragraphText: string; // Prop for the paragraph text
    viewMoreLink: string; // Prop for the View More link URL
};

type WithFilterBarProps = BaseHeadingSectionProps & {
    showFilterBar: true; // Indicate that FilterBar is required
    categories: string[];
    selectedCategoryIndex: number;
    setSelectedCategoryIndex: (index: number) => void;
    setFilteredData: (data: TestData[]) => void;
    inputData: TestOverview;
};

type WithoutFilterBarProps = BaseHeadingSectionProps & {
    showFilterBar: false; // Indicate that FilterBar is not required
};

type HeadingSectionProps = WithFilterBarProps | WithoutFilterBarProps;

// Type guard to check if the props are WithFilterBarProps
function isWithFilterBarProps(props: HeadingSectionProps): props is WithFilterBarProps {
    return props.showFilterBar;
}

// Define the HeadingSection component
const HeadingSection: React.FC<HeadingSectionProps> = (props) => {
    const {
        headingText,
        paragraphText,
        viewMoreLink,
        showFilterBar,
    } = props;

    return (
        <div className="xs:mb-[3rem] mb-[2rem] w-full flex flex-col flex-wrap sm:flex-row justify-between items-center space-y-[12px]">
            <div className='w-full max-w-[662px] min-w-fit flex-1'>
                <h2 className="text-h2 text-primary mb-[4px] max-w-[418px]">{headingText}</h2>
                <p className="text-body text-grey line-[22px] max-w-[662px]">
                    {paragraphText}
                </p>
                {/* Conditionally render FilterBar */}
                {showFilterBar && isWithFilterBarProps(props) && (
                    <Tab
                        categories={props.categories}
                        inputData={props.inputData}
                        selectedCategoryIndex={props.selectedCategoryIndex}
                        setSelectedCategoryIndex={props.setSelectedCategoryIndex}
                        setFilteredData={props.setFilteredData}
                    />
                )}
            </div>
            {/* View More button */}
            <a href={viewMoreLink} className="flex items-center max-w-content min-w-fit h-[30px] text-primary px-1 py-[4px] rounded-[2px] ml-auto">
                <Button className='font-medium' icon={ThinArrow} title='View more'/>
            </a>
        </div>
    );
};

export default HeadingSection;