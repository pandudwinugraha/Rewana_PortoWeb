import React from 'react';

const Tentang = () => {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20" style={{ background: 'linear-gradient(to bottom, #ffffff, #f0f0f0)', paddingLeft: '0', paddingRight: '0' }}>
      <div className="flex-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20" style={{ textAlign: 'center', margin: '0 auto' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          Tentang Rewana
        </div>
      </div>
      <div className="flex flex-row-reverse gap-20 md:gap-28 xl:flex-row">
        <div className="flex-1">
          <img src="/Gambar_Rewana.png" alt="Rewana" className="max-w-full h-auto" />
        </div>
        <div className="flex-1 flexCenter flex-col m-auto text-left" style={{ marginRight: '2cm' }}>
          <p className='mb-8'>
            <span className='reguler-16 max-w-[555px] my-4'>
              <span className='font-extrabold'>Rewana Tim</span> dolor sit amet consectetur. Ut metus aliquam dictumst ut. Sem nunc volutpat elit ligula pharetra fringilla libero diam sagittis. Maecenas et mauris sed nisl. Faucibus neque nunc semper tincidunt. Ornare enim fermentum eget lorem orci egestas nulla. Sit donec facilisis pellentesque quam. Nec ac id nisl ac fermentum. Id placerat eu morbi lectus tellus mauris sem. Convallis aliquet ac sapien viverra nibh in. Suspendisse.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
