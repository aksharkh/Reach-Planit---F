import { useEffect, useState } from "react";
import { FaMapPin, FaStar } from "react-icons/fa";

const DineOutTab = ({ location }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurants();
  }, [location]);

  const fetchRestaurants = async () => {
    setLoading(true);
    try {
      // TODO: Replace with actual API call
      
      
      const mockRestaurants = [
        { name: "The Spice Route", cuisine: "Indian", rating: 4.5, distance: "2.3 km", price: "₹₹₹", image: "🍛" },
        { name: "Bella Italia", cuisine: "Italian", rating: 4.7, distance: "1.8 km", price: "₹₹₹₹", image: "🍝" },
        { name: "Sushi Express", cuisine: "Japanese", rating: 4.6, distance: "3.1 km", price: "₹₹₹", image: "🍣" },
        { name: "BBQ Nation", cuisine: "BBQ", rating: 4.4, distance: "1.5 km", price: "₹₹", image: "🍖" },
      ];
      
      setRestaurants(mockRestaurants);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>Loading</div>
    );
  }

  return (
    <div className="p-6 bg-gray-50/50 rounded-b-3xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-bold text-lg text-gray-800">Nearby Restaurants</h3>
          <p className="text-xs text-gray-500">Perfect places for celebration</p>
        </div>
        <button className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2">
          <FaMapPin size={16} />
          Map View
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {restaurants.map((restaurant, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="text-4xl bg-orange-100 w-16 h-16 flex items-center justify-center rounded-xl flex-shrink-0">
                {restaurant.image}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-800 text-base">{restaurant.name}</h4>
                    <p className="text-xs text-gray-500">{restaurant.cuisine}</p>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">{restaurant.price}</span>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1">
                    <FaStar size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <FaMapPin size={14} />
                    <span className="text-sm">{restaurant.distance}</span>
                  </div>
                </div>
                <button className="mt-3 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl transition-colors">
                  Book Table
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DineOutTab;