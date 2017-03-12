import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';

export default class NannyProfile extends Component{
    constructor(){
        super()
    }
    componentWillMount(){
        this.setState({
            nannys: [
                {
                    id: 1,
                    name: 'Tracy',
                    age: 22,
                    rating: 5,
                    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Michelle-Borromeo-Actor-Headshots-Vancouver-BC20110408_0030.jpg'
                },
                {
                    id: 2,
                    name: 'Stacy',
                    age: 45,
                    rating: 4,
                    img: 'https://c1.staticflickr.com/7/6129/6005842178_c7fd917eeb_b.jpg'
                },
                {
                    id: 3,
                    name: 'Mary',
                    age: 37,
                    rating: 4,
                    img: 'https://c1.staticflickr.com/4/3582/3902660001_ef57d48578_b.jpg'
                },
                {
                    id: 4,
                    name: 'Sally',
                    age: 24,
                    rating: 5,
                    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Sarah_Beattie-Smith.jpg'
                },
                {
                    id: 5,
                    name: 'Ashley',
                    age: 55,
                    rating: 4,
                    img: 'https://c1.staticflickr.com/1/496/19288474958_1b593667d5_b.jpg'
                },
                {
                    id: 6,
                    name: 'Emily',
                    age: 37,
                    rating: 4,
                    img: 'https://c1.staticflickr.com/2/1276/5190042885_bbf05b1571_b.jpg'
                },
                {
                    id: 7,
                    name: 'Samantha',
                    age: 22,
                    rating: 5,
                    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Michelle-Borromeo-Actor-Headshots-Vancouver-BC20110408_0030.jpg'
                },
                {
                    id: 8,
                    name: 'Wendy',
                    age: 45,
                    rating: 4,
                    img: 'https://c1.staticflickr.com/7/6129/6005842178_c7fd917eeb_b.jpg'
                },
                {
                    id: 9,
                    name: 'Margret',
                    age: 37,
                    rating: 4,
                    img: 'https://c1.staticflickr.com/4/3582/3902660001_ef57d48578_b.jpg'
                },
            ]
        })
        console.log(this.props.data);
        
    }
    componentDidMount(){
        if(this.state.nannys){
            let clickedNanny = this.state.nannys.filter((nanny) => {
                return nanny.id === this.props.data.passProps.id
            });
            this.setState({
                clickedNanny: clickedNanny
            });
            console.log(this.state.clickedNanny);
        }     
    }
    render(){
        return (
            <View>
                <Text></Text>
            </View>
        )
    }
}