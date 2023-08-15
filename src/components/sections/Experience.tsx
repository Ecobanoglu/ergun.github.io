import { Card, Section, Timeline } from "@/components/ui";

interface TimelineProps {
  title: string;
  company?: string;
  time?: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  tags: string[];
}

export default function Experience({ title, data }: any) {
  return (
    <Section title={title} className="bg-primary-100 dark:bg-gray-900 lg:pt-40">
      <div className="-my-6 flex flex-col">
        {data.map((item: TimelineProps, key: number) => (
          <Timeline
            key={key}
            data={item}
            direction={key % 2 == 0 ? "left" : "right"}
          />
        ))}
      </div>
    </Section>
  );
}
