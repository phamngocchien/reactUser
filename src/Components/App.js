import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
import { v1 as uuidv1 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: DataUser,
      searchText: "",
      editUserStatus: false,
      userEditObject: {}
    }
  }
  
  deleteUser =  (idUser) => {
    var tempData = this.state.data.filter(item => item.id !== idUser)
    this.setState({
      data: tempData
    })
  }
  

  getUserEditInfoApp =  (info) => {
    this.state.data.forEach((value, key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
  }
  
  editUser  = (user) => {
    this.setState({
      userEditObject:user
    });
    console.log(user);
  }
  changeEditUserStatus  = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }

  getNewUserData  = (name, tel, permission) => {
    var item = {}
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission; 
    var items = this.state.data;
    items.push(item);
    this.setState({
      data:items
    })
    console.log(items);
  }
  


  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    })
  }
  render(){
    //localStorage.setItem('userData', JSON.stringify(DataUser));

    var ketqua = [];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })
    return (
      <div>
        <Header></Header>
        <div className = "searchForm">
          <div className = "container">
            <div className = "row">
              <Search ketNoi = {() => this.doiTrangThai()} 
              hienThiBtn = {() => this.state.hienThiForm} 
              checkConnectProps = {(dl)=>{this.getTextSearch(dl)}} editUserStatus = {this.state.editUserStatus} 
              changeEditUserStatus = {()=>{this.changeEditUserStatus()}}
              userEditObject ={this.state.userEditObject}
              getUserEditInfoApp = { (info) => {this.getUserEditInfoApp(info)}
              }
              ></Search>
              <div className="col-12">
                <hr />
              </div>
              <TableData dataUserProps = {ketqua} 
              editFun = {(user) => this.editUser(user)}
              changeEditUserStatus = {()=>{this.changeEditUserStatus()}}
              deleteUser = {(idUser) => {this.deleteUser(idUser)}
              }></TableData>
              <AddUser add = {(name, tel, permission) => this.getNewUserData(name, tel, permission)} hienThiForm = {() => this.state.hienThiForm}></AddUser>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;