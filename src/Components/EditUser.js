import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission
        }
    }
    savebtn =  () => {
        var info = {}
        info.id = this.state.id
        info.name = this.state.name
        info.tel = this.state.tel
        info.permission = this.state.permission
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }
    
    ischange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })

    }
    render() {
        console.log(this.state);
        return (
            <div className = "col-12">
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="card mb-3 mt-2">
                                <div className="card-header text-center">Sửa thông tin User</div>
                                <div className="card-body">
                                <div className="form-group">
                                    <input type="text" className="form-control" aria-describedby="helpId" placeholder="Tên" name="name" defaultValue = {this.props.userEditObject.name}
                                    onChange={(event) => {this.ischange(event)}}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" aria-describedby="helpId" placeholder="Số điện thoại" name="tel" defaultValue = {this.props.userEditObject.tel}
                                    onChange={(event) => {this.ischange(event)}}/>
                                </div>
                                
                                <div className="form-group">
                                    <select className="custom-select" name="permission" defaultValue = {this.props.userEditObject.permission} 
                                    onChange={(event) => {this.ischange(event)}} required>
                                    <option value>Lựa chọn quyền</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Nomal</option>
                                    </select>
                                </div>
                                    <div className="form-group">
                                        <input type="button" className="btn btn-block btn-primary"
                                        value = "Lưu thông tin" onClick={()=>{this.props.changeEditUserStatus()}}
                                        onClick = {() => {this.savebtn()}}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;