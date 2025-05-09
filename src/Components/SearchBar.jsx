
import { Search } from "lucide-react"; //icon for search installed via npm install lucide-react

export function SearchBar({ value, onChange, placeholder = "Search expenses..." }) {
  return (
    <div className="flex items-center border border-gray-600 rounded px-3 py-2 w-full max-w-md mb-4">
      <Search className="h-4 w-4 text-gray-500 mr-2" /> 
      <input
        type="text"
        
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
        className="w-full focus:outline-none text-sm"
      />
    </div>
  );
}
