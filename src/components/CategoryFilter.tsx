import React from 'react';
import { TranslationDictionary, Category, Area, DateFilter } from '../types';
import { MapPin, Calendar, LayoutGrid, Map, Filter, RotateCcw } from 'lucide-react';

interface CategoryFilterProps {
  t: TranslationDictionary;
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  selectedArea: Area;
  onSelectArea: (area: Area) => void;
  selectedDateFilter: DateFilter;
  onSelectDateFilter: (df: DateFilter) => void;
  viewMode: 'list' | 'map';
  onToggleViewMode: (mode: 'list' | 'map') => void;
  onResetFilters: () => void;
  hasActiveFilters: boolean;
  totalFiltered: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  t,
  selectedCategory,
  onSelectCategory,
  selectedArea,
  onSelectArea,
  selectedDateFilter,
  onSelectDateFilter,
  viewMode,
  onToggleViewMode,
  onResetFilters,
  hasActiveFilters,
  totalFiltered
}) => {
  return (
    <div className="bg-white border-b border-stone-200/80 sticky top-16 sm:top-20 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        
        {/* Top Control Bar: District Filter, Date Filter & View Switch */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          
          {/* Filter Dropdowns / Pickers */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full md:w-auto">
            
            {/* Area Filter */}
            <div className="relative flex items-center">
              <div className="absolute left-3 pointer-events-none text-stone-400">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <select
                value={selectedArea}
                onChange={(e) => onSelectArea(e.target.value as Area)}
                className="pl-8 pr-8 py-1.5 sm:py-2 text-xs font-medium text-stone-700 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 appearance-none cursor-pointer"
              >
                <option value="all">{t.areas.all}</option>
                <option value="higashiyama">{t.areas.higashiyama}</option>
                <option value="gion">{t.areas.gion}</option>
                <option value="central">{t.areas.central}</option>
                <option value="kita">{t.areas.kita}</option>
                <option value="arashiyama">{t.areas.arashiyama}</option>
                <option value="fushimi">{t.areas.fushimi}</option>
              </select>
            </div>

            {/* Date / Admission Filter */}
            <div className="relative flex items-center">
              <div className="absolute left-3 pointer-events-none text-stone-400">
                <Calendar className="w-3.5 h-3.5" />
              </div>
              <select
                value={selectedDateFilter}
                onChange={(e) => onSelectDateFilter(e.target.value as DateFilter)}
                className="pl-8 pr-8 py-1.5 sm:py-2 text-xs font-medium text-stone-700 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 appearance-none cursor-pointer"
              >
                <option value="all">{t.dateFilters.all}</option>
                <option value="today">{t.dateFilters.today}</option>
                <option value="this_week">{t.dateFilters.this_week}</option>
                <option value="this_month">{t.dateFilters.this_month}</option>
                <option value="free_only">{t.dateFilters.free_only}</option>
              </select>
            </div>

            {/* Reset Filters */}
            {hasActiveFilters && (
              <button
                onClick={onResetFilters}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors"
                title={t.labels.clearFilters}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.labels.clearFilters}</span>
              </button>
            )}

            {/* Result count pill */}
            <span className="text-xs text-stone-500 font-medium ml-1">
              {totalFiltered} {t.labels.eventCount}
            </span>
          </div>

          {/* View Mode Toggle (List vs Map) */}
          <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200 ml-auto md:ml-0">
            <button
              onClick={() => onToggleViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'list'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{t.labels.listView}</span>
            </button>
            <button
              onClick={() => onToggleViewMode('map')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'map'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>{t.labels.mapView}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
