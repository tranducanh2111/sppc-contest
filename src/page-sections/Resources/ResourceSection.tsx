import React, { useState, useEffect } from 'react';
import testOverviewData from '@/sample_data/testOverview.json';
import HeadingSection from '@/components/SectionHeader';
import BlogCard from '@/components/BlogCard';

type BlogData = {
    imageURL: string;
    name: string;
    descriptions: string;
    articleURL: string;
	price: number;
    authorName: string;
    publishDate: string;
	productType: string
};

const ResourceSection = ({sectionName, description, viewMoreLink, showFilter} : {sectionName : string, description : string, viewMoreLink : string, showFilter : boolean}) => {
    const testOverview: any = testOverviewData;
    const categories = Object.keys(testOverview);

    // Pagination variables
    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);

    // Filter variables
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const [filteredData, setFilteredData] = useState<BlogData[]>([]);
	

	// Calculate the range of items to display on the current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const itemsToShow = filteredData.slice(startIndex, endIndex);

	const totalPages = Math.ceil(filteredData.length / itemsPerPage);

	// Handle page change		
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

	useEffect(() => {
		// Initialize filtered data when the component mounts
		const selectedCategory = categories[selectedCategoryIndex];
		const filteredPeople = selectedCategory
		? testOverview[selectedCategory]
		: Object.values(testOverview).flat();
		setFilteredData(filteredPeople);
	}, [selectedCategoryIndex, categories]);

	return (
    <section className='w-full'>
		<div className="flex flex-col justify-center lg:p-0">
            {/* Heading Section */}
            <HeadingSection
                categories={categories}
                inputData={testOverview}
                selectedCategoryIndex={selectedCategoryIndex}
                setSelectedCategoryIndex={setSelectedCategoryIndex}
                setFilteredData={setFilteredData}
                headingText={sectionName}
                paragraphText={description}
                viewMoreLink={viewMoreLink}
                showFilterBar={showFilter}
            />
            <div className="pagination-bar hidden">
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1}
                    className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
                    onClick={() => handlePageChange(i + 1)}
                >
                {i + 1}
                </button>
            ))}
            </div>
		</div>
		<div className="grid grid-cols-auto-fit place-items-center box-border gap-[2rem]">
            {itemsToShow.map((item, index) => {
                // Find the category of the current item
                const category = categories.find(category => testOverview[category].includes(item)) || 'Uncategorized';
                return (
                    <BlogCard
                        key={index}
                        category={category}
                        imageURL={item.imageURL}
                        name={item.name}
                        descriptions={item.descriptions}
                        author={item.authorName}
                        publishDate={item.publishDate}
                        testURL={item.articleURL}
                        buttonText='Read Article'
                    />
                );
            })}
        </div>
  	</section>
	);
};

export default ResourceSection;