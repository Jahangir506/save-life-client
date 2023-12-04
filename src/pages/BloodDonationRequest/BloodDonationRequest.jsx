import { Link } from "react-router-dom";

const BloodDonationRequest = () => {
  return (
    <>
      <div>
      const [searchQuery, setSearchQuery] = useState('');
const filteredItems = itemsAll.filter(
    item =>
      item &&
      item.name &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
const [itemsAll, setItemsAll] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
const filteredItems = itemsAll.filter(
    item =>
      item &&
      item.name &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    // Implement search logic here, e.g., fetch data based on the search query
    // Update the state with the filtered items
  };
Al Fattaul Islam11:27 PM
<div className="flex items-center gap-2 justify-center mt-10">
          <div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-secondary text-white bg-transparent w-full max-w-xs"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="btn button-85" onClick={handleSearch}>
            Search
          </button
      </div>
    </>
  );
};
export default BloodDonationRequest;
