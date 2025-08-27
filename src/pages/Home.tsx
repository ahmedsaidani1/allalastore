import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Users, Trophy, Zap, Check, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { state, dispatch } = useCart();

  const features = [
    {
      icon: Star,
      title: 'Premium Games',
      description: 'Curated collection of the latest and greatest games across all platforms.'
    },
    {
      icon: Users,
      title: 'Gaming Community',
      description: 'Join thousands of gamers in our vibrant and supportive community.'
    },
    {
      icon: Trophy,
      title: 'Exclusive Deals',
      description: 'Get access to exclusive discounts and early releases.'
    },
    {
      icon: Zap,
      title: 'Instant Delivery',
      description: 'Digital games delivered instantly to your library.'
    }
  ];

  const popularGames = [
    {
      id: 1,
      title: 'Cyberpunk 2077',
      price: '59 DT',
      numericPrice: 59.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXl4vRbmqz3HI4f1tZBswheHLawq_kobUeCwAec35SGzbCIH_gqAWnNJSnzzoUSa3cXY&usqp=CAU'
    },
    {
      id: 2,
      title: 'The Witcher 3',
      price: '39 DT',
      numericPrice: 39.99,
      image: 'https://store-images.s-microsoft.com/image/apps.46303.69531514236615003.534d4f71-03cb-4592-929a-b00a7de28b58.abbf704e-3676-4fb7-9f68-f4425de5df24?q=90&w=480&h=270'
    },
    {
      id: 3,
      title: 'Red Dead Redemption 2',
      price: '49 DT',
      numericPrice: 49.99,
      image: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png'
    }
  ];

  const addToCart = (game: typeof popularGames[0]) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: game.id,
        title: game.title,
        price: game.numericPrice,
        image: game.image
      }
    });
  };

  const isInCart = (gameId: number) => {
    return state.items.some(item => item.id === gameId);
  };
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 via-transparent to-[#3B82F6]/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
                 Allala Store
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#9CA3AF] mb-8 max-w-3xl mx-auto">
              Your ultimate destination for the latest games, exclusive deals, and an incredible gaming experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/shop"
                className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Shop Now</span>
                <Play className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-[#8B5CF6]/20 hover:to-[#3B82F6]/20 transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#1a1a2e]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose  Allala Store?
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
              We're more than just a game store - we're your gateway to endless gaming adventures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] w-fit mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-[#9CA3AF]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Games
            </h2>
            <p className="text-[#9CA3AF] text-lg">
              Check out some of our most popular titles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularGames.map((game, index) => (
              <div
                key={index}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-800">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{game.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
                        {game.price}
                      </span>
                      <button 
                        onClick={() => addToCart(game)}
                        disabled={isInCart(game.id)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                          isInCart(game.id)
                            ? 'bg-green-600 hover:bg-green-700 text-white cursor-default'
                            : 'bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white hover:shadow-lg hover:shadow-purple-500/25'
                        }`}
                      >
                        {isInCart(game.id) ? (
                          <>
                            <Check className="h-4 w-4" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="h-4 w-4" />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              View All Games
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;