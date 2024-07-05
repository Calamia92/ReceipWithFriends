const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');
const { isMobilePhone } = require('validator');

const userSchema = new mongoose.Schema(
    {
        nom: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 55,
            trimp: true
        },
        prenom: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 55,
            trim: true
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            max: 2024,
            minlength: 6,
        },
        telephone: {
            type: String,
            required: true,
            validate: [isMobilePhone],
            trim: true,
            unique: true,
        }

    },
    {
        timestamps: true,
    }
);

//play function before save into display: 'block',
userSchema.pre("save",async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect email')
  };
const UserModel = mongoose.model("user", userSchema);

module.exports= UserModel;