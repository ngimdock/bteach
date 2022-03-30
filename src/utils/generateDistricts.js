import {
  town1Select,
  town2Select,
  town3Select,
  town4Select,
  town5Select,
  town6Select,
} from "./townsData";

const generateDistricts = (ville) => {
    switch (ville) {
        case "Yaounde": {
            return town1Select.map((el) => <option key={el} value={el}>{el}</option>)
        }

        case "Douala": {
            return town2Select.map((el) => <option key={el} value={el}>{el}</option>)
        }

        case "Bamenda": {
            return town3Select.map((el) => <option key={el} value={el}>{el}</option>)

        }

        case "Bafoussam": {
            return town4Select.map((el) => <option key={el} value={el}>{el}</option>)
            
        }

        case "Maroua": {
            return town5Select.map((el) => <option key={el} value={el}>{el}</option>)
        }

        case "Dschang": {
            return town6Select.map((el) => <option key={el} value={el}>{el}</option>)
        }

        default: break
    }
}

export default generateDistricts