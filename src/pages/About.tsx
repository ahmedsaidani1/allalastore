import React from 'react';
import { Users, Target, Award, Heart, Gamepad2, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50K+', label: 'Happy Gamers' },
    { number: '1000+', label: 'Games Available' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Gaming',
      description: 'We live and breathe gaming. Our team consists of passionate gamers who understand what the community needs.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a strong gaming community is at the heart of everything we do. We connect gamers worldwide.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We carefully curate our game collection to ensure only the best titles make it to our platform.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving gamers across the globe with localized experiences and worldwide game distribution.'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Gaming enthusiast with 10+ years in the industry'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Expert in digital distribution and customer experience'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Full-stack developer passionate about gaming technology'
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#8B5CF6]/20 to-[#3B82F6]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About  Allala Store
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
            We're more than just a gaming store - we're a community of passionate gamers dedicated to bringing you the best gaming experiences.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-[#1a1a2e]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-[#9CA3AF] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[#9CA3AF] text-lg">
                <p>
                   Allala Store was born from a simple idea: every gamer deserves access to incredible games at fair prices. Founded  by a group of passionate gamers, we started as a small digital storefront with big dreams.
                </p>
                <p>
                  What began as a weekend project quickly grew into something much larger. We realized that the gaming community needed more than just another store - they needed a platform that understood their passion, respected their time, and celebrated their achievements.
                </p>
                <p>
                  Today,  Allala Store serves over 50,000 gamers worldwide, offering everything from indie gems to AAA blockbusters. But our mission remains the same: to connect gamers with the experiences that will create their next favorite memories.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 to-[#3B82F6]/20 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gaming setup"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a2e]/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
              These core principles guide everything we do at  Allala Store
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] w-fit mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-[#9CA3AF]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
    

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-[#8B5CF6]/10 to-[#3B82F6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="p-4 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] w-fit mx-auto mb-8">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-[#9CA3AF] leading-relaxed">
              To create the ultimate gaming destination where every player can discover, connect, and experience the joy of gaming. We believe that great games have the power to bring people together, spark creativity, and create lasting memories.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;