import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: "",
            userObj: {}
        }
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        })
        this.props.getUserEditInfoApp(info)
    }
    

    isShowEditForm  = () => {
        if(this.props.editUserStatus === true){
            return <EditUser changeEditUserStatus = {() => {this.props.changeEditUserStatus()}}
            userEditObject = {this.props.userEditObject}
            getUserEditInfo =  {(info) => {this.getUserEditInfo(info)}}
            
            />
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        })
        this.props.checkConnectProps(this.state.tempValue)
    }

    hienThiNut = () => {
        if(this.props.hienThiBtn() === true){
            return  <div className="btn btn-block btn-outline-secondary" onClick = {() => this.props.ketNoi()}>Đóng lại</div>
        }
        else{
            return <div className="btn btn-block btn-outline-info" onClick = {() => this.props.ketNoi()}>Thêm mới</div>
        }
    }

    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group" style={{width: '500px'}}>
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập tên cần tìm kiếm" onChange = {(event) => this.isChange(event)}/>
                        <div className="btn btn-info" onClick = {(dl) => this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
                    </div>
                    <div className = "btn-group1 mt-4">
                        {this.hienThiNut()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;