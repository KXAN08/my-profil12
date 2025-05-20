import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const users = [
  {
    name: 'Begzod',
    image: '/img/Begzod.png',
    title: 'Frontend Developer',
  },
  {
    name: 'Laylo Karimova',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80',
    title: 'UI/UX Designer',
  },
  {
    name: 'Aziza Feruzva',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1000&q=80',
    title: 'Full Stack Engineer',
  },
];

const Hero = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {users.map((user, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <img
                src={user.image}
                alt={user.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <h3 className="text-3xl font-bold text-white">{user.name}</h3>
                <p className="text-lg text-gray-200">{user.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default  React.memo(Hero);
