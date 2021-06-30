import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    mapingDataUser = () =>
        this.props.dataUserProps.map((value, key)=>(
            <TableDataRow stt = {key} 
            userName = {value.name} 
            tel={value.tel} 
            permission = {value.permission} 
            id = {value.id}
            editFunClick = {(user)=>this.props.editFun(value)}
            changeEditUserStatus = {()=>{this.props.changeEditUserStatus()}}
            deleteBtnClick =  {(idUser) => {this.deleteBtnClick(idUser)}}/>
        ))
    deleteBtnClick =  (idUser) => {
        this.props.deleteUser(idUser)
    }
    

    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover table-inverse">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Số Điện Thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.mapingDataUser()}
                    </tbody>
                </table>
        </div>

        );
    }
}

export default TableData;