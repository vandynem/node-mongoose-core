const mongoose = require( "mongoose" );
const User = mongoose.model("User");

const saveUser = ( data ) => {
    console.log(data)
    const user = new User( data );
    user.setPass( data.password );
    return user.save();
};

const editUser = ( user, data ) => {
    const { name, sex, age } = data;
    const currentUser = user;

    currentUser.name = name;
    currentUser.sex = sex;
    currentUser.age = age;
    return user.save( );
};

const deleteUser = ( user ) => user.remove();

const findUser = ( id ) => User.findOne( { _id: id } );

const findByEmail = (data) => User.findOne({ email: data.email});

module.exports = {
    saveUser,
    editUser,
    deleteUser,
    findUser,
    findByEmail,
};
