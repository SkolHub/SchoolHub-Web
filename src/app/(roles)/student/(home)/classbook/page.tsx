import { Progress } from '@nextui-org/progress';
import { cn } from '@nextui-org/theme';

const subjects: {
  icon: string;
  title: string;
  grades: number;
  maxGrades: number;
  average: number;
}[] = [
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  }
];

const subject = {
  title: 'Informatică',
  teachers: ['teacher 1', 'teacher 2'],
  icon: 'leaf',
  grades: [
    {
      value: 10,
      teacher: 'teacher 1',
      date: new Date()
    },
    {
      value: 10,
      teacher: 'teacher 1',
      date: new Date()
    },
    {
      value: 10,
      teacher: 'teacher 1',
      date: new Date()
    },
    {
      value: 10,
      teacher: 'teacher 1',
      date: new Date()
    }
  ],
  absences: [
    {
      excused: true,
      teacher: 'teacher 1',
      date: new Date()
    },
    {
      excused: true,
      teacher: 'teacher 1',
      date: new Date()
    },
    {
      excused: false,
      teacher: 'teacher 1',
      date: new Date()
    },
    {
      excused: true,
      teacher: 'teacher 1',
      date: new Date()
    }
  ]
};

export default function Classbook() {
  const subjectSelected = true;
  const selected = 1;

  return (
    <div className='flex h-full w-full overflow-hidden'>
      <div className='h-full w-[30rem] overflow-y-auto overflow-x-hidden rounded-l-[1.25rem] bg-white px-4 pt-7'>
        <h1 className='pl-2 text-xl font-semibold text-primary-900'>
          Overall average -{' '}
          {(
            subjects.reduce(
              (accumulator, currentValue) => accumulator + currentValue.average,
              0
            ) / subjects.length
          ).toFixed(2)}
        </h1>
        <div>
          {subjects.map((subject, index) => (
            <div
              key={index}
              className={cn(
                'flex items-center rounded-[0.635rem] px-1.5',
                index === selected ? 'bg-secondary-500' : ''
              )}
            >
              <img className='w-9' src={`/${subject.icon}.png`} alt='icon' />
              <div className='flex grow items-center justify-between gap-4 border-b-1 border-b-black/5 py-2.5'>
                <h3
                  className={cn(
                    'text-[0.9375rem] font-semibold',
                    index === selected ? 'text-primary-50' : 'text-primary-900'
                  )}
                >
                  {subject.title}
                </h3>
                <div className='flex gap-4'>
                  <div className='flex flex-col items-center'>
                    <label
                      className={cn(
                        'text-[0.9375rem] font-semibold',
                        index === selected
                          ? 'text-primary-50'
                          : 'text-primary-900'
                      )}
                    >
                      {subject.grades}/{subject.maxGrades}
                    </label>
                    <span
                      className={cn(
                        'text-[0.6875rem] font-medium',
                        index === selected
                          ? 'text-primary-100'
                          : 'text-primary-700'
                      )}
                    >
                      grades
                    </span>
                  </div>
                  <div className='flex flex-col items-center'>
                    <label
                      className={cn(
                        'text-[0.9375rem] font-semibold',
                        index === selected
                          ? 'text-primary-50'
                          : 'text-primary-900'
                      )}
                    >
                      {subject.average}
                    </label>
                    <span
                      className={cn(
                        'text-[0.6875rem] font-medium',
                        index === selected
                          ? 'text-primary-100'
                          : 'text-primary-700'
                      )}
                    >
                      average
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex h-full grow flex-col gap-4 overflow-y-auto overflow-x-hidden rounded-r-[1.25rem] bg-white/60 p-[1.875rem]'>
        {subjectSelected ? (
          <>
            <SubjectCard
              {...subject}
              grades={2}
              maxGrades={3}
              average={10}
              absences={5}
              unexcusedAbsences={1}
              assessmentChance={22}
            />
            <GradesCard grades={subject.grades} />
            <AbsencesCard absences={subject.absences} />
          </>
        ) : (
          <h1 className='flex h-full w-full items-center justify-center text-[2rem] font-semibold text-primary-400'>
            No subject selected
          </h1>
        )}
      </div>
    </div>
  );
}

function SubjectCard({
  title,
  icon,
  teachers,
  grades,
  maxGrades,
  average,
  absences,
  unexcusedAbsences,
  assessmentChance
}: {
  title: string;
  icon: string;
  teachers: string[];
  grades: number;
  maxGrades: number;
  average: number;
  absences: number;
  unexcusedAbsences: number;
  assessmentChance: number;
}) {
  return (
    <div>
      <div className='flex flex-col gap-5 rounded-2xl bg-white px-5 pb-6 pt-5'>
        <div className='flex items-center'>
          <img className='h-9' src={`/${icon}.png`} alt='icon' />
          <div className='flex flex-col'>
            <h3 className='text-base font-semibold leading-tight text-primary-900'>
              {title}
            </h3>
            <label className='text-xs font-semibold text-primary-700'>
              {teachers.join(', ')}
            </label>
          </div>
        </div>
        <div className='flex items-start'>
          <div className='flex grow basis-0 flex-col items-center'>
            <label className='text-base font-semibold text-green-600'>
              {grades}/{maxGrades}
            </label>
            <span className='text-center text-xs font-medium text-primary-700'>
              grades
            </span>
          </div>
          <div className='border-left-white/70 h-10 self-center border-l-1' />
          <div className='flex grow basis-0 flex-col items-center'>
            <label className='text-base font-semibold text-green-600'>
              {average}
            </label>
            <span className='text-center text-xs font-medium text-primary-700'>
              average
            </span>
          </div>
          <div className='border-left-white/70 h-10 self-center border-l-1' />
          <div className='flex grow basis-0 flex-col items-center'>
            <label className='text-base font-semibold text-red-600'>
              {absences}
            </label>
            <span className='text-center text-xs font-medium text-primary-700'>
              absences
            </span>
          </div>
          <div className='border-left-white/70 h-10 self-center border-l-1' />
          <div className='flex grow basis-0 flex-col items-center'>
            <label className='text-base font-semibold text-red-600'>
              {unexcusedAbsences}
            </label>
            <span className='text-center text-xs font-medium text-primary-700'>
              unexcused absences
            </span>
          </div>
          <div className='border-left-white/70 h-10 self-center border-l-1' />
          <div className='flex grow basis-0 flex-col items-center'>
            <label className='text-base font-semibold text-yellow-600'>
              {assessmentChance}%
            </label>
            <span className='text-center text-xs font-medium text-primary-700'>
              change of assessment
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function GradesCard({
  grades
}: {
  grades: {
    value: number;
    teacher: string;
    date: Date;
  }[];
}) {
  return (
    <div className='flex flex-col rounded-2xl bg-white px-4 pb-5 pt-4'>
      <div className='flex items-center text-xs font-semibold text-primary-600'>
        <i className='fa fa-chart-simple pr-2 text-xl' />
        <label>Grades</label>
      </div>
      <div></div>
      <div className='flex justify-between gap-4'>
        <div className='flex max-w-40 grow flex-col'>
          <h3 className='text-[0.875rem] font-semibold text-primary-600'>
            Grade
          </h3>
          <div className='flex flex-col gap-1'>
            {grades.map((grade) => (
              <div className='flex items-center gap-2'>
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
        <div className='flex flex-col'>
          <h3 className='text-[0.875rem] font-semibold text-primary-600'>
            Teacher
          </h3>
          <div className='flex flex-col gap-1'>
            {grades.map((grade) => (
              <div className='flex items-center gap-2'>
                <label className='text-[0.875rem] font-semibold text-primary-900'>
                  {grade.teacher}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-[0.875rem] font-semibold text-primary-600'>
            Date
          </h3>
          <div className='flex flex-col gap-1'>
            {grades.map((grade) => (
              <div className='flex items-center gap-2'>
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

function AbsencesCard({
  absences
}: {
  absences: {
    excused: boolean;
    teacher: string;
    date: Date;
  }[];
}) {
  return (
    <div className='flex flex-col rounded-2xl bg-white px-4 pb-5 pt-4'>
      <div className='flex items-center text-xs font-semibold text-primary-600'>
        <i className='fa fa-calendar pr-2 text-xl' />
        <label>Absences</label>
      </div>
      <div></div>
      <div className='flex justify-between gap-4'>
        <div className='flex max-w-40 grow flex-col'>
          <h3 className='text-[0.875rem] font-semibold text-primary-600'>
            Date
          </h3>
          <div className='flex flex-col gap-1'>
            {absences.map((absence) => (
              <div className='flex items-center gap-2'>
                <label className='text-[0.875rem] font-semibold text-primary-900'>
                  {absence.date.toDateString()}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-[0.875rem] font-semibold text-primary-600'>
            Teacher
          </h3>
          <div className='flex flex-col gap-1'>
            {absences.map((absence) => (
              <div className='flex items-center gap-2'>
                <label className='text-[0.875rem] font-semibold text-primary-900'>
                  {absence.teacher}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-[0.875rem] font-semibold text-primary-600'>
            Excused
          </h3>
          <div className='flex flex-col gap-1'>
            {absences.map((absence) => (
              <>
                {absence.excused ? (
                  <label className='flex items-center gap-2 text-xs font-semibold text-green-500'>
                    <i className='fa fa-check-circle text-xl' />
                    Excused
                  </label>
                ) : (
                  <label className='flex items-center gap-2 text-xs font-semibold text-red-500'>
                    <i className='fa fa-xmark-circle text-xl' />
                    Not excused
                  </label>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
