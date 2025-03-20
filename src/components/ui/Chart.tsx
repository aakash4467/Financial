import { Text, View } from "react-native";
import Svg, { Path, Circle, Defs, Filter, FeGaussianBlur, G, Text as SvgText } from "react-native-svg";
import { pie, arc } from "d3-shape";

const PieChart = ({ data }) => {
  const pieGenerator = pie().value((d) => d.value);
  const arcGenerator = arc().innerRadius(70).outerRadius(100).cornerRadius(20);

  return (
    <Svg width={180} height={180} viewBox="-100 -100 200 200">
      {/* Shadow Effect */}
      <Defs>
        <Filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <FeGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur" />
        </Filter>
      </Defs>

      {pieGenerator(data).map((slice, index) => {
        const path = arcGenerator(slice);
        let [x, y] = arcGenerator.centroid(slice); // Get slice center

        // Calculate slice angle
        let angle = ((slice.startAngle + slice.endAngle) / 2) * (180 / Math.PI);
        const adjustedAngle = angle > 90 ? angle + 180 : angle;

        // Move text slightly left inside the slice
        const xOffset = x * 0.9;
        const yOffset = y * 0.8;

        return (
          <G key={index}>
            <Path d={path} fill={slice.data.color} />

            {/* Show price only for slices with value 60 or 40 */}
            {slice.data.value >= 40 && (
              <SvgText
                x={xOffset}
                y={y}
                fill="white"
                fontSize="10"
                fontWeight="bold"
                textAnchor="middle"
                transform={`rotate(${adjustedAngle}, ${x}, ${y})`}
              >
                {slice.data.price}
              </SvgText>
            )}
          </G>
        );
      })}

      {/* Shadow Circle */}
      <Circle cx="0" cy="0" r="57" fill="black" opacity="0.2" filter="url(#shadow)" />

      {/* Inner Circle */}
      <Circle cx="0" cy="0" r="55" fill="white" />

      {/* Text Inside Inner Circle */}
      <View className="absolute z-[-999] mt-[70px] ml-[56px]">
        <Text className="text-[10px]">Monthly Budget</Text>
        <Text className="text-[20px] ml-[-4px] font-extrabold">$10,000</Text>
      </View>
    </Svg>
  );
};

export default function App() {
  const data = [
    { value: 60, color: "#66346C", price: "6,000" },
    { value: 40, color: "#93588E", price: "4,000" },
    { value: 30, color: "#A483A3", price: "3,000" },
    { value: 20, color: "#D3C7D4", price: "2,000" },
    { value: 10, color: "#F0EAF0", price: "1,000" },
  ];

  return (
    <View>
      <PieChart data={data} />
    </View>
  );
}

