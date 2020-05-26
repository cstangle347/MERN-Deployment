const mongoose = require('mongoose');
const standardErrMsg = 'A {PATH} is needed.';

const PetSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [ true, standardErrMsg ],
			unique: true,
			minlength: [ 3, '{PATH} must be at least {MINLENGTH} charaters long.' ]
		},

		type: {
			type: String,
			required: [ true, standardErrMsg ],
			minlength: [ 3, '{PATH} must have a value greater that 1' ],
		},

		description: {
			type: String,
			required: [ true, standardErrMsg ],
			minlength: [ 3, '{PATH} must be {MINLENGTH} characters long.' ]
		},

		skill1: {
			type: String
		},

		skill2: {
			type: String
		},

		skill3: {
			type: String
		}
	},
	{ timestamps: true }
);

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
