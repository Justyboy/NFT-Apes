import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: '🌟 Test Preparation:',
    description:
      `"Whether it's standardized tests, exams, or quizzes, I offer comprehensive test preparation strategies.
       Boost your confidence and performance through targeted test-taking techniques and practice."`,

  },
  {
    name: '🤓 Fun Learning Activities:',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    
  },
  {
    name: '📊 Progress Tracking:',
    description: 'Stay informed about your progress with regular updates and feedback. I believe in transparent communication to ensure you are on the right track and achieving your academic goals.',
  
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden py-20 bg-[#151d34] mb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-[#44b39d] ">Learn faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Personalized tutoring tailored to every student's unique learning journey</p>
              <p className="mt-6 text-lg leading-8 text-gray-100">
              
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-100 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative ">
                    <dt className="inline font-semibold text-gray-100">
                      {/* <feature.icon className="absolute left-1 top-1 h-5 w-5 text-[#44b39d] " aria-hidden="true" /> */}
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image  src="/teacherstudentcrop.jpeg" 
          alt="girl"   width={2432}
          height={942}
          className="rounded-3xl max-h-[600px] w-[400px]" /> 

        </div>
      </div>
    </div>
  )
}
