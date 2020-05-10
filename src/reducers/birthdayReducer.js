const birthdayReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BIRTHDAY':
          return state.concat([action.data]);
        case 'EDIT_BIRTHDAY':
            return state.map((birthday) => birthday.id === action.id ? {...birthday, editing: !birthday.editing} : birthday);
        case 'UPDATE':
            return state.map((birthday) => {
                if(birthday.id === action.id) {
                    return {
                        ...birthday,
                        birthday: action.data.newBirthday,
                        editing: !birthday.editing
                    }
                } else {
                    return birthday; 
                }
            })
        case 'DELETE_BIRTHDAY':
            return state.filter((birthday) => birthday.id !== action.id);
        default:
          return state;
      }
}
export default birthdayReducer;