declare module "rn-range-slider" {
  import React from "react";
  import { ViewStyle } from "react-native";

  interface RangeSliderProps {
    style?: ViewStyle;
    min: number;
    max: number;
    low: number;
    high: number;
    step?: number;
    floatingLabel?: boolean;
    renderThumb: React.FC<>;
    renderRail: React.FC<>;
    renderRailSelected: React.FC<>;
    renderLabel?: React.FC<{ value: number }>;
    renderNotch?: React.FC<>;
    onValueChanged: (low: number, high: number) => void;
    onTouchStart?: () => void;
    onTouchEnd?: () => void;
  }

  const content: React.FC<RangeSliderProps>;
  export default content;
}
