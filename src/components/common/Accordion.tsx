import { useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

export interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className={cn('accordion', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question} className={cn('accordion-item faq-item', isOpen && 'open')}>
            <button
              type="button"
              className="accordion-toggle faq-toggle"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <CaretDown
                size={18}
                className={cn('accordion-icon faq-icon', isOpen && 'rotate-180')}
              />
            </button>
            <div className="accordion-content faq-content">
              <p>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
