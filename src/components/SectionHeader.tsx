import React from 'react';
import Tab from "@/components/Tab";
import Button from '@/components/Button';
import ThinArrow from "public/thin-arrow.svg"

// Define the type for individual test data
type TestData = {
    productType: string;
    imageURL: string;
    name: string;
    descriptions: string;
    productURL: string;
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
    setSelectedCategoryIndex: any;
    setFilteredData: any;
    inputData: TestOverview;
};

type WithoutFilterBarProps = BaseHeadingSectionProps & {
    showFilterBar: false; // Indicate that FilterBar is not required
    categories?: string[];
    selectedCategoryIndex?: number;
    setSelectedCategoryIndex?: any;
    setFilteredData?: any;
    inputData?: TestOverview;
};

type HeadingSectionProps = WithFilterBarProps | WithoutFilterBarProps;

// Define the HeadingSection component
const SectionHeader = ({
    headingText,
    paragraphText,
    viewMoreLink,
    showFilterBar,
    categories,
    selectedCategoryIndex,
    setSelectedCategoryIndex,
}: HeadingSectionProps) => {
    return (
        <div className="mb-[24px] w-full flex flex-col flex-wrap md:flex-row justify-between items-center space-y-[12px]">
            <div className='w-full sm:max-w-[512px] space-y-[12px]'>
                <h2 className="text-h2 mb-[4px] max-w-[418px] font-bold">{headingText}</h2>
                <p className="text-body text-grey line-[22px] max-w-[512px]">
                    {paragraphText}
                </p>
                {/* Conditionally render FilterBar */}
                {showFilterBar && (
                    <Tab
                        categories={categories}
                        selectedCategoryIndex={selectedCategoryIndex}
                        setSelectedCategoryIndex={setSelectedCategoryIndex}
                    />
                )}
            </div>
            {/* View More button */}
            <a href={viewMoreLink} className="flex items-center max-w-content h-[30px] text-primary px-1 py-[4px] rounded-[2px] ml-auto hover:scale-[1.1] transition duration-200 ease-in-out">
                <Button className='text-primary' icon={ThinArrow} title='View more'/>
            </a>
        </div>
    );
};

export default SectionHeader;