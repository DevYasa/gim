import { useState } from 'react'
import { FaSearch, FaSortAmountDown, FaSortAmountUp, FaFilter, FaTimes } from 'react-icons/fa'

const CourseFilter = ({ 
  categories, 
  filters, 
  onFilterChange, 
  sortBy, 
  sortDirection, 
  onSortChange 
}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  
  const handleSearchChange = (e) => {
    onFilterChange({ search: e.target.value })
  }
  
  const handleCategoryChange = (category) => {
    onFilterChange({ category })
    setMobileFiltersOpen(false)
  }
  
  const clearFilters = () => {
    onFilterChange({ category: 'all', search: '' })
  }
  
  const sortOptions = [
    { id: 'title', label: 'Course Name' },
    { id: 'duration', label: 'Duration' },
    { id: 'tuition', label: 'Tuition' }
  ]
  
  return (
    <div className="mb-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        {/* Search Bar */}
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="text-neutral-400" />
          </div>
          <input
            type="text"
            placeholder="Search courses..."
            value={filters.search}
            onChange={handleSearchChange}
            className="input pl-10 w-full"
          />
          {filters.search && (
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 hover:text-neutral-700"
              onClick={() => onFilterChange({ search: '' })}
            >
              <FaTimes />
            </button>
          )}
        </div>
        
        {/* Desktop Category Filters */}
        <div className="hidden lg:flex items-center space-x-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-md transition-colors ${
                filters.category === category.id
                  ? 'bg-primary text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category.name}
            </button>
          ))}
          
          {(filters.category !== 'all' || filters.search) && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-sm text-primary hover:text-primary-dark"
            >
              Clear Filters
            </button>
          )}
        </div>
        
        {/* Mobile Filter Toggle */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center px-4 py-2 bg-neutral-100 text-neutral-700 rounded-md"
          >
            <FaFilter className="mr-2" />
            Filter
            {(filters.category !== 'all' || filters.search) && (
              <span className="ml-1 w-2 h-2 rounded-full bg-primary"></span>
            )}
          </button>
        </div>
        
        {/* Sort Dropdown */}
        <div className="flex items-center">
          <span className="mr-2 text-neutral-700">Sort by:</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="input pr-10 appearance-none"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              {sortDirection === 'asc' ? (
                <FaSortAmountUp className="text-neutral-400" />
              ) : (
                <FaSortAmountDown className="text-neutral-400" />
              )}
            </div>
          </div>
          <button
            onClick={() => onSortChange(sortBy)}
            className="ml-2 p-2 bg-neutral-100 rounded-md text-neutral-700 hover:bg-neutral-200"
            title={`Sort ${sortDirection === 'asc' ? 'descending' : 'ascending'}`}
          >
            {sortDirection === 'asc' ? (
              <FaSortAmountUp />
            ) : (
              <FaSortAmountDown />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Category Filters */}
      {mobileFiltersOpen && (
        <div className="lg:hidden bg-white p-4 rounded-md shadow-md mb-6 border border-neutral-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Filter Courses</h3>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="text-neutral-400 hover:text-neutral-700"
            >
              <FaTimes />
            </button>
          </div>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                  filters.category === category.id
                    ? 'bg-primary text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          {(filters.category !== 'all' || filters.search) && (
            <button
              onClick={clearFilters}
              className="mt-4 w-full px-4 py-2 text-primary border border-primary rounded-md hover:bg-primary-light/10"
            >
              Clear Filters
            </button>
          )}
        </div>
      )}
      
      {/* Active Filters */}
      {(filters.category !== 'all' || filters.search) && (
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <span className="text-sm text-neutral-600">Active filters:</span>
          
          {filters.category !== 'all' && (
            <div className="bg-primary-light/10 text-primary px-3 py-1 rounded-full text-sm flex items-center">
              {categories.find(c => c.id === filters.category)?.name}
              <button
                onClick={() => onFilterChange({ category: 'all' })}
                className="ml-2 text-primary hover:text-primary-dark"
              >
                <FaTimes size={12} />
              </button>
            </div>
          )}
          
          {filters.search && (
            <div className="bg-primary-light/10 text-primary px-3 py-1 rounded-full text-sm flex items-center">
              Search: "{filters.search}"
              <button
                onClick={() => onFilterChange({ search: '' })}
                className="ml-2 text-primary hover:text-primary-dark"
              >
                <FaTimes size={12} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CourseFilter