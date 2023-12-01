import renderer from "react-test-renderer";
import { render,fireEvent ,screen,cleanup} from "@testing-library/react-native";

import Coupon from "../components/Coupon";
import { substractValue } from "../utils/common";

  describe('<SelectList />', () => {
    afterEach(cleanup)
    
            it("renders correctly", () => {
                const tree = renderer.create(<Coupon />).toJSON();
                expect(tree).toMatchSnapshot();
            });

            it('subs 5 - 3 to equal 2', () => {
                expect(substractValue(5, 3)).toBe(2);
            });

        
        
        });
