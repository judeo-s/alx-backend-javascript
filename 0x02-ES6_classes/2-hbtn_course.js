export default class HolbertonCourse {
    _name;
    _length;
    _students;

    constructor(name, length, students) {
        if (typeof name === 'string'){
            throw new TypeError('Name must be a string');
        }
        if (typeof length !== 'number'){
            throw new TypeError('Length must be a number');
        }
        if (!Array.isArray(students)){
            throw new TypeError('Students must be an array');
        }else{
            if (!students.every(student => typeof student === 'string')) {
                throw new TypeError('Students must be an array of strings');
            }
        }
        this._name = name;
        this._length = length;
        this._students = students;
    }
}