import React, { useState, useEffect, useRef } from 'react';
import Button from '@/components/Button';
import PreviousArrowSvg from '../../public/previous-arrow.svg';
import NextArrowSvg from '../../public/next-arrow.svg';

// Define a type for the test data
type TestData = {
    imageURL: string;
    name: string;
    descriptions: string;
    testURL: string;
};

// Define a type for the inputData object
type inputData = {
    [key: string]: TestData[];
};

const Tab = ({
    categories,
    selectedCategoryIndex,
    setSelectedCategoryIndex,
    setFilteredData,
    inputData,
}: {
    categories: string[];
    selectedCategoryIndex: number;
    setSelectedCategoryIndex: (index: number) => void;
    setFilteredData: (data: TestData[]) => void;
    inputData: inputData;
}) => {
    // Pagination variables
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const filterButtonContainerRef = useRef<HTMLDivElement | null>(null); // Ref for the filter button container

    // Function to handle category filter changes
    useEffect(() => {
        // Update the filtered data when the selected category changes
        const selectedCategory = categories[selectedCategoryIndex];
        const filteredPeople = selectedCategory
        ? inputData[selectedCategory]
        : Object.values(inputData).flat();
        setFilteredData(filteredPeople);
        setCurrentPage(1); // Reset to the first page when changing filters
    }, [selectedCategoryIndex, categories, inputData, setFilteredData]);

    // Function to handle button click
    const handleButtonClick = (index: number) => {
        setSelectedCategoryIndex(index);
    };

    // Function to navigate to the next category
    const handleNextCategory = () => {
        const nextIndex = (selectedCategoryIndex + 1) % categories.length;
        setSelectedCategoryIndex(nextIndex);
    };

    // Function to navigate to the previous category
    const handlePreviousCategory = () => {
        const previousIndex = (selectedCategoryIndex - 1 + categories.length) % categories.length;
        setSelectedCategoryIndex(previousIndex);
    };

    return (
        <div className={`w-full flex items-center mt-[5px] space-x-1 hide-scrollbar`}>
            {/* Button switch to the previous category */}
            <Button icon={PreviousArrowSvg} onClick={handlePreviousCategory} bgColor='#FF6D33' className='h-[36px] w-[46px] px-[15px] py-[6px]'/>
            <div className={`overflow-x-auto whitespace-nowrap space-x-1 flex items-center hide-scrollbar`} ref={filterButtonContainerRef}>
                {/* Button that allows choosing every topic */}
                {/* <Button
                    label="All"
                    variant={selectedCategoryIndex === -1 ? 'primary' : 'secondary'}
                    onClick={() => setSelectedCategoryIndex(-1)}
                    className='h-[36px] px-[12px] text-sm'
                /> */}
                {/* Button for categories */}
                {categories.map((category, index) => (
                    <Button
                        key={category}
                        title={category}
                        onClick={() => setSelectedCategoryIndex(index)}
                        textColor={`${selectedCategoryIndex === index ? '#FF4800' : '#000000'}`}
                        bgColor={`${selectedCategoryIndex === index ? '#FFE8DF' : '#000000'}`}
                        className={`h-[36px] px-[12px] text-sm max-w-content border border-solid ${selectedCategoryIndex === index ? 'border-[#FF4800]' : 'border-[#000000] opacity-50'}`}
                    />
                ))}
            </div>
            {/* Button switch to the next category */}
            <Button icon={NextArrowSvg} bgColor='#FF6D33' onClick={handleNextCategory} className='h-[36px] w-[46px] px-[15px] py-[6px]' />
        </div>
    );
};

export default Tab;