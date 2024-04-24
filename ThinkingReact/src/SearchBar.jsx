/**
 *
 * @param root0
 * @param root0.filterText
 * @param root0.inStockOnly
 * @param root0.onFilterTextChange
 * @param root0.onInStockOnlyChange
 */
function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
