import { message } from "antd";
import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";

const GiftTab: React.FC = ({interests}) => {

    // const interests: string[] = ["Tech"]; // Example interests prop
    console.log("interest" , interests);
    const [gifts, setGifts] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);


    const fetchGifts = async () => {
        setLoading(true);

        try {

                  const mockApiData = [
        { name: "Sony WH-1000XM5", price: "₹24,990", platform: "Amazon", image: "🎧", tag: "Tech", rating: 4.8 },
        { name: "Kindle Paperwhite", price: "₹13,999", platform: "Amazon", image: "📚", tag: "Reading", rating: 4.7 },
        { name: "Nike Air Jordan", price: "₹11,495", platform: "Myntra", image: "👟", tag: "Fashion", rating: 4.6 },
        { name: "Vintage Film Camera", price: "₹8,500", platform: "Flipkart", image: "📸", tag: "Photography", rating: 4.5 },
        { name: "Gourmet Chocolate Box", price: "₹1,200", platform: "FNP", image: "🍫", tag: "Cooking", rating: 4.9 },
        { name: "Spotify Premium", price: "₹1,189", platform: "Spotify", image: "🎵", tag: "Music", rating: 4.8 },
      ];

      const filtered = interests?.length > 0 
        ? mockApiData.filter(g => interests.some(i => g.tag.includes(i) || i.includes(g.tag)))
        : mockApiData.slice(0, 4);
      
      setGifts(filtered);
        
        } catch (error) {
            message.error("Failed to fetch gifts");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGifts();
    }, [interests]);


    if(loading) {
        return (
            <div>Loading</div>
        )
    }

  return (
    <div className="p-6 bg-gray-50/50 rounded-b-3xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-bold text-lg text-gray-800">Recommended Gifts</h3>
          <p className="text-xs text-gray-500">
            Based on interests: {interests?.join(", ") || "All categories"}
          </p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {gifts.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-4 hover:shadow-lg transition-shadow group cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <div className="text-3xl bg-gray-100 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                {item.image}
              </div>
              <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                {item.tag}
              </span>
            </div>
            <h4 className="font-bold text-gray-800 mb-1 truncate text-base">{item.name}</h4>
            <div className="flex items-center gap-1 mb-3">
              <FaStar size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-gray-600">{item.rating}</span>
            </div>
            <div className="flex justify-between items-center mt-4 bg-gray-50 p-2.5 rounded-xl">
              <span className="text-xs text-gray-500 font-medium">{item.platform}</span>
              <span className="font-bold text-indigo-700 text-lg">{item.price}</span>
            </div>
            <button className="w-full mt-4 bg-black hover:bg-gray-800 text-white h-10 rounded-xl font-medium transition-colors">
              View Deal
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GiftTab