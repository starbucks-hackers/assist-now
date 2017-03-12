import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';

import NannyCard from './NannyCard';
import Navbar from './../navbar/navbar';

export default class Nannys extends Component{
    constructor(){
        super();

        this.toNannyProfile = this.toNannyProfile.bind(this)
    }
    getMoviesFromApiAsync() {
        return fetch('https://8livqxv493.execute-api.us-west-2.amazonaws.com/dev/api/providers')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            return responseJson;
            
        })
        .catch((error) => {
            console.error(error);
        });
    }
    componentWillMount(){
        this.getMoviesFromApiAsync().then((res) => {
            let list = [];
            for(var i = 0; i < res.length; i++){
                res[i].img= 'https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg'
                list.push(res[i]);
            }
            this.setState({
                nannys: list
            })
            setTimeout(()=> {
                console.log(this.state.nannys);
            }, 2000)
        })
        
    }
    toNannyProfile(id){
        console.log(id);
        this.props.navigator.push({
            id: 'nannyprofile',
            passProps: {
                id: id
            }
        })
    }
    render(){
        return (
            <View style={styles.container}>
                <Navbar navigator={this.props.navigator} />
                <Text style={{fontSize: 50, fontWeight: '300', color:'#0079BD'}}>Nannys</Text>
                {this.state ?
                    this.state.nannys.map((nanny) => {
                        return <NannyCard 
                                    key={nanny.id}
                                    id={nanny.id}
                                    first={nanny.firstName}
                                    age={nanny.age}
                                    rating={nanny.rating}
                                    img={nanny.image}
                                    test={this.toNannyProfile}
                                />
                    }) : null}
                
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
    
})