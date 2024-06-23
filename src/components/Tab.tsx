// import React, { useEffect, useRef } from 'react';
// import Button from '@/components/Button';
// import PreviousArrowSvg from '../../public/previous-arrow.svg';
// import NextArrowSvg from '../../public/next-arrow.svg';

// type TestData = {
//     imageURL: string;
//     name: string;
//     descriptions: string;
//     testURL: string;
// };

// type inputData = {
//     [key: string]: TestData[];
// };

// const Tab = ({
//     categories,
//     selectedCategoryIndex,
//     setSelectedCategoryIndex,
//     setFilteredData,
//     inputData,
// }: {
//     categories: string[];
//     selectedCategoryIndex: number;
//     setSelectedCategoryIndex: (index: number) => void;
//     setFilteredData: (data: TestData[]) => void;
//     inputData: inputData;
// }) => {
//     const filterButtonContainerRef = useRef<HTMLDivElement | null>(null);

//     useEffect(() => {
//         const selectedCategory = categories[selectedCategoryIndex];
//         const filteredPeople = selectedCategory
//         ? inputData[selectedCategory]
//         : Object.values(inputData).flat();
//         setFilteredData(filteredPeople);
//     }, [selectedCategoryIndex, categories, inputData, setFilteredData]);

//     const handleNextCategory = () => {
//         const nextIndex = (selectedCategoryIndex + 1) % categories.length;
//         setSelectedCategoryIndex(nextIndex);
//     };

//     const handlePreviousCategory = () => {
//         const previousIndex = (selectedCategoryIndex - 1 + categories.length) % categories.length;
//         setSelectedCategoryIndex(previousIndex);
//     };

//     return (
//         <div className={`w-full flex items-center mt-[5px] space-x-1 hide-scrollbar`}>
//             <Button icon={PreviousArrowSvg} onClick={handlePreviousCategory} className='bg-primary h-[36px] w-[46px] px-[15px] py-[6px]' />
//             <div className={`overflow-x-auto whitespace-nowrap space-x-1 flex items-center hide-scrollbar`} ref={filterButtonContainerRef}>
//                 {categories.map((category, index) => (
//                     <Button
//                         key={category}
//                         title={category}
//                         onClick={() => setSelectedCategoryIndex(index)}
//                         className={`h-[36px] px-[12px] text-sm max-w-content border border-solid ${selectedCategoryIndex === index ? 'bg-secondary text-primary border-primary' : 'border-[#000000] opacity-50'}`}
//                     />
//                 ))}
//             </div>
//             <Button icon={NextArrowSvg} onClick={handleNextCategory} className='bg-primary h-[36px] w-[46px] px-[15px] py-[6px]' />
//         </div>
//     );
// };

// export default Tab;
