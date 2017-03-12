import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Navigator,
  Image
} from 'react-native';

import ChildCard from './ChildCard';
import Navbar from './../navbar/navbar';

export default class Profile extends Component {
    constructor(){
        super()

        
    }
    componentWillMount(){
        this.setState({
            name: 'Wesley Huang',
            img: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAcrAAAAJDRkYjUzMjQ2LWYwYTctNDI1Yi05ZDVlLTY5Y2JhODk3Yzk1YQ.jpg',
            children: [
                {
                    name: 'Rose',
                    img: 'https://www.publicdomainpictures.net/pictures/50000/velka/pouting-baby-girl.jpg'
                },
                {
                    name: 'Violet',
                    img: 'https://www.publicdomainpictures.net/pictures/50000/velka/pouting-baby-girl.jpg'
                },
                {
                    name: 'Jasmine',
                    img: 'https://www.publicdomainpictures.net/pictures/50000/velka/pouting-baby-girl.jpg'
                }
            ]
        });
        
        
    }
    nannys(){
        this.props.navigator.push({
            id: 'nannys'
        });
    }
    render(){

        return (
            <View style={styles.container}>
                <Image source={{uri: this.state.img}} style={{width: 100, height:100, borderRadius: 50, marginBottom: 10, marginTop: 20}}/>
                <Text style={styles.name}>{this.state.name}</Text>
                <Text style={{marginBottom: 20}}>Children</Text>

                {this.state.children ? 
                this.state.children.map(function(child){
                    return <ChildCard 
                                key={child.name}
                                name={child.name}
                                img={child.img}
                            />
                }) 
                : 'Currently No Children'}
                <View style={styles.getNanny}>
                <Button
                    onPress={this.nannys.bind(this)}
                    title="Get Nanny"
                    color= 'blue'
                />
                </View>

                <Navbar navigator={this.props.navigator} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        top: 20,
    },
    name:{
        fontSize: 20,
        marginBottom: 30,
    },
    getNanny:{
        // backgroundColor: '#0079BD',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#0079BD',
        borderRadius: 3,
        width: 350,
    }
})