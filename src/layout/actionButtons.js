import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { withNavigation } from 'react-navigation';

class ActionButton extends React.Component{
        render(){
        return(
            <TouchableOpacity style={{
                height:this.props.containerHeight,
                width:this.props.containerWidth,
                backgroundColor:'#fff',
                marginBottom: this.props.marginBottom ? this.props.marginBottom : 0,
                borderRadius:60,
                alignItems: 'center',
                justifyContent: 'center'

            }}  >
            <Image
            style={
                {
                    height:this.props.height,
                    width:this.props.width
                }
            }
             source={this.props.imageLink}/>
         </TouchableOpacity>
        );
    }
}

export default withNavigation(ActionButton);

const styles = StyleSheet.create({
actionBtn : {
    borderWidth:2,
    borderColor:'rgba(0,79,255,0.2)',
    width:50,
    height:50,
    backgroundColor:'#fff',
    borderRadius:15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
 
}
});