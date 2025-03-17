import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const items = [
  {
    id: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    id: 'item-2',
    title: 'Is it accessible 2?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    id: 'item-3',
    title: 'Is it accessible 3?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
];

const Page = () => {
  return (
    <Accordion type="single">
      {items.map((item) => (
        <AccordionItem
          value={item.id}
          key={item.id}
        >
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Page;
