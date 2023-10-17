import { View, Text } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";

const BottomSheet = forwardRef(function BottomSheet(props, ref) {
  const snapPoints = useMemo(() => ["50%"], []);
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      snapPoints={snapPoints}
      ref={ref}
      overDragResistanceFactor={0}
      backdropComponent={renderBackdrop}
    >
      <View>
        <Text>BottomSheet</Text>
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;
