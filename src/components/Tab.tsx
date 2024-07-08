import React, { useRef, useEffect } from 'react';
import Button from '@/components/Button';
import PreviousArrowSvg from 'public/previous-arrow.svg';
import NextArrowSvg from 'public/next-arrow.svg';

const Tab = ({
    categories,
    selectedCategoryIndex = -1,
    setSelectedCategoryIndex,
}: {
    categories: any;
    selectedCategoryIndex: any;
    setSelectedCategoryIndex: any;
}) => {
    const filterButtonContainerRef = useRef<HTMLDivElement | null>(null);
    const selectedButtonRef = useRef<HTMLButtonElement | null>(null);

    const handleNextCategory = () => {
        const nextIndex = (selectedCategoryIndex + 1) % categories.length;
        setSelectedCategoryIndex(nextIndex);
    };

    const handlePreviousCategory = () => {
        const previousIndex = (selectedCategoryIndex - 1 + categories.length) % categories.length;
        setSelectedCategoryIndex(previousIndex);
    };

    useEffect(() => {
        if (selectedButtonRef.current) {
            selectedButtonRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest'
            });
        }
    }, [selectedCategoryIndex]);

    return (
        <div className={`w-full grid grid-cols-tab mt-[5px] gap-x-1 hide-scrollbar`}>
            <Button icon={PreviousArrowSvg} onClick={handlePreviousCategory} className='w-[46px] hover:bg-secondary bg-primary'/>
            <div className={`overflow-x-auto whitespace-nowrap space-x-1 flex items-center hide-scrollbar`} ref={filterButtonContainerRef}>
                <Button
                    title="All"
                    onClick={() => setSelectedCategoryIndex(-1)}
                    className={`h-[36px] px-[12px] text-sm max-w-content border border-solid hover:opacity-70 ${selectedCategoryIndex === -1 ? 'text-primary bg-secondary border-primary' : 'text-[#000000] border-[#000000] opacity-50'}`}
                    ref={selectedCategoryIndex === -1 ? selectedButtonRef : null}
                />
                {categories.map((category : any, index : any) => (
                    <Button
                        key={category}
                        title={category}
                        onClick={() => setSelectedCategoryIndex(index)}
                        className={`h-[36px] px-[12px] text-sm max-w-content border border-solid hover:opacity-70 ${selectedCategoryIndex === index ? 'text-primary bg-secondary border-primary' : 'text-[#000000] border-[#000000] opacity-50'}`}
                        ref={selectedCategoryIndex === index ? selectedButtonRef : null}
                    />
                ))}
            </div>
            <Button icon={NextArrowSvg} onClick={handleNextCategory} className='h-[36px] w-[46px] px-[15px] py-[6px] hover:bg-secondary bg-primary' />
        </div>
    );
};

export default Tab;