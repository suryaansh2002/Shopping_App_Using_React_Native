// import React from "react";
// import { HeaderButton } from "react-navigation-header-buttons";
// import { Ionicons } from "@expo/vector-icons";
// import Colors from "../../constants/Colors";
// // import { Header } from "react-navigation";
// import { Platform } from "react-native";

// const CustomHeaderButton = props =>{
// return <HeaderButton {...props} IconComponent={Ionicons} iconSize={28} color={Platform.OS === 'android' ? 'white' : Colors.primary} />
// }

// export default CustomHeaderButton;

import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
// import { Ionicons } from "@expo/vector-icons";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
    //   IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : "4a148c"}
    />
  );
};

export default CustomHeaderButton;
