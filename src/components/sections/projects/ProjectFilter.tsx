'use client';

import FilterComponent from '@/components/common/FilterComponent';
import { categories } from '../../../constants/projectsData';

interface ProjectFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const ProjectFilter = ({ filter, setFilter }: ProjectFilterProps) => {
  return (
    <FilterComponent
      options={categories}
      selectedFilter={filter}
      onFilterChange={setFilter}
      title="FILTER BY PROJECT CATEGORY"
    />
  );
};

export default ProjectFilter;
