import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className='bg-slate-300 py-80  w-full text-xl text-center text-gray-700 flex items-center justify-center font-bold '> Cool reveal text on scroll animation with only css</div>
    <section className='scroll-reveal  py-96 flex justify-center items-center flex-col '>
      <h3 className='section-title font-black text-3xl text-center mb-6'>
        <span>The React Framework for the Web</span></h3>
      <p className='max-w-3xl'>
              <span className='text-center text-justify max-w-3xl font-medium text-lg'>Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.</span>
      </p>

    </section>
    <div className='bg-slate-300 py-24  w-full text-xl text-center text-gray-700 flex items-center justify-center font-bold '> so you can scroll ^^</div>
    </>
  )
}
