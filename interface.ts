namespace StudentDetails
{
export interface Student
{
name: string;
id: number;
rollNo: number;
}

export function studentDetail(student:Student){
    console.log(`The details of ${student.id} are : 
                 Name: ${student.name} and Roll No: ${student.rollNo}`)
}
};