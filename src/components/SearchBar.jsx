export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-3 bg-gray-100 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition"
    />
  );
}
