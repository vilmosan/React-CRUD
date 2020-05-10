import React, { Component } from 'react';
import { connect } from 'react-redux';
import BirthdayElement from './BirthdayElement';
import EditComponent from './EditComponent';

class BirthdayList extends Component {
  render() {
    return (
    <div>
        <ul>
            {this.props.birthdays.map((birthday) => 
            <div key={birthday.id}>
                {birthday.editing ? <EditComponent birthday={birthday} key={birthday.id} /> : <BirthdayElement key={birthday.id} birthday={birthday} />}
            </div>)}
        </ul>
        
    </div>
    );
   }
}

const mapStateToProps = (state) => {
    return {
        birthdays: state
    }
}

export default connect(mapStateToProps)(BirthdayList);