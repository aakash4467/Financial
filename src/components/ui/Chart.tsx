import { Text, View } from "react-native";
import Svg, { Path } from 'react-native-svg';
import { pie, arc } from 'd3-shape';

const PieChart = ({ data }) => {
  const pieGenerator = pie().value(d => d.value);
  
  return (
    <Svg width={200} height={200} viewBox="-100 -100 200 200">
      {pieGenerator(data).map((slice, index) => {
        const arcGenerator = arc()
          .innerRadius(70) // Inner radius for a donut chart effect
          .outerRadius(100) // Outer radius (same for all)
          .cornerRadius(20); // Different border radius per slice

        return (
          <Path
            key={index}
            d={arcGenerator(slice)}
            fill={slice.data.color}
          />
        );
      })}
    </Svg>
  );
};
export default function () {

 const data = [
    { value: 60, color: '#66346C', },   // Small border radius
    { value: 40, color: '#93588E' }, // Larger border radius
    { value: 30, color: '#A483A3' }, // Medium border radius
    { value: 20, color: '#D3C7D4' },
    { value: 10, color: '#F0EAF0' },
  ]
  return (
    <View>
      <Text>
        Chart
      </Text>
 <PieChart data={data} />
    </View>
  )
}
