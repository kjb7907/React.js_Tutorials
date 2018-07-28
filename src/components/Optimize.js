import React, { Component } from 'react';

class Optimize extends Component {
    state = {
        keyword: '',
        userList: [
            {
                id: 0 ,
                name: 'Bruce Lee'
            },
            {
                id: 1 ,
                name: 'Jackie Chan'
            },
            {
                id: 2 ,
                name: 'Chuck Norris'
            },
            {
                id: 3 ,
                name: 'Jet Li'
            }
        ]
    }
    handleChange = (e) => {
        this.setState({
            keyword: e.target.value,
        });
    }
    render() {
        console.log('render optimize')
        const { keyword, userList } = this.state
        const filterItemList = userList.filter(
            item => item.name.indexOf(keyword) !== -1
        )
        return (
            <div>
                <div><input type="text" value={keyword} onChange={this.handleChange}/></div>
                <div>
                    <ItemList data={filterItemList}/>
                </div>
            </div>
        );
    }
}

class ItemList extends Component {
    static defaultProps = {
        data: []
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data
    }

    render() {
        console.log('render ItemList')
        const {data} = this.props
        const itemList = data.map(item=>(<ItemTemplate key={item.id} item={item}/>))
        return (
            <div>
                <div>
                    {itemList}
                </div>
            </div>
        );
    }
}

class ItemTemplate extends Component {
    static defaultProps = {
        item: { id: '' , name: ''}
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.item !== this.props.item;
    }

    render() {
        console.log('render itemTemplate')
        const {name} = this.props.item
        return (
            <div>
                {name}
            </div>
        );
    }
}


export default Optimize;