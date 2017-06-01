import React from 'react';
import PropTypes from 'prop-types';
import Hobby from './Hobby';

//需要验证的属性
const propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: 0,
            hobbies: ['coding', 'music']
        };
        this.likedCallback = this.likedCallback.bind(this);
        this.addHobbyCallback = this.addHobbyCallback.bind(this);
    }

    likedCallback() {
        let liked = this.state.liked;
        liked++;
        this.setState({
            liked
        });
    }

    addHobbyCallback() {
        const hobbyInput = this.refs.hobby;
        const val = hobbyInput.value;
        if (val) {
            let hobbies = this.state.hobbies;
            hobbies = [...hobbies, val];
            this.setState({
                hobbies
            }, () => {
                hobbyInput.value = '';
            });
        }
    }

    //render是这个组件渲染的Vitrual DOM结构
    render() {
        return (
            <div className="profile-component">
                <h1>My name is {this.props.name}</h1>
                <h2>My age is {this.props.age}</h2>
                <button onClick={this.likedCallback}>Like Me!</button>
                <h3>How many times you liked me ： {this.state.liked}</h3>
                <h2>My Hobby：</h2>
                <ul>
                    {this.state.hobbies.map((hobby, i) => <Hobby key={i} hobby={hobby} />)}
                </ul>
                <input type="text" ref="hobby" />
                <button onClick={this.addHobbyCallback}>Add Hobby</button>
            </div>
        )
    }
}

//将验证赋值给这个组件的propTypes属性
Profile.propTypes = propTypes;

export default Profile;