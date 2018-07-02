import React, { Component } from 'react';



class ListRender extends Component {
    state = {
        userList:[
            {
                id: 0 ,
                name: 'Bruce Lee'
            },
            {
                id:1 ,
                name: 'React'
            },
            {
                id:2 ,
                name: 'React'
            }
        ]
    }
    render() {
        const {userList} = this.state
        const list = userList.map(user=>(<ListView key={user.id} user={user}/>))
        return (
            <div>
                <div>
                    {list}
                </div>
            </div>
        );
    }
}

class ListView extends Component {
    static defaultProps = {
        user: { id: '' , name: ''}
    }
    render() {
        const {id, name} = this.props.user;
        return (
            <div>
                <div>{id}, {name}</div>
            </div>
        );
    }
}

export default ListRender;