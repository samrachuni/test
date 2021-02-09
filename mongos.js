const mongoose = require('mongoose');
const Person = require('./model/Person');
const MONGO_URI =
	'mongodb+srv://samra:111213sam@cluster0.jycco.mongodb.net/db3?retryWrites=true&w=majority';

const connectToDb = async () => {
	await mongoose
		.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log('db connected'));
};
const main = async () => {
	await connectToDb();
	console.log('before db');

	/*const newDoc = new Person({ name: 'danaielee', age: 23 });
	newDoc.save((err, doc) => console.log(doc));
*/
	//#1
	/*

#2
Person.create({ name: 'same', age: 44 })
	.then((res) => console.log(res))
    .catch((e) => console.log(e));
   
#3
Person.create([{ name: 'ddd', age: 34 }]).then((docs) => console.log(docs));
 */

	//Person.find({ name: 'same' }).then((res) => console.log(res));

	//Person.findById('601f134f30c09a0894d284c1').then((res) => console.log(res));

	/* Person.update(
	{ name: 'same', age: 66 },
	{ $addToSet: { favoriteFoods: 'dabo3' }, $set: { age: 66 } }
).then((rep) => console.log(rep)); */

	/* const newDoc = new Person({ name: 'danaiel', age: 23 });
newDoc
	.save()
	.then((doc) => console.log(doc))
    .catch((e) => console.log(e));
     */
	/*
	const createAndSavePerson = (done) => {
		var kenzieDaniel = new Person({
			name: 'Kenzie Daniel',
			age: 5,
			favoriteFoods: ['burger', 'juice'],
		});

		kenzieDaniel.save((err, data) => {
			if (err) return console.error(err);
			done(null, data);
		});
	};
 
	const kenzieDaniel = new Person({
		name: 'Kenzie Daniel',
		age: 5,
		favoriteFoods: ['burger', 'juice'],
	});

	kenzieDaniel.save((err, data) => {
		if (err) return console.error(err);
		console.log(data);
	});
    createAndSavePerson(done);
    */

	const arrayOfPeople = [
		{ name: 'Samra', age: 35, favoriteFoods: ['DORO-WOT'] },
		{ name: 'Daniel', age: 35, favoriteFoods: ['Tibs'] },
		{ name: 'Kenzie', age: 5, favoriteFoods: ['pizza'] },
	];
	/*let done = (err, response) => {
		console.log(response);
	};

	const createManyPeople = (arrayOfPeople) => {
		//Person.create(arrayOfPeople);
		Person.create(arrayOfPeople, (err, people) => {
			if (err) return console.log(err);
			done(null, people);
		});
	};
	createManyPeople(arrayOfPeople, done(null, arrayOfPeople));
*/
	let done = (err, response) => {
		console.log(response);
	};
	/*const findPeopleByName = (personName, done) => {
		Person.find({ name: personName }, (err, personFound) => {
			if (err) return console.log(err);
			done(null, personFound);
		});
	};
	findPeopleByName('Samra', done);

	var findOneByFood = (food, done) => {
		Person.findOne({ favoriteFoods: food }, (err, data) => {
			if (err) return console.log(err);
			done(null, data);
		});
	};
	findOneByFood('pizza', done);

	var findPersonById = (personId, done) => {
		Person.findById(personId, (err, data) => {
			if (err) return console.log(err);
			done(null, data);
		});
	};
	findPersonById('6020686c3886b320d335db91', done);

	const findEditThenSave = (personId, done) => {
		const foodToAdd = 'pizza ';
		Person.findById(personId, (err, data) => {
			if (err) return console.log(err);

			data.favoriteFoods.push(foodToAdd);
			data.save((err, foodAdded) => {
				if (err) return console.log(err);
				done(null, foodAdded);
			});
		});
	};

	findEditThenSave('60206b3d531d622257feffb6', done);
	/*
    
	const findAndUpdateByName = (personName, done) => {
		Person.findOneAndUpdate(
			{ name: personName },
			{ new: true },
			(err, data) => {
				if (err) return console.log(err);
				data.age = 6;
				done(null, data);
			}
		);
	};
    findAndUpdateByName('Kenzie', done);
     
	const removeById = (personId, done) => {
		Person.findOneAndRemove(personId, (err, data) => {
			if (err) return console.log(err);
			done(null, data);
		});
	};
	removeById('60206a140176e421cfe1b50f', done);
};
const removeManyPeople = (done) => {
	Person.Model.remove({ name: 'Samra' }, (err, res) => {
		if (err) console.log(err);
		done(null, res);
	});
    removeManyPeople(done);
    */
	const queryChain = (done) => {
		const foodToSearch = 'pizza';
		Person.find({ favoriteFoods: foodToSearch })
			.sort({ name: 1 })
			.limit(4)
			.select({ age: 0 })
			.exec(function (err, people) {
				if (err) console.log(err);
				done(null, people);
			});
	};
	queryChain(done);
};
main();
