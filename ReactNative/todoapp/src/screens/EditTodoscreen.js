import React, { Component } from 'react';
import {PanResponder ,Animated,View, Text, TouchableOpacity, StyleSheet,Alert,RefreshControl } from 'react-native';
import {Container,Right,Switch,Icon,Item,Input, Header, Body, Left, Title,Content, Separator, ListItem, Thumbnail,List } from 'native-base';
import PanResponderView from './panResponder';
import Setting from './../utils/setting';
export interface Props {
  navigation: any,
  year: any,
  time: any,
  text: any
}
export default class edittodoscreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      status : true,
      year: "",
      month: "",
      minute: "",

    }
  }

  
  renderDate() {
    if(this.state.status === true) {
      return (
        <View>
        <ListItem style={{paddingHorizontal: 10}}>
          <Left>
            <Text style={styles.text}>Due by</Text>
          </Left>
          <Body style={{ position: 'relative', right: 30}}>
            <Text style={styles.text}>{this.props.year}</Text>
          </Body>
          <Right>
              <Text style={{color: '#45637C', fontSize: 15}}>{this.props.time}</Text>  
          </Right>
        </ListItem>
        
        </View>
      )
    }
  }
  
  addTodo() {
    
    this.props.navigation.navigate('TodosContainer', {
      item: {
        name: this.props.text,
        time: "",
        status: 0,
      }
    });
  }

  render() {
    
    // console.log(year + " | " + month + " | " + minute);
    return (
    <Container style={{flex: 1}}>
        <Header style={{backgroundColor: '#FFFFFF'}}>
            <Left>
              <TouchableOpacity>
                <Icon name='close'  style={{color: '#45637C', fontSize: 40,}}/> 
              </TouchableOpacity>                             
            </Left>
            <Body style={{alignItems: 'center', marginLeft: 40}}>
                <Title style={{color: '#45637C'}}>Edit Todo</Title>
            </Body>
            <Right>
              <TouchableOpacity onPress={()=>this.addTodo()}>
                <Text style={styles.text}>Save</Text>
              </TouchableOpacity>
            </Right>
        </Header>
        <View style={{flex: 1}}>
            <Content>
              <Item regular style={{backgroundColor: '#FFFFFF', marginTop: 20, paddingTop: 1}}>
                <Input value={this.props.text} placeholder='Todo Name'  placeholderTextColor='rgba(69,99,124,0.5)'/>
              </Item>
              <View style={{backgroundColor: '#FFFFFF', marginTop: 20, paddingTop: 10, paddingBottom: 30, flex: 5/10}}>
                <ListItem style={{paddingHorizontal: 10, }}>
                    <Left>
                      <Text style={styles.text}>Due Date</Text>
                    </Left>
                    <Right>
                      <Switch 
                      onValueChange={(val)=>this.setState({status: val})} 
                      value={this.state.status} 
                      />          
                  </Right>
                </ListItem>
                {
                  this.renderDate()
                }
              </View>
              <View style={{backgroundColor: '#FFFFFF', alignItems: 'center', paddingTop: 15, marginTop: 20, paddingBottom: 15}}>
                <TouchableOpacity onPress={()=>{
                  Alert.alert("your todos has deleted")
                  this.props.navigation.navigate('SplashScreenContainer')
                }}>
                  <Text style={{color: 'red'}}>Delete Todo</Text>
                </TouchableOpacity>
              </View>
            </Content>
          </View>
       
    </Container>
    )
  }
};

const styles = StyleSheet.create({
  text: {
    color: '#45637C', fontSize: 20
 
  },
  choice: { 
    borderBottomColor: 'grey',
    borderTopColor: 'grey',
    borderBottomWidth: 1, borderTopWidth: 1, 
    position: 'absolute', 
    top: 97, 
    height: 30, 
    zIndex: 1000, 
    width: '100%'
  }
});