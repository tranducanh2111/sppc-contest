import React from 'react'
import Image from 'next/image'
import correct from 'public/correct.svg'
import wrong from 'public/wrong.svg'

interface AnswerKeyProps {
  question: number
  answer: string
  result: string
}

const AnswerKey: React.FC<AnswerKeyProps> = ({
  question,
  answer,
  result,
}: AnswerKeyProps) => {
  const container = 'flex px-[15px] py-1 rounded-lg border border-[#F5F5F5]'

  return (
    <div className="flex items-center gap-2">
      <div className="flex w-8 h-8 justify-center items-center rounded-full bg-primary">
        <p className="text-footnote text-white">{question}</p>
      </div>

      {result === answer ? (
        <div className={`${container} gap-[7px]`}>
          <Image src={correct} width={14} height={14} alt="correct" />
          <p className="text-body text-black/[0.85]">{result}</p>
        </div>
      ) : (
        <>
          <div className={`${container} gap-[7px]`}>
            <Image src={wrong} width={14} height={14} alt="wrong" />
            <p className="text-body text-black/[0.85]">{answer}</p>
          </div>
          <div className={container}>
            <p className="text-body text-[#52C41A]">{result}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default AnswerKey
