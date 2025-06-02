import { Text, TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";
import { ChevronRightIcon } from "react-native-heroicons/outline";

interface TaskItemProps {
  id: any;
  text: string;
  onPress?: () => void;
}

export const TaskItem = ({ text, onPress }: TaskItemProps) => {
  return (
    <TouchableOpacity
      onPressIn={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }}
      onPress={() => {
        onPress?.();
      }}
      className="flex-row justify-between items-center bg-white px-4 py-3 shadow-sm rounded-xl"
    >
      <Text className="text-lg font-medium text-stone-800">{text}</Text>
      <ChevronRightIcon color="#44403c" />
    </TouchableOpacity>
  );
};
