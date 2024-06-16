import React,{useEffect,useState} from 'react'
import Button from './Button'
import LeftArrow from 'public/leftarrow.svg'
import RightArrow from 'public/rightarrow.svg'

interface CategoryProps {
  categoryList: string[],
  selectedCategory: number,
  // eslint-disable-next-line no-unused-vars
  onClick: (index: number) => void
}
const Category: React.FC<CategoryProps> = ({ categoryList,selectedCategory, onClick }) => {
  const [slidePerview, setSlidePerview] = useState(3);

  useEffect(() => {
    // Function to update slidePerview based on screen width
    const updateSlidePerview = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1200) {
        setSlidePerview(3); // Adjust the value for larger screens
      } else if (screenWidth >= 768) {
        setSlidePerview(2); // Adjust the value for medium screens
      } else {
        setSlidePerview(1); // Adjust the value for smaller screens
      }
    };

    // Initial update
    updateSlidePerview();

    // Listen for window resize events
    window.addEventListener('resize', updateSlidePerview);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSlidePerview);
    };
  }, []);

  const totalCategories = categoryList.length

  const [slideIndex, setSlideIndex] = React.useState(0)

  // Use selectedCategory as an index to the categoryList

  const handleLeftClick = () => {
    const newSlideIndex = (slideIndex - 1 + totalCategories) % totalCategories
    setSlideIndex(newSlideIndex)

    // Adjust selectedCategory to match the new position in the list
    const newSelectedCategory =
      (selectedCategory - 1 + totalCategories) % totalCategories
    onClick(newSelectedCategory)
  }

  const handleRightClick = () => {
    const newSlideIndex = (slideIndex + 1) % totalCategories
    setSlideIndex(newSlideIndex)

    // Adjust selectedCategory to match the new position in the list
    const newSelectedCategory = (selectedCategory + 1) % totalCategories
    onClick(newSelectedCategory)
  }

  return (
    <div className="Category items-center justify-start flex mt-[4px] relative">
      <Button
        icon={LeftArrow}
        className="bg-primary py-[8px]"
        onClick={handleLeftClick}
      />
      <div className={`flex items-center justify-start sm:mx-[0px]`}>
        {categoryList.map((item, index) => {
          // Calculate the adjusted index to loop through the categories
          const adjustedIndex = (slideIndex + index) % totalCategories
          return (
            index < slidePerview && (
              <Button
                key={adjustedIndex}
                title={categoryList[adjustedIndex]}
                className={`mx-[3px] py-[6px] border-[1px] text-[14px] sm:!px-[12px] ${
                  adjustedIndex === selectedCategory
                    ? 'border-primary text-primary bg-[#FFE8DF]'
                    : 'border-secondary text-[#00000073] bg-white '
                } px-[2px] sm:px-[12px]`}
                onClick={() => onClick(adjustedIndex)}
              />
            )
          )
        })}
      </div>
      <Button
        icon={RightArrow}
        className="bg-primary py-[8px]"
        onClick={handleRightClick}
      />
    </div>
  )
}

export default Category
