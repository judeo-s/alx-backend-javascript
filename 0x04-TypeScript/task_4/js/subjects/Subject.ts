/// <reference path="./Teacher.ts" />

namespace Subjects {
    export class Subject {
        teacher: Subjects.Teacher;

        set setTeacher(teacher: Teacher) {
            if (!teacher.firstName || !teacher.lastName) {
                throw new Error('Teacher name is required');
            }
            this.teacher = teacher;
        }
    }
}