'use client';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { Progress } from '@nextui-org/progress';
import { cn } from '@nextui-org/theme';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const chartData = [
  { grade: 4, date: new Date() },
  { grade: 2, date: new Date() },
  { grade: 1, date: new Date() },
  { grade: 4, date: new Date() },
  { grade: 5, date: new Date() },
  { grade: 10, date: new Date() }
];
const chartConfig = {
  desktop: {
    color: '#FF0000'
  }
} satisfies ChartConfig;

export default function GradesCard({
  grades,
  className = ''
}: {
  grades: {
    value: number;
    teacher: string;
    date: Date;
  }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl bg-white px-4 pb-5 pt-4',
        className
      )}
    >
      <div className='flex items-center text-xs font-semibold text-primary-600'>
        <i className='fa fa-chart-simple pr-2 text-xl' />
        <label>Grades</label>
      </div>
      <ChartContainer className='py-8' config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='date'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value: Date) =>
              `${('0' + value.getDate()).slice(-2)}.${('0' + (value.getMonth() + 1)).slice(-2)}`
            }
          />
          <YAxis
            dataKey='grade'
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            domain={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            tickCount={10}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey='grade'
            label='test'
            type='linear'
            stroke='#5d71d4'
            strokeWidth={4}
            dot={true}
            fill='#5d71d4'
          />
        </LineChart>
      </ChartContainer>
      <div className='flex justify-between gap-4'>
        <div className='flex max-w-40 grow flex-col gap-2'>
          <h3 className='text-[0.875rem] font-semibold text-primary-600'>
            Grade
          </h3>
          <div className='flex flex-col gap-1'>
            {grades.map((grade, index) => (
              <div key={index} className='flex items-center gap-2'>
                <label>{grade.value}</label>
                <Progress
                  classNames={{
                    indicator: 'bg-secondary-500'
                  }}
                  value={grade.value}
                  maxValue={10}
                  size='sm'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-[0.875rem] font-semibold text-primary-600'>
            Teacher
          </h3>
          <div className='flex flex-col gap-1'>
            {grades.map((grade, index) => (
              <div key={index} className='flex items-center gap-2'>
                <label className='text-[0.875rem] font-semibold text-primary-900'>
                  {grade.teacher}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-[0.875rem] font-semibold text-primary-600'>
            Date
          </h3>
          <div className='flex flex-col gap-1'>
            {grades.map((grade, index) => (
              <div key={index} className='flex items-center gap-2'>
                <label className='text-[0.875rem] font-semibold text-primary-900'>
                  {grade.date.toDateString()}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
