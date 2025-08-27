import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Star, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { state, dispatch } = useCart();

  const categories = [
    { id: 'all', name: 'All Games' },
    { id: 'action', name: 'Action' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'rpg', name: 'RPG' },
    { id: 'strategy', name: 'Strategy' },
    { id: 'sports', name: 'Sports' }
  ];

  const games = [
    {
      id: 1,
      title: 'Cyberpunk 2077',
      category: 'action',
      price: 59 ,
      originalPrice: 79 ,
      rating: 4.2,
      image: 'https://www.dolby.com/siteassets/xf-site/content-detail-pages/cyberpunk-2077.jpg',
      discount: 25
    },
    {
      id: 2,
      title: 'The Witcher 3: Wild Hunt',
      category: 'rpg',
      price: 39 ,
      originalPrice: 59 ,
      rating: 4.8,
      image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
      discount: 33
    },
    {
      id: 3,
      title: 'Red Dead Redemption 2',
      category: 'adventure',
      price: 49 ,
      originalPrice: 69 ,
      rating: 4.6,
      image: 'https://cdn.cdkeys.com/496x700/media/catalog/product/f/i/fifa-22-pc-game-origin-cover_4_.jpg',
      discount: 29
    },
    {
      id: 4,
      title: 'FIFA 24',
      category: 'sports',
      price: 69 ,
      rating: 4.1,
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202408/0817/6df82a22b2aaaafaf21ff1d93db80241b3a0c2058273e2b7.png'
    },
   
    {
      id: 6,
      title: 'Assassin\'s Creed Valhalla',
      category: 'action',
      price: 44 ,
      originalPrice: 59 ,
      rating: 4.3,
      image: 'https://www.venturegames.com.pk/cdn/shop/files/Assassin_sCreedValhalla.jpg?v=1704447346',
      discount: 25
    },
    {
      id: 7,
      title: 'Horizon forbidden West',
      category: 'adventure',
      price: 34 ,
      originalPrice: 49 ,
      rating: 4.7,
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/DLgLjXPNm5aX4dJ3qvXOCKW4.jpg',
      discount: 30
    }
   
  ];

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (game: typeof games[0]) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: game.id,
        title: game.title,
        price: game.price,
        image: game.image
      }
    });
  };

  const isInCart = (gameId: number) => {
    return state.items.some(item => item.id === gameId);
  };
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-[#8B5CF6]/20 to-[#3B82F6]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Game Shop
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Discover amazing games at unbeatable prices. Your next adventure awaits!
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] h-5 w-5" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-[#9CA3AF] focus:outline-none focus:border-purple-500 transition-colors duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white shadow-lg shadow-purple-500/25'
                      : 'bg-gray-800 text-[#9CA3AF] hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-48 lg:w-56 h-48 sm:h-auto flex-shrink-0">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {game.discount && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-lg">
                        -{game.discount}%
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                        {game.title}
                      </h3>
                      
                      <div className="flex items-center mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(game.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[#9CA3AF] text-sm ml-2">({game.rating})</span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
                            {game.price} DT
                          </span>
                          {game.originalPrice && (
                            <span className="text-[#9CA3AF] line-through text-sm">
                              {game.originalPrice} DT
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => addToCart(game)}
                      disabled={isInCart(game.id)}
                      className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                        isInCart(game.id)
                          ? 'bg-green-600 hover:bg-green-700 text-white cursor-default'
                          : 'bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white hover:shadow-lg hover:shadow-purple-500/25'
                      }`}
                    >
                      {isInCart(game.id) ? (
                        <>
                          <Check className="h-4 w-4" />
                          <span>Added to Cart</span>
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
            ))}
          </div>
          
          {filteredGames.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#9CA3AF] text-lg">No games found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;