import FilterRating from "../../constants/filterRating/FilterRating";
import FilterColor from "../../constants/filterColors/FilterColor";
import FilterPrice from "../../constants/filterPrice/FilterPrice";

import { FiltersSection, FiltersContainer } from "./styled";

const Filters = () => {
  return (
    <FiltersSection>
      <FiltersContainer>
        <div>
          <FilterPrice />
          <FilterColor />
          <FilterRating />
        </div>
      </FiltersContainer>
    </FiltersSection>
  );
};

export default Filters;
