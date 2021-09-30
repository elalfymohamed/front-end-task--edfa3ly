import FilterRating from "../../constants/filterRating/FilterRating";
import FilterColor from "../../constants/filterColors/FilterColor";
import FilterPrice from "../../constants/filterPrice/FilterPrice";

import { Section, Container } from "./styled";

const Filters = () => {
  return (
    <Section>
      <Container>
        <div>
          <FilterPrice />
          <FilterColor />
          <FilterRating />
        </div>
      </Container>
    </Section>
  );
};

export default Filters;
