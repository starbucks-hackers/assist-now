import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';

export default class NannyProfile extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.setState({
            clickedNanny: false,
            nannys: [
                {
                    id: 1,
                    name: 'Tracy',
                    age: 22,
                    rating: 5,
                    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Michelle-Borromeo-Actor-Headshots-Vancouver-BC20110408_0030.jpg',
                    bio: 'Hi my name is Tracy. I am a professional baby sitter who loves to be around kids.',
                    notifications:[]
                },
                {
                    id: 2,
                    name: 'Stacy',
                    age: 45,
                    rating: 4,
                    img: 'https://c1.staticflickr.com/7/6129/6005842178_c7fd917eeb_b.jpg',
                    bio: 'Hi my name is Stacy. I am a professional baby sitter who loves to be around kids.',
                    notifications:[]
                },
                {
                    id: 3,
                    name: 'Mary',
                    age: 37,
                    rating: 4,
                    img: 'https://c1.staticflickr.com/4/3582/3902660001_ef57d48578_b.jpg',
                    bio: 'Hi my name is Mary. I am a professional baby sitter who loves to be around kids.',
                    notifications:[]
                },
                {
                    id: 4,
                    name: 'Sally',
                    age: 24,
                    rating: 5,
                    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Sarah_Beattie-Smith.jpg',
                    bio: 'Hi my name is Sally. I am a professional baby sitter who loves to be around kids.',
                    notifications:[]
                },
                {
                    id: 5,
                    name: 'Ashley',
                    age: 55,
                    rating: 4,
                    img: 'https://c1.staticflickr.com/1/496/19288474958_1b593667d5_b.jpg',
                    bio: 'Hi my name is Ashley. I am a professional baby sitter who loves to be around kids.',
                    notifications:[]
                },
                {
                    id: 6,
                    name: 'Emily',
                    age: 37,
                    rating: 4,
                    img: 'https://c1.staticflickr.com/2/1276/5190042885_bbf05b1571_b.jpg',
                    bio: 'Hi my name is Emily. I am a professional baby sitter who loves to be around kids.',
                    notifications:[]
                },
                {
                    id: 7,
                    name: 'Samantha',
                    age: 22,
                    rating: 5,
                    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Michelle-Borromeo-Actor-Headshots-Vancouver-BC20110408_0030.jpg',
                    bio: 'Hi my name is Mary. I am a professional baby sitter who loves to be around kids.',
                    notifications:[]
                },
                {
                    id: 8,
                    name: 'Wendy',
                    age: 45,
                    rating: 4,
                    img: 'https://c1.staticflickr.com/7/6129/6005842178_c7fd917eeb_b.jpg',
                    bio: 'Hi my name is Mary. I am a professional baby sitter who loves to be around kids.',
                    notifications:[]
                },
                {
                    id: 9,
                    name: 'Margret',
                    age: 37,
                    rating: 4,
                    img: 'https://c1.staticflickr.com/4/3582/3902660001_ef57d48578_b.jpg',
                    bio: 'Hi my name is Mary. I am a professional baby sitter who loves to be around kids.',
                    notifications:[]
                },
            ]
        })
        console.log(this.props.data);
        
    }
    
    componentDidMount(){
        if(this.state.nannys){
            for(var i = 0; i < this.state.nannys.length; i++){
                if(this.state.nannys[i].id === this.props.data.passProps.id){
                    this.setState({
                        clickedNanny: this.state.nannys[i]
                    })
                };
            }
            console.log(this.state.clickedNanny,"sefsef");
        }     
    }
    sendNotification(){
        this.state.clickedNanny.notifications.push('You have a connection!')
        console.log(this.state.currentNanny.notifications);
    }
    render(){
        return (
            <View style={styles.container}>
            <View style={styles.firstRow}>
                <Image source={{uri: this.state.clickedNanny.img}} style={{width:100, height: 100}}/>
                <Text style={styles.name}>{this.state.clickedNanny ? this.state.clickedNanny.name : ''}</Text>
                <Text style={styles.age}>{this.state.clickedNanny ? this.state.clickedNanny.age : ''}</Text>
            </View>
                <Text style={styles.bio}> {this.state.clickedNanny ? this.state.clickedNanny.bio : ''}</Text>
            <View style={styles.button}>
            <Button 
                color='blue'
                title="connect"
                onPress={this.sendNotification.bind(this)}
            />
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    firstRow:{
        flexDirection: 'row',
        marginBottom: 30,
    },
    name:{
        fontSize: 50,
        fontWeight: '200',
        marginLeft: 40,
        marginRight: 40,
    },
    age:{
        fontSize: 30,
    },
    bio:{
        width: 300,
    },
    button:{
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 50,
        borderStyle: 'solid',
        width: 300,
    }
})