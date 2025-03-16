import { Text, View } from "react-native";
import Svg, { Path, Circle, Defs, Filter, FeGaussianBlur } from 'react-native-svg';
import { pie, arc } from 'd3-shape';

const PieChart = ({ data }) => {
  const pieGenerator = pie().value(d => d.value);
  
  return (
    <Svg width={180} height={180} viewBox="-100 -100 200 200">
       <Defs>
        <Filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <FeGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur" />
        </Filter>
      </Defs>
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
       <Circle cx="0" cy="0" r="57" fill="black" opacity="0.2" filter="url(#shadow)" />

      {/* Inner Circle */}
      <Circle cx="0" cy="0" r="55" fill="white"/>
      <View className="absolute z-[-999] mt-[70px] ml-[56px]">
      
      <Text className=" text-[10px]">Monthly Budget</Text>
      <Text className="text-[20px] ml-[-4px] font-extrabold">$10,000</Text>
      </View>
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
 <PieChart data={data} />
    </View>
  )
}
