import { PEMBINA } from '@/constants';
import Image from 'next/image';

const Pembina = () => {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 xl:flex-row bg-[#f0f0f0]">
      <div className="text-center bold-32 text-black pb-20">
        <div style={{ fontSize: '24px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', marginBottom: '-10px' }}>
          Rewana Tim
        </div>
        <br/>
        <p className='text-center bold-18 text-black'>Dosen Pembina Tim Rewana Innovillage 2023</p>
      </div>
      <ul className="mt-5 grid gap-20 md:grid-cols-2 lg:grid-cols-3 md:gap-12" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        {PEMBINA.map((tim) => (
          <TimItem
            key={tim.title}
            icon={tim.icon}
            title={tim.title}
            description={tim.description}
          />
        ))
        }
      </ul>
    </section>
  )
}

type TimItemProps = {
  title: string;
  icon: string;
  description: string;
}

const TimItem = ({ title, icon, description }: TimItemProps) => {
  return (
    <li className="relative flex-center w-full items-center text-center shadow-[0_35px_40px_-15px_rgba(0,0,0,0.3)] rounded-2xl p-20 hover:bg-blue-500 group duration-[1200ms] transition min-h-[200px]">
      <div className="rounded-full p-5 bg-blue-500 absolute -top-8 left-1/2 transform -translate-x-1/2 group-hover:bg-black">
        <Image
          src={icon}
          alt="map"
          width={28}
          height={28}
          />
      </div>
      <h3 className="bold-20 lg:bold-22 mt-6 capitalize group-hover:text-white">{title}</h3>
      <p className="regular-16 text-gray-30 mt-4 group-hover:text-white">{description}</p>
    </li>
  )
}

export default Pembina