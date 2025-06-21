import mp from '../assets/mp.jpg';
import bg2 from '../assets/bg2.jpg';
export function Profile() {
  return (
    <div className="w-90 h-100 overflow-hidden shadow-lg bg-white text-center">
      {/* Top Background */}
      <div className="relative bg-gray-800 bg-cover bg-center h-38">
        {/* Profile Image */}
        <img
          src={mp}
          alt="Profile"
          className="absolute left-1/2 -bottom-12 transform -translate-x-1/2 w-30 h-30 rounded-full border-4 border-white shadow-md"
        />
      </div>

      {/* User Info */}
      <div className="pt-15 pb-6">
        <h2 className="text-lg font-bold text-gray-800">
          Rita Correia <span className="text-sm text-gray-500 font-normal">32</span>
        </h2>
        <p className="text-sm text-gray-500">London</p>
      </div>

      {/* Stats */}
      <div className="mt-6 flex border-t border-gray-300  divide-gray-200 text-xs">
        <div className="w-1/3 py-4" >
          <p className="text-xl font-bold text-gray-800">80K</p>
          <p className="text-gray-500">Followers</p>
        </div>
        <div className="w-1/3 py-4">
          <p className=" text-xl font-bold text-gray-800">803K</p>
          <p className="text-gray-500">Likes</p>
        </div>
        <div className="w-1/3 py-4">
          <p className="text-xl font-bold text-gray-800">1.4K</p>
          <p className="text-gray-500">Photos</p>
        </div>
      </div>
    </div>
  );
}
